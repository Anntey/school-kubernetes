## Deploy with manifests

```zsh
$ kubectl apply -f manifests/
```

```zsh
$ kubectl delete -f manifests/
```

```zsh
$ curl -s http://localhost:8081/pingpong
$ curl -s http://localhost:8081/pingpong
$ curl -s http://localhost:8081/pingpong
$ curl -s http://localhost:8081/pingpong

{"counter":4}%
```

```zsh
$ kubectl logs -f pingpong-dep-694d45dc86-w9s2x pingpong

> pingpong@1.0.0 start /app
> node server.js

Server started on: 3000
added a new ping to db
added a new ping to db
added a new ping to db
added a new ping to db

```
