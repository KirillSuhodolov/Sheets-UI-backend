const {getColumns$} = require("./src/js/sheets")

module.exports = (req, res) => {
    getColumns$().subscribe(columns => res.status(200).json(columns)).send()
}