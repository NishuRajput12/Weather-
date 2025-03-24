// script.js
console.log("hello");
$(document).ready(function() {
    const apiKey = "80ddee016ea6bf036130170c0385225a"; // Replace with your OpenWeatherMap API key
    const apiUrl = "https://api.openweathermap.org/data/2.5/weather";

    // Event listener for the search button
    $('#searchButton').on('click', function() {
        const city = $('#cityInput').val().trim();
        
        if (city === "") {
            alert("Please enter a city name.");
            return;
        }

        // Call the weather API
        $.ajax({
            url: `${apiUrl}?q=${city}&appid=${apiKey}&units=metric`, // Metric for Celsius
            method: "GET",
            success: function(data) {
                $('#weatherDetails').removeClass('d-none');
                $('#errorMessage').addClass('d-none');

                // Update UI with weather data
                $('#cityName').text(data.name);
                $('#temperature').text(data.main.temp);
                $('#humidity').text(data.main.humidity);
                $('#windSpeed').text(data.wind.speed);
                $('#conditions').text(data.weather[0].description);
            },
            error: function() {
                // Show error message if city not found
                $('#weatherDetails').addClass('d-none');
                $('#errorMessage').removeClass('d-none');
            }
        });
    });
});
