const express =require("express")
const app =express()
const qrcode = require("qrcode")
app.set("view engine" , "ejs")
app.use(express.json())
app.use(express.urlencoded({extended:false}));


app.get("/",(req,res)=>{
    res.render("qrcode.ejs")
})

app.post("/qrcode",(req,res)=>{

const mytext= req.body.url

    qrcode.toDataURL(mytext,(err,code)=>{
        res.render("codeImage.ejs",{
            myqr:code
        })
    })
})


app.listen(5005,()=>{
    console.log("Server is running at port 5005 ")
})