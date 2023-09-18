document.addEventListener("DOMContentLoaded",()=>{

    let params = new URLSearchParams(window.location.search);
    console.log(params.get("id"));
    $.get("/api/modules/?id=" + params.get("id"), (response)=>{

        console.log(response);
        $("#module_id").html(response.name)

        //We will construct the body of the article:
        let html = "";

        //Now process the layout:
        for (var i = 0 ; i < response.layout.length; i++){

            if (response.layout[i].type == "title"){
                html += `<div class="modules-section-title">`+response.layout[i].text+`</div>`;
            } else if (response.layout[i].type == "subtitle"){
                html += `<div class="modules-section-subtitle">`+response.layout[i].text+`</div>`;
            // } else if (response.layout[i].type == "image" ){
            //     let text = (response.layout[i].text == undefined) ? "--" : response.layout[i].text;
            //     html += `<div class="modules-section-image">
            //                 <div class="modules-section-image-top">`+text+`</div>
            //                 <div class="modules-section-image-bottom" style="background-image: url('/screenshots/`+response.layout[i].url+`')"></div>
            //             </div>`; 
            } else if (response.layout[i].type == "description"){
                html += `<div class="modules-section-description">` + response.layout[i].text +`</div>`;
            }

        }

        console.log(html);
        $("#modules-ajax-content").html(html)

    });



});
