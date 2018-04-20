# rest-app-demo

* REST API: `Node.js, Express`

## Launch API (without Docker)

`npm i`

`npm start`

## Launch API on Docker

`docker build -t rest-app .`

`docker run --rm -it -p 4000:4000 -v $(pwd):/API rest-app`
