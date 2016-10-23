$(function () {
    var recipe_title = $(".title");

    $(".cost span").text("4.86");

    if (localStorage.getItem("recipe_name") != "undefined") {
        recipe_title.text(localStorage.getItem("recipe_name"));
    }

    $(".card").click(function() {
        window.location.href = "edit";
    });
});
