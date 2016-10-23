$(function () {
    var recipe_entry = $("input[name=recipe_name]");
    var recipe_title = $(".title");

    $(".cost span").text("4.86");

    if (localStorage.getItem("recipe_name") != "undefined") {
        recipe_entry.val(localStorage.getItem("recipe_name"));
        recipe_title.text(localStorage.getItem("recipe_name"));
    }

    recipe_entry.change(function() {
        localStorage.setItem("recipe_name", recipe_entry.val());
        recipe_title.text(localStorage.getItem("recipe_name"));
    });

});
