//We are using express to serve the content
let express = require("express");
let app = express();
let http = require("http").Server(app);
let port = process.env.PORT || 27015;

app.use(express.static("public/"));

    //Startup the HTTP server
    http.listen(port, (err)=>{

        if (err){
            console.log("Error starting up webserver: " + err);
            return;
        }

        console.log("Webserver started up on port " + port);

    });