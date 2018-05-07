const express=require('express');
const mongoose=require('mongoose');
const app=express();

const home=require('./routes/home.route');
const product=require('./routes/products.route');

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use('/',home);
app.use('/api/products',product);

mongoose.connect('mongodb://admin:admin@ds255319.mlab.com:55319/fashion_store')
        .then(con=>console.log('Connection Established'))
        .catch(err=>console.log(err));

module.exports=app;