const mongoose = require('mongoose');

const books = new mongoose.Schema({
    title : {
        type : String,
        required : true,
    },
    language : {
        type : String,
        required : true,
    },
     price: {
        type : String,
        required : true,
    },
    author: {
        type : String,
        required : true,
    },
    
    description : {
        type : String,
        required : true,
    },
    
    image : {
        type : String,
        required : true,
    }
    
});

 let add= mongoose.model("books", books);
 module.exports = add