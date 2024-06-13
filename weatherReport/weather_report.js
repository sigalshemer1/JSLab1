function showweatherDetails(event) {
    
    event.preventDefault();
    console.log("BEFORE");
    const lat = document.getElementById('lattitude').value;
    console.log("Lat" + lat);
    const longi = document.getElementById('longitude').value;
    console.log("Lon" + longi);
    const apiKey = 'd22f811e772c81f11eb5d29ee064a7b6'; // Replace 'YOUR_API_KEY' with your actual API key
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${longi}&appid=${apiKey}&units=metric`;
console.log("URI"+ apiUrl);
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
        const weatherInfo = document.getElementById('weatherInfo');
        weatherInfo.innerHTML = `<h2>Weather in ${data.name}</h2>
                                <p>Temperature: ${data.main.temp} &#8451;</p>
                                <p>Weather: ${data.weather[0].description}</p>`;
        })
        .catch(error => {
            console.error('Error fetching weather:', error);
            const weatherInfo = document.getElementById('weatherInfo');
            weatherInfo.innerHTML = `<p>Failed to fetch weather. Please try again.</p>`;
          });   
}

document.getElementById('weatherForm').addEventListener('submit',showweatherDetails );