const mongoose = require("mongoose");

module.exports = (DB) => {
    mongoose
        // By default port is included
        .connect(`mongodb://localhost/${DB}`, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        .then(() =>
            console.log(`Established a connection to the database: ${DB}`)
        )
        .catch((err) => console.log(`Cannot connect to ${DB} ERROR:`, err));
};
