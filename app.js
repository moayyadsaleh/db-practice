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

        const kiwi = new Fruit({
            name: "Kiwi",
            rating: 10,
            review: "The best fruit"
        });

        const orange = new Fruit({
            name: "Orange",
            rating: 10,
            review: "Too sour for me"
        });

        const banana = new Fruit({
            name: "Banana",
            rating: 3,
            review: "Weird texture"
        });

        //await Fruit.insertMany([kiwi, orange, banana]);
        console.log("Successfully saved all the fruits to fruits db");

        const fruits = await Fruit.find();
        console.log(fruits);

        fruits.forEach(fruit => {
            console.log(fruit.name);
        });
    } catch (error) {
        console.error(error);
    } finally {
        mongoose.disconnect();
    }
}

main().catch(err => console.error(err));