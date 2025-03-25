# Desafio Docker

Repositório a fins de estudo sobre docker.

## Desafio Go

### O que essa imagem faz?

Ao iniciar um container a partir dessa imagem, será exibida a mensagem:
`Fullcycle Rocks !!` 

### Imagem docker + Go lang

Repositório da imagem: https://hub.docker.com/r/jeanmalves/fullcycle 

Para baixar a imagem utilize o comando: `docker pull jeanmalves/fullcycle`

### Como criar um container a partir da imagem:

Para criar um container, utilizar a tag `prod`, conform exemplo abaixo:
`docker run jeanmalves/fullcycle:prod`

## Desafio nginx + node

 Para executar a aplicação nodejs com nginx, é preciso iniciar os containers usando o Docker Compose:

 `docker-compose up -d`

Acesse a aplicação através do Nginx no navegador:
`http://localhost:8080`
