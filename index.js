var express = require("express"),
// how you require a node module
// you can also call in a specific folder ./file.ff
    app = express ()
    user={}

app.use("/", express.static("./public"))

app.post("/calculate", function(req, res){
    user=req.body
    res.send("User name logged")
});


app.listen(3000)
// sets the server's address
