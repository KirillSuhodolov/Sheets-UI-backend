const express = require("express")
const bodyParser = require("body-parser")

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
    res.status(200).send(`Columns for ${req.params.hash}`)
})

app.get("/:hash/data", (req, res) => {
    res.status(200).send(`Data for ${req.params.hash}`)
})

const PORT = 3000
app.listen(PORT, () => {
    console.log(`Listening on port number ${PORT}`)
})