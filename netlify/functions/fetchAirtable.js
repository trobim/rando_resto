// /netlify/functions/fetchAirtable.js
const process = require('process');
const fetch = require('node-fetch');

const AIRTABLE_API_KEY = process.env.AIRTABLE_API_KEY;
const BASE_ID = 'appmncgSEVQ1n0qQ0';
const TABLE_NAME = 'tbl6jy5YE156eCJoq';

exports.handler = async (event) => {
  const response = await fetch(`https://api.airtable.com/v0/${BASE_ID}/${TABLE_NAME}`, {
    headers: {
      Authorization: `Bearer ${AIRTABLE_API_KEY}`
    }
  });
  const data = await response.json();

  return {
    statusCode: 200,
    body: JSON.stringify(data)
  };
};
