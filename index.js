var express = require("express"),
// how you require a node module
// you can also call in a specific folder ./file.ff
    app = express ()

app.use("/", express.static("./public"))


app.listen(3000)
// sets the server's address
