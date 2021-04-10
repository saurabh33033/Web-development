const express = require('express');
const path = require("path")

const app = express();
const port = 80;

// Express Specific Stuff 
app.use("/static", express.static("static")) //For serving static file.

// PUG Specific Stuff 
app.set('view engine', 'pug') //Set template engine as pug.
app.set('views', path.join(__dirname, 'views')) // Set the views directory

// Endpoint
app.get("/", (req, res)=>{
    const con = "This is best content available on internet so use it."
    const params = {title:"PUBG is the best game.", content: con}
    res.status(200).render("index.pug", params)
})

// Start the Server 
app.listen(port, () => {
    console.log(`This is application succesfully start on ${port}`)
});
