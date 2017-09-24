const mongoose = require('mongoose');

const Schema = mongoose.Schema;

let BookSchema = Schema({
  title: {type: String, required: true},
  author: {type: Schema.ObjectId, ref: 'Author', required: true},
  summary: {type: String, required: true},
  isbn: {type: String, required: true},
  genre: [{type: Schema.ObjectId, ref: 'Genre'}]
});

BookSchema
  .virtual('url')
  .get(function() {
    return '/catalog/book' + this._id
  })

  //Export model
  module.exports = mongoose.model('Book', BookSchema)