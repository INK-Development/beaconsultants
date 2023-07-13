document.addEventListener("DOMContentLoaded", ()=>{

    $.get("/api/modules-list", (res)=>{

        console.log(res);
        for (var i = 0; i < res.length; i++){
            $("#section-modules").append(`
            <a href="/services/modules/?id=`+ res[i].id + `">
                <div class="module">
                    <div class="module-icon"></div>
                    <div class="module-text">`+res[i].name+`</div>
                </div>
            </a>`);
        }

    });

});