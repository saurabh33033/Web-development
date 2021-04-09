const express = require('express');
const path = require("path")

const app = express();
const port = 80;

//For serving static file.
app.use("/static", express.static("static"))

//Set template engine as pug.
app.set('view engine', 'pug')

// Set the views directory
app.set('views', path.join(__dirname, 'views'))

// Our pug demo endpoint
app.get("/demo", (req, res)=>{
    res.status(200).render("demo", {title:"Hey Saurabh", message:"Nice to meet you."})
})

app.get("/", (req, res) =>{
    res.send("This is my first express app with harry.")
});

app.get("/about", (req, res) =>{
    res.send("This about page of my first express app with harry.")
});

app.post("/about", (req, res) =>{
    res.send("This post request of about page of my first express app with harry.")
});
app.get("/this", (req, res) =>{
    res.status(404).send("This page is not found.")
});

app.listen(port, ()=>{
    console.log(`This is application succesfully start on ${port}`)
});
