let mongoose = require('mongoose');
mongoose.set('strictQuery', false);
class Database {
  constructor() {
    this._connect()
  }
_connect() {
     mongoose.connect(`mongodb://127.0.0.1:27017/GoldenFruit`)
       .then(() => {
         console.log('Database connection successful')
       })
       .catch(err => {
         console.error('Database connection error')
       })
  }
}
module.exports = new Database()


const fruitSchema= new mongoose.Schema({
    name:String,
    rating:Number,
    review:String
});

const Fruit=mongoose.model("Fruit",fruitSchema);

const fruit=new Fruit({      // Fruit is a collection fruits collections create karega mongoose 
   
    name:"Apple",
    rating:4,
    review:"Best fruit in the world"
});

// fruit.save();


const personSchema= new mongoose.Schema({
    name:String,
    age:Number
});

const Person=new mongoose.model("Person",personSchema);

const person=new Person({ 
        name:"Golden",
        age:24,
});
person.save();


const User = mongoose.model('User', {
    name: { type: String },
    age: { type: Number }
});
  
// Function call
User.insertMany([
    { name: 'Gourav', age: 20},
    { name: 'Kartik', age: 20},
    { name: 'Niharika', age: 20}
]).then(function(){
    console.log("Data inserted")  // Success
}).catch(function(error){
    console.log(error)      // Failure
});


Fruit.find(function(err,fruits){

    if(err){
        console.log(err);
    }
    else
    console.log(fruits);
});