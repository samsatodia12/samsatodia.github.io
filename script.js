var modal = document.getElementById("myModal");

var openFormLink = document.getElementById("openFormLink");

var closeBtn = document.getElementsByClassName("close")[0];

openFormLink.onclick = function(event) {
    event.preventDefault(); 
    modal.style.display = "block"; 
}

closeBtn.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}