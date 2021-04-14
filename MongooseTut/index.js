// getting-started.js
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/saurabhKart', {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
//   console.log("We are connected bro")
});

const kittySchema = new mongoose.Schema({
    name: String
});

kittySchema.methods.speak = function () {
    const greeting = "My name is " + this.name
    // console.log(greeting);
}

const Kitten = mongoose.model('saurabhKitty', kittySchema);

const saurabhKitty = new Kitten({ name: 'saurabhKitty' });
const saurabhKitty2 = new Kitten({ name: 'saurabhKitty 2' });
// console.log(saurabhKitty.name); // 'Silence'
// saurabhKitty.speak()

saurabhKitty.save(function (err, saurabhKitty) {
    if (err) return console.error(err);
    // saurabhKitty.speak();
  });

  saurabhKitty2.save(function (err, k) {
    if (err) return console.error(err);
    // k.speak();
  });

  Kitten.find({name: "saurabhKitty 2"}, function (err, kittens) {
    if (err) return console.error(err);
    console.log(kittens);
  })