function openNav() {
    window.focus();
    document.getElementById("myNav").style.height = "100%";
    document.getElementById("navbtn").onclick = closeNav;
    document.getElementById("myNav").scrollIntoView( {behavior: "smooth"});
    document.body.style.overflowY = 'hidden';
}

function closeNav() {
    document.getElementById("myNav").style.height = "0%";
    document.getElementById("navbtn").onclick = openNav;
    document.body.style.overflowY = 'auto';
}

$(window).on('load', function () {
    $("#container1").twentytwenty();
});