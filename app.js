document.addEventListener('DOMContentLoaded', function() {
    fetchData();
});

function fetchData() {
    // Fetch the API Key from a global variable or directly if not sensitive
    const apiKey = 'pataeH8kJj5GBV6HR.ee9f5dd8ef23e8ab741c753d28608f40fbd75efe17da12fdaa792d459d5e3f19'; // Replace this with your actual API key if not using environment variables for local development

    // Airtable endpoint
    const endpoint = 'https://api.airtable.com/v0/appmncgSEVQ1n0qQ0/tbl6jy5YE156eCJoq';
    const url = `${endpoint}?api_key=${apiKey}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data); // For debugging
            displayData(data.records);
        })
        .catch(error => console.error('Error:', error));
}

function displayData(records) {
    const container = document.getElementById('data-container');
    container.innerHTML = ''; // Clear previous results
    records.forEach(record => {
        const div = document.createElement('div');
        div.textContent = `Record ID: ${record.id}, Data: ${JSON.stringify(record.fields)}`;
        container.appendChild(div);
    });
}
