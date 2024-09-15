var modal = document.getElementById("myModal");

// Get the link that opens the modal
var openFormLink = document.getElementById("openFormLink");

// Get the <span> element that closes the modal
var closeBtn = document.getElementsByClassName("close")[0];

// When the user clicks on the link, open the modal
openFormLink.onclick = function(event) {
    event.preventDefault(); // Prevent default link behavior
    modal.style.display = "block"; // Show the modal
}

// When the user clicks on <span> (x), close the modal
closeBtn.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}