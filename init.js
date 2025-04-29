const mongoose = require("mongoose");
const Chat = require("./models/chat.js");


main()
    .then( () => {
        console.log("Connection Successful!");
    })
    .catch((err) => {
        console.log(err);
    })
async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

let allChats = [
    {
        from: "anindya",
        to: "ved",
        msg: "chicha chicha",
        created_at: new Date(),
    },
    {
        from: "munni",
        to: "bujji",
        msg: "What are you doing?",
        created_at: new Date(),
    },
    {
        from: "chinni",
        to: "vinnu",
        msg: "Eh, its boring Mummy",
        created_at: new Date(),
    },
    {
        from: "prakash",
        to: "ved",
        msg: "Chai piyenge?",
        created_at: new Date(),
    }
];

Chat.insertMany(allChats);