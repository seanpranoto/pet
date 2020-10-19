const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/animals", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})
    .then(res => console.log("Established connection to the database"))
    .catch(err => console.log({ Errror: err }));