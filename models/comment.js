var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var commentSchema = new Schema({
    userName: String,
    commentText: String,
    userId: String,
    avatar: String,
    user: {
      type: Schema.Types.ObjectId,
      ref: "User"
    }
  }, {
    timestamps: true
  });

  module.exports = mongoose.model('Comment', commentSchema);