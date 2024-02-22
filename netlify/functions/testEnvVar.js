// /netlify/functions/testEnvVar.js
exports.handler = async (event) => {
    // Replace 'YOUR_ENV_VAR' with the name of your environment variable
    const isVariableSet = !!process.env.AIRTABLE_API_KEY;
  
    return {
      statusCode: 200,
      body: JSON.stringify({ isVariableSet }),
    };
  };
  