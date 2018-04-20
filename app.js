const mongoose = require('mongoose');
const User = require('./model/user');
const config = require('./config/config.js');

mongoose.connect('mongodb://mongodb/mydb', config.optionsDb, (error) => {
  if (error) throw error;
  console.info('connected to mongodb');
});

// TODO move this code other place
let user = new User({
  username: 'berni',
  email: 'sunami82@gmail.com',
});

user.save((err, userInfo) => {
  if (err) throw err;
  console.log('user saved', userInfo);
});

User.find({}, (err, data) => {
  if (err) throw err;
  console.log(data);
});
