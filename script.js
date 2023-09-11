document.getElementById("loadButton").addEventListener("click", function() {
    // Hide the button
    this.style.display = "none";
    
    // Show the loading screen
    const loadingScreen = document.getElementById("loadingScreen");
    loadingScreen.style.display = "flex";

    // Simulate a delay (you can replace this with your actual page loading logic)
    setTimeout(function() {
        // Redirect to the desired page (replace "destination.html" with your actual page)
        window.location.href = "load.html";
    }, 3000); // 3 seconds delay for demonstration purposes

    // Show an alert after 5 seconds
    setTimeout(function() {
        alert("LOADED SUCCESSFULLY");
    }, 5000); // 5 seconds delay
});

function changeURL(newPath) {
  window.history.pushState({}, '', newPath);
}
