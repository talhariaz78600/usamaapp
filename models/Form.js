const mongoose=require('mongoose');
const {Schema}=mongoose;

const FormSchema= new Schema({
    fristname:{
        type:String,
        required:true
    },
    lastname:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique: true
    },
    phoneno:{
        type:String,
        required:true,
    },
    address:{
        type:String,
        required:true
    },
    country:{
        type:String,
        required:true,
    },
    city:{
        type:String,
        required:true,
    },
    education:{
        type:String,
        required:true,
    },
    degree:{
        type:String,
        required:true,
    },
    workexperience:{
        type:String,
        required:true,
    },
    course:{
        type:String,
        required:true,
    },
    online:{
        type:String,
        required:true,
    },
    photo:{
        type:String,
    },

    admin:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default: Date.now
    }

});

FormSchema.index({ name: 1 }, { maxTimeMS: 20000 });

module.exports = mongoose.model('user', FormSchema);