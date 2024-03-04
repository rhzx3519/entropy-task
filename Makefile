SHELL=/bin/bash

.PHONY: build run clean 

docker=
arch=
build:
	sh build.sh $(docker) $(arch)

push:
	docker push rhzx3519/entropy-task

run: clean
	docker-compose up -d --force-recreate

clean:
	docker-compose down
	docker-compose rm -f