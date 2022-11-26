const express =require("express")
const app =express()

app.set("view engine" , "ejs")
app.use(express.json())


app.get("/",(req,res)=>{
    res.render("qrcode.ejs")
})



app.listen(5005,()=>{
    console.log("Server is running at port 5005 ")
})