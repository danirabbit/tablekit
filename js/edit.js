$(function () {
    var recipe_entry = $("input[name=recipe_name]");

    if (localStorage.getItem("recipe_name") != "undefined") {
        recipe_entry.val(localStorage.getItem("recipe_name"));
    }

    recipe_entry.change(function() {
        localStorage.setItem("recipe_name", recipe_entry.val());
    });

    $.get("partials/ingredient.html", function(data){
        $(".ingredient-list").html(data);
    });
});
