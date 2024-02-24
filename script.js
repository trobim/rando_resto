document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('randomizeButton').addEventListener('click', loadRandomRestaurant);
});

function loadRandomRestaurant() {
    fetch('restaurants.json')
        .then(response => response.json())
        .then(restaurants => {
            const randomIndex = Math.floor(Math.random() * restaurants.length);
            const restaurant = restaurants[randomIndex];
            displayRestaurant(restaurant);
        });
}

function displayRestaurant(restaurant) {
    const container = document.getElementById('restaurantContainer');
    container.innerHTML = `
        <img src="img/${restaurant['photo reference']}.jpg" alt="${restaurant.name}">
        <div style="padding: 16px;">
            <h2>${restaurant.name}</h2>
            <p>Rating: ${restaurant.rating}</p>
            <a href="${restaurant.maps}" style="color: blue;">${restaurant.address}</a>
            <p>${restaurant.distance} - ${restaurant.duration}</p>
            <div style="display: flex; justify-content: space-around; width: 100%;">
                <button onclick="window.open('${restaurant.website}', '_blank')">MENU</button>
                <button onclick="window.location.href='tel:${restaurant['phone number']}'">PHONE</button>
            </div>
        </div>
    `;
}
