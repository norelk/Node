// Requires:
var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");

// Create express app:
var app = express();

// Use middlewares:
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

// Connect to MongoDB: 
mongoose.connect("mongodb://localhost:27017/JohnBryceDB", (err) => {
    //check if connection works ok
    if (!err)
        console.log("We're connected to MongoDB.");
})


// Create Model (each collection in the DB will have a new `mongoose.model`): 
var BikeCollection = mongoose.model("bike", {
    frame_colors : String,
    thumb : String,
    id : Number,
    title : String,
    serial : String,
    manufacturer_name : String,
    frame_model : String,
    year : Number

});



// ---------- CRUD ----------

// Add product: 
app.post("/api/bike",  (request, response)=> {
    var bike = new BikeCollection(request.body);
    bike.save();
    response.status(201); // Created.
    response.send(bike);
});

// Get all products:
app.get("/api/bike", (request, response) => {
    BikeCollection.find({})
    .then(bike => response.status(200).send(bike))
    .catch(err => response.status(400).send(err));
});

// Update full product: 
app.put("/api/bike", (request, response) =>{

    BikeCollection.findOne({_id: request.query.id})
    .then(product => {
        bike.name = request.body.name;
        bike.price = request.body.price;
        bike.save();
        response.status(200).send(bike);
    })
    .catch(err => response.status(400).send(err));

});

// Delete product: 
app.delete("/api/bike", (request, response) => {
    BikeCollection.remove({id: request.query.id})
    .then(() => response.status(204).send(console.log('Removed')))
    .catch(err => response.status(400).send(err));
});



// Run server: 
app.listen(3000,  () => {
    console.log("Listening on http://localhost:3000");
});