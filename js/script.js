
    document.addEventListener("DOMContentLoaded", function() {
        var settingsButton = document.getElementById("settingsButton");
        var settingsMenu = document.getElementById("settingsMenu");

        settingsButton.addEventListener("click", function() {
            if (settingsMenu.style.display === "none" || settingsMenu.style.display === "") {
                settingsMenu.style.display = "block";
            } else {
                settingsMenu.style.display = "none";
            }
        });

        // Optional: Close the menu if clicked outside
        document.addEventListener("click", function(event) {
            if (!settingsButton.contains(event.target) && !settingsMenu.contains(event.target)) {
                settingsMenu.style.display = "none";
            }
        });
    });

