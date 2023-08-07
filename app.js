import mongoose from 'mongoose';

const { Schema } = mongoose;
const uri = 'mongodb://127.0.0.1:27017/fruitsDB';

async function main() {
    try {
        await mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

        const fruitSchema = new mongoose.Schema({
            name: String,
            rating: Number,
            review: String
        });
        const Fruit = mongoose.model('Fruit', fruitSchema);

        const Apple = new Fruit({
            name: "Apple",
            rating: 7,
            review: "Pretty solid as a fruit"
        });
        //fruit.save

        const personSchema = new mongoose.Schema({
        name: String,
        age: Number
            });
        const Person = mongoose.model("Person", personSchema)
        const person = new Person({
            name: "John",
            age:37
        });
    } catch (error) {
        console.error(error);
    } finally {
        mongoose.disconnect();
    }
}

main().catch(err => console.error(err));