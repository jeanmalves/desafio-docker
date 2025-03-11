FROM golang:1.24

WORKDIR /usr/src/app

RUN go mod init jeanmalves/fullcycle

COPY ./main.go .

CMD ["go", "run", "main.go"]

