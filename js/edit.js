$(function () {

    var urlParams = parseURLParams(window.location.href);
    var id = urlParams.id[0];

    var data = localStorage.getItem("text");
    var obj = JSON.parse(data);

    var recipe_entry = $("input[name=recipe_name]");

    recipe_entry.val(obj.recipes[id].name);

    recipe_entry.change(function() {
        obj.recipes[id].name = recipe_entry.val()
        localStorage.setItem("text", JSON.stringify(obj));
    });

    $.get("partials/ingredient.html", function(data){
        $(".ingredient-list").html(data);
    });
});

function parseURLParams(url) {
    var queryStart = url.indexOf("?") + 1,
        queryEnd   = url.indexOf("#") + 1 || url.length + 1,
        query = url.slice(queryStart, queryEnd - 1),
        pairs = query.replace(/\+/g, " ").split("&"),
        parms = {}, i, n, v, nv;

    if (query === url || query === "") {
        return;
    }

    for (i = 0; i < pairs.length; i++) {
        nv = pairs[i].split("=");
        n = decodeURIComponent(nv[0]);
        v = decodeURIComponent(nv[1]);

        if (!parms.hasOwnProperty(n)) {
            parms[n] = [];
        }

        parms[n].push(nv.length === 2 ? v : null);
    }
    return parms;
}
