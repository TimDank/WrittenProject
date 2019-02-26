document.addEventListener('DOMContentLoaded', () => {

    // var navBar = document.getElementById("navBar");
    // navBar.style.height = 0;
    //
    // document.getElementById("navButton").onclick = function() {
    //
    //     if (navBar.height === "0px") {
    //         navBar.style.height = "70px";
    //     } else {
    //         navBar.style.height = "0px";
    //     }
    // }

    var html = document.querySelector("html")
    var outerDiv = document.getElementById("outerDiv");

    outerDiv.onmouseenter = function() {
        html.style.backgroundColor = "#7a5050";
    }

    outerDiv.onmouseleave = function() {
        html.style.backgroundColor = "#966363";
    }

});
