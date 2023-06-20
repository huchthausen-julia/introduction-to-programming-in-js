document.addEventListener("DOMContentLoaded", function() {
// Function to toggle the light
function toggleLight() {
    const body = document.body;
    
    if (body.classList.contains("light-on")) {
      body.classList.remove("light-on");
      body.classList.add("light-off");
      document.title = "Good Night";
    } else {
      body.classList.remove("light-off");
      body.classList.add("light-on");
      document.title = "Good Morning";
    }
  }

  // Add event listener to the toggle button
  const toggleButton = document.getElementById("toggle-button");
  toggleButton.addEventListener("click", toggleLight);
});