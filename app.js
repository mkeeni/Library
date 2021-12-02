const express = require("express")
const app = express()
const mongoose = require("mongoose")
const url = "mongodb+srv://test1:test1@cluster0.4kr1d.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
const lib = require("./schema");
mongoose.connect(url).then(() => console.log('Connected to DB'));
app.use(express.json())
app.post("/add-new-post", async (req, res) => {
    const name = req.body.BookName;
    const issuer = req.body.IssuerName;
    const date = req.body.Date;
    try {
        const li = new lib(
            {
                BookName: name,
                IssuerName: issuer,
                Date: date
            }
        )
        const savedst = await li.save()
        res.json(
            { "message": "Book Issued", "data": savedst }
        )
    }
    catch (err) {
        res.json(err);
    }
})
app.use("/", (req, res)=>{
    //res.send("Hello from response server")
    res.send("Amrithanshu")
    res.json(

    )
})
app.listen(3000,()=>console.log("Express started"))

