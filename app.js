document.addEventListener('DOMContentLoaded', function() {
    const fetchButton = document.getElementById('fetch-button');
    fetchButton.addEventListener('click', fetchData);
});

function fetchData() {
    // Airtable API details
    const baseId = 'appmncgSEVQ1n0qQ0'; // Replace with your actual Base ID
    const tableIdOrName = 'tbl6jy5YE156eCJoq'; // Replace with your actual Table ID or Name
    const recordId = ''; // Optional: Use if you want to fetch a specific record
    const endpoint = `https://api.airtable.com/v0/${baseId}/${tableIdOrName}${recordId ? `/${recordId}` : ''}`;

    // Fetch the API Key securely
    const apiKey = 'YOUR_AIRTABLE_API_KEY'; // Use environment variables or securely fetch your API key

    fetch(endpoint, {
        headers: {
            'Authorization': `Bearer ${apiKey}`
        }
    })
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
