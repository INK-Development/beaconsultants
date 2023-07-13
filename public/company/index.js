//Testimonial showcase
let testimonials = [
    "goodsam.png",
    "newtons.png",
    "chokebyroad.png",
    "wthydraulics.png",
    "smallgoods.png",
    "davidgrays.png",
    "eastwest.png"
];

let current_testimonials = [
    Math.floor(Math.random()*testimonials.length),
    Math.floor(Math.random()*testimonials.length),
    Math.floor(Math.random()*testimonials.length)
];

function changeTestimonials(){

    $(".client-item").css({
        "visibility": "hidden"
    });

    //Next testimonial logos to be shown
    let next_testimonials = [];

    //String to replace #testimonials-container
    let str = "";

    for (var i = 0; i < current_testimonials.length; i++){

        //Generate the next item to be shown
        let next_item = testimonials[Math.floor(Math.random()*testimonials.length)];
        
        //Check if it was previously used or is currently in use:
        while (next_testimonials.includes(next_item) || current_testimonials.includes(next_item)){
            //Regenerate the item if any of the above conditions are met
            next_item = testimonials[Math.floor(Math.random()*testimonials.length)];
        }

        next_testimonials.push(next_item);
        str += "<div class='client-item' style='background-image: url(/pics/"+next_item+")'></div>"

    }

    setTimeout(()=>{
        $("#testimonials-container").html(str);
        $(".client-item").css({
            "visibility": "visible"
        });
    }, 1000);

    setTimeout(()=>{
        changeTestimonials();
    }, 3500);

}

changeTestimonials();