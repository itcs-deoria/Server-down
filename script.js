// Function to update the timer
function updateTimer() {
    // Set the date for today's 10 PM (evening)
    const now = new Date();
    const targetTime = new Date();
    targetTime.setHours(22, 0, 0, 0);  // Set time to 10:00 PM (evening)

    // If it's past 10 PM today, set target for 10 PM tomorrow
    if (now > targetTime) {
        targetTime.setDate(targetTime.getDate() + 1);
    }

    // Calculate the time difference
    const timeDiff = targetTime - now;

    // Convert the time difference into hours, minutes, and seconds
    const hours = Math.floor(timeDiff / (1000 * 60 * 60));
    const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

    // Display the timer
    document.getElementById("timer").textContent = `${hours}h ${minutes}m ${seconds}s`;

    // If time is up, show the link
    if (timeDiff <= 0) {
        document.getElementById("timer").textContent = "Time's up!";
        document.getElementById("link-container").style.display = "block"; // Show the link
    } else {
        // Update the timer every second
        setTimeout(updateTimer, 1000);
    }
}

// Start the timer when the page loads
window.onload = updateTimer;
