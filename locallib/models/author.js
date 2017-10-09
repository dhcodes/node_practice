const mongoose = require('mongoose');
const moment = require ('moment');

const Schema = mongoose.Schema;

let AuthorSchema = Schema(
  {
    first_name: {type: String, required: true, max: 100},
    family_name: {type: String, required: true, max: 100},
    date_of_birth: {type: Date},
    date_of_death: {type: Date}
  }
);

//Virtual for author's full name
AuthorSchema
  .virtual('name')
  .get(function() {
    return this.family_name + ', ' + this.first_name;
  });

//Virtual for author's URL
AuthorSchema
  .virtual('url')
  .get(function() {
    return '/catalog/author/' + this.id;
  });

//Virtual for author's DOB
AuthorSchema
  .virtual('dob')
  .get(function() {
    return moment(this.date_of_birth).format('MMMM Do, YYYY');
  });

AuthorSchema
  .virtual('dod')
  .get(function() {
    if (this.date_of_death) {
      return moment(this.date_of_death).format('MMMM Do, YYYY');
    }
    else {
      return 'Present'
    }
  })

//Export model
module.exports = mongoose.model('Author', AuthorSchema);