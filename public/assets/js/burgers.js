// Wait to attach handlers until the DOM fully loads
$(function(){
    $(".devour-burger").on("click", function(event){
        var id = $(this).data("id");

        // Send PUT request
        $.ajax("/api/burgers/" + id, {
            type: "PUT"
        }).then(
            function(){
                console.log("changed devoured to devoured");
                // Reload page to get updated list
                location.reload();
            }
        );
    });

    $(".create-form").on("submit", function(event){
        // preventDefault
        event.preventDefault();

        var newBurger = {
            name: $("#burgeroptions").val()
        };

        // Send POST request
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function(){
                console.log("created new burger");
                // Reload the page to get updated list
                location.reload();
            }
        );
    });
});