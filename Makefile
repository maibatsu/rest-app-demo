build:
	docker build -t rest-app .

hotreload:
	docker run --rm -it -p 4000:4000 -v $(pwd):/API rest-app