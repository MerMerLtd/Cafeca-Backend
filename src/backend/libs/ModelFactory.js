const Utils = require('./Utils');
const stucts = require('../structs/');

/*
  TABLE.PRIMARY
  TABLE.VALUE
  TABLE.INDEX
*/

const flatten = (json, prefix) => {
  assert(typeof(json) == 'object', 'unable to flatten: invalid data format')
  return Object.keys(json).reduce((prev, curr) => {
    if(typeof(json[curr]) == 'object' && !Array.isArray(json[curr])) {
      let newPrefix = prefix ? 
        `${prefix}${curr}.` : 
        `${curr}.`;
      return prev.concat(flatten(json[curr], newPrefix));
    } else {
      return prev.concat({
        key: prefix ? 
          prefix + curr : 
          curr,
        value: json[curr]
      });
    }
  }, []);
}

class Model {
  constructor({ struct, value }) {
    // it is a new record if value do not have primary key
    this.init(struct);
    this._old = [];
    this.value = value;
    return this;
  }
  init(struct) {
    this.table = struct._table;
    this.struct = flatten(struct);
    return true;
  }
  initValue() {
    this._old = Array.isArray(this._value) ?
      this._value :
      [];
    return true;
  }
  import(raws) {
    this._value = raws;
    this.initValue();
  }

  set table(value) {
    assert(/^[a-zA-Z0-9_-]+$/.test(value), 'unable to set table: invalid table name');
    this._table = value;
    return value;
  }
  get table() {
    return this._table;
  }

  set struct(value) {
    this._struct = flatten(struct).filter((v) => {
      return v.key.indexOf("_") != 0;
    });
  }

  set value(value) {
    if(Array.isArray(value)) {
      this.import(value);
    } else {
      this.import(flatten(value));
    }
    return true;
  }
  get value() {
    return this._value;
  }

  get update() {
    return this._old.length > 0 ?
      this._value :
      this._value.map((v) => {
        this._
      })
      .filter((v) => {
        return v !== undefined;
      });
  }
}

class ModelFactory {
  static create({ struct, value }) {
    return Promise.resolve(new Model({ struct }));
  }
  static find({ struct, condition }) {
    return Promise.resolve(new Model());
  }
  static save({ model, db }) {
    return Promise.resolve(true);
  }
}

module.exports = ModelFactory;