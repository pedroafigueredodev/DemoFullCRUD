const mongoose = require("mongoose");


mongoose.connect("mongodb+srv://admin:Adminadmin@cluster0.tux4e.mongodb.net/crud-employees?retryWrites=true&w=majority", {useNewUrlParser: true})
.then((db) => console.log("DB is connected"))
.catch((err) => console.error(err));


// mongoose.connect("mongodb://localhost/crud-employees",{
//     useUnifiedTopology : true,
//     useNewUrlParser: true,
//     useFindAndModify: false
// })
// .then((db) => console.log("DB is connected"))
// .catch((err) => console.error(err));
