document.addEventListener('DOMContentLoaded', () => {

    var navBar = document.getElementById("navBar");
    navBar.style.height = 0;

    document.getElementById("navButton").onclick = function() {

        if (navBar.height === "0px") {
            navBar.style.height = "70px";
        } else {
            navBar.style.height = "0px";
        }
    }

});
