help:
	@echo ""
	@echo "Available tasks:"
	@echo "    build                 build docker container"
	@echo "    hotreload             start container on port :4000"
	@echo "    help                  help"
	@echo ""

build:
	@echo "docker build"
	docker build -t rest-app .

hotreload:
	@echo "docker run"
	docker run --rm -it -p 4000:4000 -v $(pwd):/API rest-app