# Cafeca-Backend
Backend for Cafeca service

## Deploy ##
```shell
sudo apt-get update
sudo apt-get install openssl libtool autoconf automake uuid-dev build-essential gcc g++ software-properties-common unzip make git libcap2-bin python -y
bash <(curl https://raw.githubusercontent.com/Luphia/SIMPLE/master/shell/install-env.sh -kL)
cd /etc
sudo mkdir Cafeca-Backend
sudo chown ${USER} -R /etc/Cafeca-Backend
git clone https://github.com/MerMerLtd/Cafeca-Backend
cd Cafeca-Backend
npm install
node .
```

## API List ##
Server: api.cafeca.cc

### 取得題目 ###
[GET] https://find.cafeca.cc/api/questions

```
https://find.cafeca.cc/api/questions
```
```json
[
  {
    "questionID": "Q00004",
    "content": "想點一杯微笑，全糖",
    "img":"https://www.listenmoneymatters.com/wp-content/uploads/2018/04/19130-Question-Man-Lightbulb-1.jpg"
  },
  {
    "questionID": "Q00006",
    "content": "聽見一個故事，微酸",
    "img": "https://www.listenmoneymatters.com/wp-content/uploads/2018/04/19130-Question-Man-Lightbulb-1.jpg"
  },
  {
    "questionID": "Q00002",
    "content": "今天是個涼爽的好天氣",
    "img": "https://www.listenmoneymatters.com/wp-content/uploads/2018/04/19130-Question-Man-Lightbulb-1.jpg"
  }
]
```

### 取得推薦 ###
[GET] https://find.cafeca.cc/api/suggestion?{questionID}={answer}&position={geolocation}

```
https://find.cafeca.cc/api/suggestion?Q00005=1&Q00003=0&Q00002=1&position=25.0231878,121.5420401
```
```json
{
  "product": "綠帽子",
  "store": "三%比率咖啡",
  "storeID": "TW00001",
  "img": "http://solafood.vn/wp-content/uploads/2016/06/Solafood-10-loi-ich-tuyet-voi-cua-cafe-nguyen-chat-doi-voi-suc-khoe.jpg"
}
```

### 取得店家資訊 ###
[GET] https://find.cafeca.cc/api/store/:storeID

```
https://find.cafeca.cc/api/store/TW00001
```
```json
{
  "storeID": "TW00001",
  "store": "三%比率咖啡",
  "description": "比率咖啡介紹文字",
  "address": "",
  "position": [20,125],
  "img": "http://img.47life.tw/uploads/20180214233733_39.jpg"
}
```
