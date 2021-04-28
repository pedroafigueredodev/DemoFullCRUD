const mongoose = require("mongoose");


//mongodb+srv://admin:Adminadmin@cluster0.tux4e.mongodb.net/crud-employees?retryWrites=true&w=majority

//mongoose.connect("mongodb+srv://<username>:<password>@<address>/<database>?retryWrites=true&w=majority", {useNewUrlParser: true});
mongoose.connect("mongodb+srv://admin:Adminadmin@cluster0.tux4e.mongodb.net/crud-employees?retryWrites=true&w=majority", {useNewUrlParser: true})
.then((db) => console.log("DB is connected"))
.catch((err) => console.error(err));
