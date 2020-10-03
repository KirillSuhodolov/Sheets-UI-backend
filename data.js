const {getData$} = require("./src/js/sheets")

module.exports = (req, res) => {
    getData$().subscribe(data => res.status(200).json(data))
}