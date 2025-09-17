function toggleMenu(){
document.querySelector(".nav-links").classLi st.toggle("show");
}
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    document.getElementById("successMsg").style.display = "block";
    this.reset();
});
function loadProject(url) {
    document.getElementById("projects").style.display = "none";
    document.getElementById("viewer").style.display = "block";
    document.getElementById("projectFrame").src = url;
}

function closeViewer() {
    document.getElementById("viewer").style.display = "none";
    document.getElementById("projects").style.display = "block";
    document.getElementById("projectFrame").src = "";
}