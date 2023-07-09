//We are using express to serve the content
let express = require("express");
let app = express();
let http = require("http").Server(app);
let port = process.env.PORT || 27015;

let fs = require("fs");

app.use(express.static("public/"));

//Startup the HTTP server
http.listen(port, (err)=>{

    if (err){
        console.log("Error starting up webserver: " + err);
        return;
    }

    console.log("Webserver started up on port " + port);

});

//Handle requests to specific modules
app.get("/api/modules", (req, res)=>{

    //The requested query string (in GET format)
    let requested_id = req.query.id;

    let modules = JSON.parse(fs.readFileSync("modules.json"));
    let module = modules.filter((x)=>{ return x.id == requested_id });
    let module_data = (module.length !== 0) ? module[0] : 404;

    //Respond to the request with the module data
    res.send(module_data);

});

app.get("/api/modules-list", (req, res)=>{

    let modules = JSON.parse(fs.readFileSync("modules.json"));
    let list = [];

    for (var i = 0; i < modules.length; i++){
        list.push({
            id: modules[i].id,
            name: modules[i].name
        })
    }

    res.send(list);

});