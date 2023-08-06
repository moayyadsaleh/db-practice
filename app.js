import mongoose from 'mongoose';
const { Schema } = mongoose;
const uri = 'mongodb://127.0.0.1:27017/fruitsDB';
main().catch(err => console.log(err));
async function main() {
    await mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    const fruitSchema = new mongoose.Schema({
        name: String,
        rating: Number,
        review: String
      });
      const Fruit = mongoose.model('Fruit', fruitSchema);
      const fruit = new Fruit({ 
        name: 'Apple',
        rating: 7,
        review: "Pretty Solid as  a fruit"
     });
     console.log(silence.name); 
     await fruit.save();
}