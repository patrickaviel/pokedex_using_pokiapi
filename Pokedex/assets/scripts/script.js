$(document).ready(function(){
    $.get("http://pokeapi.co/api/v2/pokemon/?limit=150", function(res) {

        var html_str = "";
        html_str += "<h3>Pokemon</h3>";
        
        for(var i = 1; i < res.results.length; i++) {
            html_str += "<img class='pokemon p-3 border' id=" + i +" src='https://pokeres.bastionbot.org/images/pokemon/" + i +".png'>";
        }
        
        $("#pokemon").html(html_str);
        
    }, "json");

    $(document).on("click", "img" , function() {
        var id = $(this).attr("id");
        
        $.get("http://pokeapi.co/api/v2/pokemon/" + id, function(res) {

            console.log(res.name);
            console.log(res.height);
            console.log(res.weight);
            var types =[];
            // console.log(res.types);
            for (let i = 0; i < res.types.length; i++) {
                
                // console.log(res.types[i]);
                types.push(res.types[i].type.name); 
                
            };
            console.log(types);

            var html_str = "";
            html_str += "<div class='card mx-auto my-5 bg-dark text-white' style='width: 18rem;'>";
            html_str += "<img class='card-img-top rounded mx-auto pokemon p-2' src='https://pokeres.bastionbot.org/images/pokemon/" + id +".png'>";
            html_str += "<div class='card-body'>";

            html_str += "<h5 class='card-title text-center'>"+ res.name.toUpperCase() +"</h5>";
            
            html_str += "<p class='card-text'> Height: "+ res.height +"</p>";
            html_str += "<p class='card-text'> Weight: "+ res.weight +"</p>";
            html_str += "<p class='card-text'>Types: </p>";
            html_str += "<ul class='list-group'>";
            for(var i = 0; i < types.length; i++) {
                html_str += "<li class='list-group-item'>"+ types[i]+"</li>";
            }
            html_str += "</ul></div></div>";



            $("#pokedex").html(html_str);

        }, "json");

                    });
})