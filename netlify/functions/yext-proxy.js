// Netlify Serverless Function for Yext API Proxy
const fetch = require('node-fetch');

exports.handler = async (event, context) => {
    // Enable CORS with Safari-compatible headers
    const headers = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type, Accept, Origin',
        'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
        'Access-Control-Max-Age': '86400',
        'Access-Control-Allow-Credentials': 'false',
        'Content-Type': 'application/json',
        'Cache-Control': 'no-cache, no-store, must-revalidate',
        'Vary': 'Origin'
    };

    // Handle preflight request
    if (event.httpMethod === 'OPTIONS') {
        return {
            statusCode: 204,
            headers,
            body: ''
        };
    }

    try {
        // Get parameters from query string
        const { entityId, maxDate } = event.queryStringParameters || {};

        if (!entityId || !maxDate) {
            return {
                statusCode: 400,
                headers,
                body: JSON.stringify({ error: 'Missing required parameters: entityId and maxDate' })
            };
        }

        // Yext API configuration
        const YEXT_API_KEY = process.env.YEXT_API_KEY || "a4b10ee786fe9d7a47d8432c947220d8";
        const YEXT_BASE_URL = "https://api.yextapis.com/v2";
        const YEXT_API_VERSION = "20240101";

        // Build Yext API URL
        const params = new URLSearchParams({
            api_key: YEXT_API_KEY,
            v: YEXT_API_VERSION,
            entityIds: entityId,
            publisherIds: 'GOOGLEMYBUSINESS',
            status: 'LIVE',
            maxPublisherDate: maxDate,
            limit: '1'
        });

        const url = `${YEXT_BASE_URL}/accounts/me/reviews?${params}`;

        // Make request to Yext API
        const response = await fetch(url);
        const data = await response.json();

        return {
            statusCode: 200,
            headers,
            body: JSON.stringify(data)
        };

    } catch (error) {
        console.error('Error:', error);
        return {
            statusCode: 500,
            headers,
            body: JSON.stringify({ error: error.message })
        };
    }
};
