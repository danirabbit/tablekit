$(function () {
    var data = localStorage.getItem("text");

    if (data = "undefined") {
        var data = '{ "recipes" : [' +
            '{ "name" : "Test Recipe One", "cost" : "1.23" },' +
            '{ "name" : "Test Recipe Two", "cost" : "1.24" } ]}';
        localStorage.setItem("text", data);
    }

    var obj = JSON.parse(data);

    for (var i = 0, len = obj.recipes.length; i < len; i++) {
        $.get("partials/card.html", function(data){
            $(".recipe-list").append(data);

            var i = 0
            $(".card").each(function(){
                $(".title", this).text(obj.recipes[i].name)
                $(".cost span", this).text(obj.recipes[i].cost);
                $(this).attr("id", i);
                i++;
            });

            $(".card").click(function() {
                window.location.href = "edit?id=" + $(this).attr("id");
            });
        });
    }
});
