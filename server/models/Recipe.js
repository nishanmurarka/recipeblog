const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
    name:{
        type: String,
        required: 'This field is requied'
    },
    
    email:{
        type: String,
        required: 'This field is requied'
    },
    
    category:{
        type: String,
        required: 'This field is requied'
    },
    role:{
        type: String,
        required: 'This field is required'
    },
    pdf: {
        type: String,
        required: 'This field is requied'
    }

});


module.exports=mongoose.model('Recipe',recipeSchema);