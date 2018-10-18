// Requires:
let express = require("express");
let bodyParser = require("body-parser");
let fs = require("fs");

let Asset = require("./assets");

// Create express app:
let app = express();


// this middleware takes the content of the request`s body, and parses it to json format
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

//check if "assets.json" file exists
//if not - create this file and init it with an empty array
if (!fs.existsSync("assets.json")) {
    fs.writeFileSync("assets.json", "[]");
}
//Get all users
app.get("/api/assets", (req, res) => {

    let assetsArr = JSON.parse(fs.readFileSync("./assets.json"));

    res.status(200);
    res.send(assetsArr);
});


//Update user
app.put("/api/assets", (req, res) => {

    let assetsArr = JSON.parse(fs.readFileSync("./assets.json"));

    //pointerToassets points to the assets with the requested name
    let PointerToAsset = assetsArr.find(element => element._id == req.query.id);



    if (PointerToAsset) {
        for (key in req.body) {
            PointerToAsset[key] = req.body[key];
        }

        //save the updates to the file
        fs.writeFileSync("assets.json", JSON.stringify(assetsArr));

        res.status(200);
        res.send(` ID number : ${req.query.id} is edited in the file to id number : ${req.body.id} `);
        console.log(req.query.id);

    } else {
        res.status(400);
        res.send(`No such id : ${req.query.id} in the file`);
    }
});


//Delete user
app.delete("/api/assets", (req, res) => {

    let assetsArr = JSON.parse(fs.readFileSync("./assets.json"));
    let filterassetArr = assetsArr.filter(element => element.id != req.query.id);

    //if the filtered array is shorter than the original array - we moved a assets (delete success)
    //else - send an error
    if (filterassetArr.length < assetsArr.length) {
        //save the updates to the file
        console.log(assetsArr);

        assetsArr = filterassetArr;
        fs.writeFileSync("assets.json", JSON.stringify(assetsArr));

        res.status(200);
        res.send(`ID number : ${req.query.id} is Deleted from the file`);
        console.log(req.query.id);

    } else {
        res.status(400);
        res.send(`No such ID ${req.query.id} in the file`);
    }
});

//Add person to the file
app.post("/api/assets", (req, res) => {

    let assetsArr = JSON.parse(fs.readFileSync("./assets.json"));
    let newAsset = new Asset.AssetsClassPointer();

    try {
        for (key in req.body) {
            newAsset[key] = req.body[key];

        }

        assetsArr.push(newAsset);

        fs.writeFileSync("assets.json", JSON.stringify(assetsArr));
        res.status(201);
        res.send("New Asset addedd to the file");
        console.log(newAsset);
    } catch (e) {
        res.status(400);
        res.send(e.message);
    }
});



app.listen(4500, () => {
    console.log("Server runs")
});
