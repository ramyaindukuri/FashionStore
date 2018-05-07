const mongoose =require('mongoose');

const Schema=mongoose.Schema;

const productSchema=new Schema({
    title:{type:String,required:true},
    category:{type:String,required:true},
    price:{type:Number},
    imageUrl:{type:String}
});

module.exports=mongoose.model('products',productSchema);