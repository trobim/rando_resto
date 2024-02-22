document.getElementById('randomizeRestaurant').addEventListener('click', function() {
    randomizeRestaurant();
});

function randomizeRestaurant() {
    // Assuming you have a serverless endpoint that returns an array of restaurant objects
    fetch('/.netlify/functions/getRestaurantsData')
    .then(response => response.json())
    .then(data => {
        if (data && data.records) {
            const today = new Date().toISOString().split('T')[0];
            const lastRandomized = localStorage.getItem('lastRandomized');
            
            if (today === lastRandomized) {
                document.getElementById('result').innerHTML = 'Restaurant already randomized today.';
                return;
            }
            
            const randomIndex = Math.floor(Math.random() * data.records.length);
            const restaurant = data.records[randomIndex];
            document.getElementById('result').innerHTML = `Today's restaurant is: ${restaurant.fields.Name}`;
            
            localStorage.setItem('lastRandomized', today);
            localStorage.setItem('todayRestaurant', restaurant.fields.Name);
        }
    })
    .catch(error => console.error('Error:', error));
}
