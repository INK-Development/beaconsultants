//companies.js
//show new company tiles every X seconds

let images = [
    "albatross-pools-logo.jpg",  "Dilmah.png",  "image001.png",    "Q.PNG",
    "Barrymedew.png",            "Focus.png",   "image002.png",    "Sebastian.png",
    "Blackwood.png",             "Garden.png",  "Macweld.png",
    "Container.jpg",             "Hume.PNG",    "Orchestral.png"
]
let alphabet = ["A", "B"];

//Timeout
let timeout = 5000;

//The number that is showing on the viewport. For example, if #crow-1B is showing this will be 1 (position in alphabet[])
let viewport1 = 0;

document.addEventListener("DOMContentLoaded", ()=>{

    setInterval(()=>{

        //If #crow-1A is currently showing
        if (viewport1 == 0){

            //Move #crow-1A down:
            $("#crow-1A").animate({ "top": "-100%" });

            //Move #crow-1B  up:
            $("#crow-1B").animate({ "top": "0%" });

            //Now populate the images for each item in #crow-1B:
            for (var i = 1; i < 5; i++){
                let image = images[Math.floor(Math.random() * images.length)+1];
                console.log("adding in " + " #crow-1B_" + i + ", /pics/companies/" + image);
                changeBg("crow-1B_" + i, image);
            }

            //Change the viewport for next time:
            viewport1 = 1;

        } else {
            //Otherwise, #cow-1B is currently showing

            //Move #crow-1A up:
            $("#crow-1A").animate({ "top": "0%" });

            //Move #crow-1B down:
            $("#crow-1B").animate({ "top": "100%" });

            //Now populate the images for each item in #crow-1A:
            for (var i = 1; i < 5; i++){
                let image = images[Math.floor(Math.random() * images.length)+1];
                console.log("adding in " + " #crow-1A_" + i + ", /pics/companies/" + image);
                changeBg("crow-1A_" + i, image);
            }

            //Change the viewport for next time:
            viewport1 = 0;

        }

    }, 5000);

});

function changeBg(id, image){
    console.log("id: " + id, ", image: " + image);
    document.getElementById(id).style.backgroundImage = "url('" + image + "');";
}