import express from "express";
const app = express();


const products = {
    ProductList:[
        {name:"apple",quantity:100,unit:"kg",price:100,type:"royal gala"},
        {name:"kiwi",quantity:200,unit:"kg",price:100,type:"wild"},

    ]
}
app.listen(5001,()=>console.log("app is listening"))
app.get('/products',(req,res)=>{
    res.send(products)
})
