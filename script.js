document.getElementById('fetch-data').addEventListener('click', function() {
    const apiKey = 'pataeH8kJj5GBV6HR.ee9f5dd8ef23e8ab741c753d28608f40fbd75efe17da12fdaa792d459d5e3f19';
    const endpoint = 'https://api.airtable.com/v0/appmncgSEVQ1n0qQ0/tbl6jy5YE156eCJoq?api_key=' + apiKey;

    fetch(endpoint)
    .then(response => response.json())
    .then(data => {
        const container = document.getElementById('data-container');
        container.innerHTML = ''; // Clear previous data
        data.records.forEach(record => {
            const div = document.createElement('div');
            div.textContent = JSON.stringify(record.fields);
            container.appendChild(div);
        });
    })
    .catch(error => console.error('Error:', error));
});
