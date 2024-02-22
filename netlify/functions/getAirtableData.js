const axios = require('axios'); // We'll use axios to make HTTP requests

exports.handler = async function(event) {
  // Replace 'YOUR_BASE_ID' and 'YOUR_TABLE_NAME' with your actual Airtable Base ID and Table Name
  const URL = `https://api.airtable.com/v0/appmncgSEVQ1n0qQ0/tbl6jy5YE156eCJoq`;

  try {
    const { data } = await axios.get(URL, {
      headers: {
        // Replace 'YOUR_PERSONAL_ACCESS_TOKEN' with your actual Airtable API key
        Authorization: 'Bearer ${process.env.AIRTABLE_API_KEY}'
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
