window.onload = function() {
    // Simulate scan duration for 5 seconds
    setTimeout(() => {
        // Change the text to "Scan Complete"
        document.getElementById("scanningText").textContent = "Scan Complete! No Viruses Detected. You may close this app now.";

        // Hide the loader
        document.getElementById("loader").style.display = "none";

        // Show the checkmark
        document.getElementById("checkmark").style.display = "block";
    }, 5000); // Simulate scan duration for 5 seconds
};
