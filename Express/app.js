const express = require('express');
const path = require("path")
const fs = require('fs')

const app = express();
const port = 80;

// Express Specific Stuff 
app.use("/static", express.static("static")) //For serving static file.
app.use(express.urlencoded())

// PUG Specific Stuff 
app.set('view engine', 'pug') //Set template engine as pug.
app.set('views', path.join(__dirname, 'views')) // Set the views directory

// Endpoint
app.get('/', (req, res)=>{
    const con = "This is the best content on the internet so far so use it wisely"
    const params = {'title': 'PubG is the best game', "content": con}
    res.status(200).render('index.pug', params);
})


app.post("/", (req, res) =>{
    name = req.body.name
    age = req.body.age
    gender = req.body.gender
    address = req.body.address
    more = req.body.more

    let outputToWrite = `The name of the client is ${name}, ${age} years old, ${gender}, residing at ${address}. More about him/her: ${more}`
    fs.writeFileSync('output.txt', outputToWrite)
    const params ={"message":"Your forms has been submited successfully"};
    res.status(200).render("index.pug", params);
});

// Start the Server 
app.listen(port, () => {
    console.log(`This is application succesfully start on ${port}`);
});
