import mongoose from 'mongoose';

const { Schema } = mongoose;
const uri = 'mongodb://127.0.0.1:27017/fruitsDB';

async function main() {
    try {
        await mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

        const fruitSchema = new mongoose.Schema({
            name: {
                type: String,
                required: [true, "Please check your data entry. No name specified"],
            },
            rating: {
                type: Number,
                min: 1,
                max: 10
            },
            review: String
        });
        const Fruit = mongoose.model('Fruit', fruitSchema);

        const apple = new Fruit({
            name: "Apple",
            rating: 8,  // Corrected rating within the valid range
            review: "Pretty solid as a fruit"
        });
        await apple.save();

        const personSchema = new mongoose.Schema({
            name: String,
            age: Number
        });
        const Person = mongoose.model("Person", personSchema);
        const person = new Person({
            name: "John",
            age: 37
        });
        //await person.save();
    } catch (error) {
        console.error(error);
    } finally {
        mongoose.disconnect();
    }
}

main().catch(err => console.error(err));