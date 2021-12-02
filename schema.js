const mongoose = require('mongoose');
const { Schema } = mongoose;
const dataschema = new Schema(
    {
        BookName: String, // String is shorthand for {type: String}
        IssuerName: String,
        Date: String,
});
module.exports = mongoose.model('Libraryhere', dataschema,'Library');
