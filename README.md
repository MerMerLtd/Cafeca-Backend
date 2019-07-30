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
- API Server: [https://api.cafeca.cc](https://api.cafeca.cc)  
- API List: [Documents](https://github.com/MerMerLtd/Cafeca-Backend/wiki/API)
