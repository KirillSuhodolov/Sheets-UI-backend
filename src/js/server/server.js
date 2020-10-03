const express = require("express")
const bodyParser = require("body-parser")
const {getColumns$, getData$} = require("../sheets")

const app = express()
app.use(bodyParser.json())
app.use((req, res, next) => {
    console.log("Request: " + JSON.stringify({
        headers: req.headers,
        body: req.body
    }, null, 2))
    next()
})

app.get("/", (req, res) => {
    res.status(200).send("Sheets UI API")
})

app.get("/:hash", (req, res) => {
    res.status(200).send(`API for ${req.params.hash}`)
})

app.get("/:hash/columns", (req, res) => {
    getColumns$().subscribe(columns => res.status(200).json(columns)).send()
})

app.get("/:hash/data", (req, res) => {
    getData$().subscribe(data => res.status(200).json(data))
})

const PORT = 3000
app.listen(PORT, () => {
    console.log(`Listening on port number ${PORT}`)
})