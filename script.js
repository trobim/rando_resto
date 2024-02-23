document.getElementById('fetch-data').addEventListener('click', function() {
    const apiKey = 'pataeH8kJj5GBV6HR.ee9f5dd8ef23e8ab741c753d28608f40fbd75efe17da12fdaa792d459d5e3f19';
    const endpoint = 'https://api.airtable.com/v0/appmncgSEVQ1n0qQ0/tbl6jy5YE156eCJoq';
    const headers = new Headers({
        'Authorization': `Bearer ${apiKey}`
    });

    fetch(endpoint, { method: 'GET', headers: headers })
    .then(response => response.json())
    .then(data => {
        if (data.records.length > 0) {
            // Pick a random record
            const randomIndex = Math.floor(Math.random() * data.records.length);
            const record = data.records[randomIndex];
            displayRecord(record.fields);
        } else {
            alert('No records found.');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Failed to load data.');
    });
});

function displayRecord(recordData) {
    const container = document.getElementById('data-container');
    container.innerHTML = ''; // Clear previous content
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
    container.appendChild(card);
}

// Placeholder functions for button actions
function makeCall(phoneNumber) {
    alert(`Call: ${phoneNumber}`);
}

function showAddress(address) {
    alert(`Address: ${address}`);
}
