var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var UserGroup = require('./UserGroup')

var UserSchema = new Schema({
	name: String,
	password: String,
	group: { type: Schema.Types.ObjectId, ref: 'UserGroup' },
	createTime: { type: Date, default: Date.now },
	updateTime: { type: Date, default: Date.now }
})

UserSchema.post('save', function(doc, next){
	UserGroup
	.update(
		{_id:doc.group}, 
		{'$addToSet': {users: doc._id}}
	)
	.then(() => next())
})

var User = mongoose.model("User",UserSchema);

module.exports = User