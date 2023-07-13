document.addEventListener("DOMContentLoaded",()=>{

    $.get("/api/modules/?id=CREDITORS", (response)=>{

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
            } else if (response.layout[i].type == "image" ){
                html += `<div class="modules-section-image">
                            <div class="modules-section-image-top">`+response.layout[i].text+`</div>
                            <div class="modules-section-image-bottom" style="background-image: url('/screenshots/`+response.layout[i].url+`')"></div>
                        </div>`; 
            } else if (response.layout[i].type == "description"){
                html += `<div class="modules-section-description">` + response.layout[i].text +`</div>`;
            }

        }

        console.log(html);
        $("#modules-ajax-content").html(html)

    });



});
