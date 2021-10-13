package main

import (
	"fmt"
	"net/http"

	"github.com/P-Shikhov/GoChat/pkg/websocket"
)

func serveWs(pool *websocket.Pool, w http.ResponseWriter, r *http.Request) {
	conn, err := websocket.Upgrade(w, r)
	if err != nil {
		fmt.Fprintf(w, "%+v\n", err)
	}

	client := &websocket.Client{
		Conn: conn,
		Pool: pool,
	}

	pool.Register <- client
	client.Read()
}

func setupRoutes() {
	pool := websocket.NewPool()
	go pool.Start()

	http.HandleFunc("/ws", func(rw http.ResponseWriter, r *http.Request) {
		serveWs(pool, rw, r)
	})
}

func main() {
	setupRoutes()
	http.ListenAndServe(":8080", nil)
}
