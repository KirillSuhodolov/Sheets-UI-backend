const {of} = require("rxjs")

module.exports = {
    getColumns$: () => of(["column1", "column2", "column3"]),
    getData$: () => of({data: [{
        column1: "value1",
        column2: "value2",
        column3: "value3"
    },{
        column1: "value4",
        column2: "value5",
        column3: "value6"
    },
]})
}