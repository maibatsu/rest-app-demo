# rest-app-demo

* REST API: `Node.js, Express`
* UI: `React`

## Launch API (without Docker)

`npm i`

`npm run dev`

## Launch API on Docker

`docker build -t rest-app .`

`docker run --rm -it -p 4000:4000 -v $(pwd):/API rest-app`
