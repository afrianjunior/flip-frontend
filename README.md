# Before run this application

### Please setup server nginx as backend rest-ful

```bash
$ cd server
$ docker build -t flip-server-test:latest .
$ docker run -p 9000:80 flip-server-test:latest
```

Now, the server run on port 9000 or http://localhost:9000

### Copy-paste the .env file

```bash
$ cp .env.example .env
```

Edit the BASE_URL to your server 

### Install packages

```bash
$ yarn
```

### Run

```bash
$ yarn dev
```

Server run on port 3000

### build

```bash
$ yarn build
```

### Run Production

```bash
$ yarn start
```

### If you want to run with Docker

```bash
$ docker build -t flip-frontend:latest .
$ docker run -p 3000:3000 flip-frontend:latest
```