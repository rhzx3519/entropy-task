SHELL=/bin/bash

.PHONY: build run clean 
run: clean
	docker-compose up -d --force-recreate

docker=
arch=
build:
	sh build.sh $(docker) $(arch)

push:
	docker push rhzx3519/entropy-task

clean:
	docker-compose down
	docker-compose rm -f