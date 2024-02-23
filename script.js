document.getElementById('fetch-data').addEventListener('click', fetchData);

function fetchData() {
    console.log('Button clicked, starting data fetch.'); // Console log for debugging

    const apiKey = 'Your_API_Key'; // Replace with your actual API Key
    const endpoint = 'https://api.airtable.com/v0/appmncgSEVQ1n0qQ0/tbl6jy5YE156eCJoq';
    const headers = new Headers({
        'Authorization': `Bearer ${apiKey}`
    });

    fetch(endpoint, { method: 'GET', headers: headers })
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
    })
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
        console.error('Fetch error:', error);
        alert('Failed to load data. Check console for details.');
    });
}

function displayRecord(recordData) {
    // ... (existing code to display the record)
}

// ... (existing functions for makeCall and showAddress)

// Call this function to test on mobile to ensure script.js is loaded and working
function testMobile() {
    alert('Script file is loaded and working on mobile.');
}
