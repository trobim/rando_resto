document.addEventListener('DOMContentLoaded', function() {
    loadRandomRestaurant();
    document.getElementById('randomizeButton').addEventListener('click', loadRandomRestaurant);
    updateViewportHeight(); // Call this function on initial load
});

window.addEventListener('resize', updateViewportHeight); // And on every window resize

function loadRandomRestaurant() {
    fetch('https://rando-resto.netlify.app/.netlify/functions/fetch-restaurants')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok: ' + response.statusText);
        }
        return response.json();
    })
    .then(restaurants => {
        const randomIndex = Math.floor(Math.random() * restaurants.length);
        const restaurant = restaurants[randomIndex];
        updateRestaurantInfo(restaurant);
    })
    .catch(error => console.error('Error loading restaurant data:', error));
}

function updateRestaurantInfo(restaurant) {
    const img = document.getElementById('restaurantImage');
    img.src = `/img/${restaurant['photo reference']}.jpg`; // Assuming images are stored in the '/img' directory
    img.alt = restaurant.name;

    document.getElementById('restaurantName').textContent = restaurant.name;
    document.getElementById('restaurantRating').textContent = `✩ ${restaurant.rating}`;

    const addressLink = document.getElementById('restaurantAddress');
    addressLink.href = restaurant.maps;
    addressLink.textContent = `${restaurant.address} ➔`;

    document.getElementById('restaurantDistanceDuration').textContent = `${restaurant.distance} - ${restaurant.duration}`;

    document.getElementById('restaurantMenu').onclick = function() { window.open(restaurant.website, '_blank'); };
    document.getElementById('restaurantPhone').onclick = function() { window.location.href = `tel:${restaurant['phone number']}`; };
}

// Added function to update viewport height
function updateViewportHeight() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--mobile-vh', `${vh}px`);
}
