const axios = require('axios'); // We'll use axios to make HTTP requests

exports.handler = async function(event) {
  // Replace 'YOUR_BASE_ID' and 'YOUR_TABLE_NAME' with your actual Airtable Base ID and Table Name
  const URL = `https://api.airtable.com/v0/appmncgSEVQ1n0qQ0/tbl6jy5YE156eCJoq`;

  try {
    const { data } = await axios.get(URL, {
      headers: {
        // Replace 'YOUR_PERSONAL_ACCESS_TOKEN' with your actual Airtable API key
        Authorization: 'Bearer pataeH8kJj5GBV6HR.ee9f5dd8ef23e8ab741c753d28608f40fbd75efe17da12fdaa792d459d5e3f19'
      }
    });
    return {
      statusCode: 200,
      body: JSON.stringify(data.records)
    };
  } catch (error) {
    return { statusCode: 500, body: JSON.stringify({ msg: error.message }) };
  }
};
