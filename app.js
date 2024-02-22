document.addEventListener('DOMContentLoaded', function() {
    const fetchButton = document.getElementById('fetch-button');
    fetchButton.addEventListener('click', fetchData);
});

function fetchData() {
    // Endpoint of the Netlify serverless function
    const functionEndpoint = '/.netlify/functions/fetchAirtable';

    fetch(functionEndpoint)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            console.log(data); // For debugging
            // Assuming your serverless function returns the Airtable records directly
            displayData(data.records);
        })
        .catch(error => {
            console.error('Error:', error);
            alert('Failed to fetch data. Please check the console for more information.');
        });
}

function displayData(records) {
    const container = document.getElementById('data-container');
    container.innerHTML = ''; // Clear previous results

    // Check if records are available
    if (!records || records.length === 0) {
        container.innerHTML = '<p>No records found.</p>';
        return;
    }

    records.forEach(record => {
        const div = document.createElement('div');
        // Customize this line to match the structure of your Airtable data
        div.textContent = `Record ID: ${record.id}, Data: ${JSON.stringify(record.fields)}`;
        container.appendChild(div);
    });
}
