const Airtable = require('airtable');

exports.handler = async (event, context) => {
  const AIRTABLE_API_KEY = process.env.AIRTABLE_API_KEY;
  // Initialize Airtable with your API key and specific base ID
  const base = new Airtable({ apiKey: AIRTABLE_API_KEY }).base('appAL4lTiZU0ooMNC');
  
  try {
    // Fetch records from your table; adjust to target specific views if necessary
    const records = await base('tblinBjPvkX6u82CY').select({
      // Optionally, specify the view ID if you want to fetch records from a specific view
      view: 'viwme5d5SvnlFeWPH'
    }).all();

    // Map Airtable records to the structure expected by your frontend
    const restaurants = records.map(record => {
        return {
            name: record.get('name'), // Assuming field names are case-sensitive
            rating: record.get('rating'),
            address: record.get('address'),
            distance: record.get('distance'),
            duration: record.get('duration'),
            website: record.get('website'),
            'phone number': record.get('phone number'), // Adjust based on the exact field names in Airtable
            maps: record.get('maps'),
            'photo reference': record.get('photo reference'),
            'place id': record.get('place id') // Added based on your table fields
        };
    });

    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*", // Allows requests from any origin
        "Access-Control-Allow-Headers": "Content-Type",
        "Access-Control-Allow-Methods": "GET"
      },
      body: JSON.stringify(restaurants)
    };
  } catch (error) {
    console.error('Error accessing Airtable', error);
    return { statusCode: 500, body: error.toString() };
  }
};
