// Function to fetch data from the API and display a random card
function fetchData() {
    console.log('Fetching data...'); // Log to console for debugging

    // Your actual API Key goes here
    const apiKey = 'pataeH8kJj5GBV6HR.ee9f5dd8ef23e8ab741c753d28608f40fbd75efe17da12fdaa792d459d5e3f19';
    // The endpoint for your Airtable API
    const endpoint = 'https://api.airtable.com/v0/appmncgSEVQ1n0qQ0/tbl6jy5YE156eCJoq';
    // Set up headers with the API Key for authorization
    const headers = new Headers({
        'Authorization': `Bearer ${apiKey}`
    });

    // Fetch data from the Airtable API
    fetch(endpoint, { method: 'GET', headers: headers })
    .then(response => {
        if (!response.ok) { // If the response is not okay, throw an error
            throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json(); // Parse the JSON in the response
    })
    .then(data => {
        if (data.records.length > 0) {
            // Choose a random record from the data
            const randomIndex = Math.floor(Math.random() * data.records.length);
            const record = data.records[randomIndex];
            displayRecord(record.fields); // Call function to display the data
        } else {
            alert('No records found.'); // Alert if no records are found
        }
    })
    .catch(error => {
        console.error('Fetch error:', error); // Log any errors to the console
        alert('Error fetching data: ' + error.message);
    });
}

// Event listener for when the "Load Random Data" button is clicked
document.getElementById('fetch-data').addEventListener('click', fetchData);

// Function to display a record's data in a card format
function displayRecord(recordData) {
    const container = document.getElementById('data-container');
    container.innerHTML = ''; // Clear any existing content

    // Create the card HTML with the record data
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
        <div class="card-image" style="background-image: url('${recordData.image}');"></div>
        <div class="card-content">
            <h5 class="card-title">${recordData.name}</h5>
            <button onclick="makeCall('${recordData.phone}')" class="card-button">Phone</button>
            <button onclick="showAddress('${recordData.address}')" class="card-button">Address</button>
            <a href="${recordData.menu}" target="_blank" class="card-button">Menu</a>
        </div>
    `;

    container.appendChild(card); // Add the card to the container
}

// Function to handle making a phone call
function makeCall(phoneNumber) {
    // Implement the functionality to make a call
    console.log(`Making a call to ${phoneNumber}`);
    // For example, on a mobile device, you might use:
    // window.location.href = `tel:${phoneNumber}`;
}

// Function to handle showing an address
function showAddress(address) {
    // Implement the functionality to show an address
    console.log(`Showing address: ${address}`);
    // For example, you might use:
    // window.open(`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`);
}

// Test function to ensure the script loads correctly on mobile
function testMobile() {
    alert('Script is loaded and functional on mobile.');
}
