# ChatAI

ChatAI, the revolutionary app that allows you to have a conversational experience like never before! With cutting-edge technology, ChatAI uses state-of-the-art artificial intelligence algorithms to understand and respond to your queries and requests. Whether you're looking for information on a specific topic, or just want to have a casual chat, ChatAI is the perfect app for you. So why wait? Download ChatAI today and start chatting with the future!

## Requirement

* docker
* docker-compose
* make (optional)

## Installation

1. Clone repository
```sh
git clone --depth=1 https://github.com/kaduhiro/chat-ai
cd chat-ai
```

2. Duplicate environment file and set your API key for OpenAI
```sh
cp .env.local.template .env.local
```

```
OPENAI_API_KEY=sk-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

3. Run
```sh
# use make
make up
```

```sh
# use docker-compose
docker-compose -f deployments/production/docker-compose.yml up -d
```

4. Open http://127.0.0.1:3000 in browser

5. Show logs in container
```sh
# use make
make logs
```

```sh
# use docker-compose
docker-compose -f deployments/production/docker-compose.yml logs -f
```

## Usage

```
usage: make <target>

services:
  * chat-ai

targets:
  build/<service>    build or rebuild a image
  run/<service>      run a one-off command on a container
  exec/<service>     run a command in a running container
  up                 create and start containers, networks, and volumes
  up/<service>       create and start a container
  down               stop and remove containers, networks, images, and volumes
  down/<service>     stop and remove a container
  logs               view output from containers
  log/<service>      view output from a container
  help               list available targets and some
  clean              remove cache files from the working directory
```

## Author

[Twitter](https://twitter.com/kaduhiro_)

## License

[MIT](https://en.wikipedia.org/wiki/MIT_License)
