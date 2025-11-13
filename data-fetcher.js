// Data Fetcher Script
// Run this script once per month to fetch all ratings and save to JSON file
// Usage: node data-fetcher.js

const fs = require('fs');
const https = require('https');

// Yext API Configuration
const YEXT_API_KEY = "a4b10ee786fe9d7a47d8432c947220d8";
const YEXT_BASE_URL = "https://api.yextapis.com/v2";
const YEXT_API_VERSION = "20240101";

// Import regions from dynamic.js structure
const REGIONS = {
    'Texas': {
        manager: 'Mike Carrosquilla',
        locations: [
            { address: '2401 E Interstate 20', city: 'Odessa', state: 'TX', zip: '79766', entityId: '3339612' },
            { address: '401 Carlson Circle', city: 'San Marcos', state: 'TX', zip: '78666', entityId: '3339610' },
            { address: '6480 N New Braunfels Ave', city: 'San Antonio', state: 'TX', zip: '78209', entityId: '3339614' },
            { address: '7595 W U.S. Hwy 190, Suite B', city: 'Belton', state: 'TX', zip: '76513', entityId: '3339616' },
            { address: '6441 Saratoga Boulevard', city: 'Corpus Christi', state: 'TX', zip: '78414', entityId: '3339613' },
            { address: '1100 E Howard Lane, Building 6', city: 'Austin', state: 'TX', zip: '78753', entityId: '3339611' },
            { address: '500 Fisk Ave, Brownwood', city: 'Brownwood', state: 'TX', zip: '76801', entityId: '3339619' },
            { address: '500 Tittle Rd. Ste 400', city: 'Lewisville (Dallas)', state: 'TX', zip: '75056', entityId: '3339615' },
            { address: 'Serviceable Area (Review is tied to a serviceable area.', city: 'Missouri City (Houston)', state: 'TX', zip: 'NA', entityId: 'enTouch 1' },
            { address: 'Serviceable Area (Review is tied to a serviceable area.', city: 'Midland', state: 'TX', zip: 'NA', entityId: '3339617' },
            { address: '7200 Imperial Drive', city: 'Waco', state: 'TX', zip: '76712', entityId: '3339618' }
        ],
        competitors: { xfinity: 3.1, spectrum: 3.1, verizon: 3.8, att: 4.2 }
    },
    'Illiana': {
        manager: 'Joe Bell',
        locations: [
            { address: 'Serviceable Area (Review is tied to a serviceable area.', city: 'Chicago', state: 'IL', zip: '60618', entityId: '2856723' },
            { address: 'Serviceable Area (Review is tied to a serviceable area.', city: 'Evansville', state: 'IN', zip: '47715', entityId: '2856733' }
        ],
        competitors: { xfinity: 3.5, spectrum: 2.9, verizon: 3.4, att: 4.2 }
    },
    'West Coast': {
        manager: 'Jared Sonne',
        locations: [
            { address: '13428 Lincoln Way', city: 'Auburn', state: 'CA', zip: '95603', entityId: 'Wave 17' },
            { address: '785 Oak Grove Rd, #M', city: 'Concord', state: 'CA', zip: '94518', entityId: 'Wave 23' },
            { address: '2205 Sunset Blvd, Suite 501', city: 'Rocklin', state: 'CA', zip: '95165', entityId: 'Wave 26' },
            { address: '2841 S El Camino Real', city: 'San Mateo', state: 'CA', zip: '94403', entityId: 'Wave 24' },
            { address: '1031 Triangle Ct', city: 'West Sacramento', state: 'CA', zip: '95605', entityId: 'Wave 20' },
            { address: '1861 E Gibson Road, Suite C', city: 'Woodland', state: 'CA', zip: '95776', entityId: 'Wave 21' },
            { address: '711 Tank Farm Rd Suite 210 SMB ONLY', city: 'San Luis Obispo', state: 'CA', zip: '93401', entityId: '8053589461979049774' },
            { address: '646 US-101', city: 'Depoe Bay', state: 'OR', zip: '97341', entityId: 'Wave 15' },
            { address: '635 Ray J Glatt Circle B', city: 'Woodburn', state: 'OR', zip: '97071', entityId: 'Wave 13' },
            { address: '281 N 3rd Ave', city: 'Stayton', state: 'OR', zip: '97383', entityId: 'Wave 16' },
            { address: '36653 US-26', city: 'Sandy', state: 'OR', zip: '97055', entityId: 'Wave 11' },
            { address: '385 NE Alsea HWY #6', city: 'Waldport', state: 'OR', zip: '97394', entityId: 'Wave 29' },
            { address: '353 NW 2nd Ave', city: 'Canby', state: 'OR', zip: '97013', entityId: 'Wave 12' },
            { address: '430 S Bridge St', city: 'Sheridan', state: 'OR', zip: '97378', entityId: 'Wave 14' },
            { address: '900 Lenora Street, Suite 140', city: 'Seattle', state: 'WA', zip: '98121', entityId: 'Wave 28' },
            { address: '511 Morris St, Suite 2', city: 'La Conner', state: 'WA', zip: '98257', entityId: 'Wave 1' },
            { address: '112 W 8th St', city: 'Port Angeles', state: 'WA', zip: '98362', entityId: 'Wave 5' },
            { address: '4519 SE Mile Hill Dr', city: 'Port Orchard', state: 'WA', zip: '98366', entityId: 'Wave 8' },
            { address: '1111 11th Ave', city: 'Longview', state: 'WA', zip: '98632', entityId: '' },
            { address: '1400 W Washington St #108', city: 'Sequim', state: 'WA', zip: '98382', entityId: 'Wave 4' },
            { address: '9300 271st St NW Suite B1', city: 'Stanwood', state: 'WA', zip: '98292', entityId: 'Wave 2' }
        ],
        competitors: { xfinity: 3.1, spectrum: 2.9, verizon: 4.1, att: 4.3 }
    },
    'Massachusetts': {
        manager: 'Sanford Ames',
        locations: [
            { address: '1224 Hyde Park Ave', city: 'Hyde Park', state: 'MA', zip: '02136', entityId: '2856722' },
            { address: '518 Union Ave', city: 'Framingham', state: 'MA', zip: '01702', entityId: '2856721' },
            { address: '956 Massachusetts Ave', city: 'Arlington', state: 'MA', zip: '02476', entityId: '2856720' }
        ],
        competitors: { xfinity: 3.4, spectrum: 3.0, verizon: 4.3, att: 4.5 }
    },
    'DC / Maryland': {
        manager: 'Sanford Ames',
        locations: [
            { address: '406 Headquarters Dr #201', city: 'Millersville', state: 'MD', zip: '21108', entityId: '2856734' },
            { address: '5756 Georgia Ave NW', city: 'Washington DC', state: 'DC', zip: '20011', entityId: '2856724' }
        ],
        competitors: { xfinity: 3.2, spectrum: '-', verizon: 3.7, att: 4.3 }
    },
    'Pennsylvania / New Jersey': {
        manager: 'Sanford Ames',
        locations: [
            { address: '650 College Road East', city: 'Princeton (Philly)', state: 'NJ', zip: '08540', entityId: '2856728' },
            { address: '2124 Avenue C', city: 'Bethlehem', state: 'PA', zip: '18017', entityId: '2856725' },
            { address: '1864 N Twp Blvd', city: 'Pittston (Luzerne)', state: 'PA', zip: '18640', entityId: '2856730' }
        ],
        competitors: { xfinity: 3.5, spectrum: '-', verizon: 4.2, att: 4.6 }
    },
    'New York': {
        manager: 'Sanford Ames',
        locations: [
            { address: '33-16 Woodside Ave', city: 'Long Island City (Queens)', state: 'NY', zip: '11101', entityId: '2856726' },
            { address: '2215 43rd Ave', city: 'Long Island City (Queens)', state: 'NY', zip: '11101', entityId: '2856727' },
            { address: '1133 6th Ave SMB ONLY', city: 'New York (Manhattan)', state: 'NY', zip: '10036', entityId: '' }
        ],
        competitors: { xfinity: 3.6, spectrum: 3.2, verizon: 3.8, att: 3.2 }
    }
};

// Generate month labels from 10/1/2024 to current month
function generateMonthLabels() {
    const startDate = new Date(2024, 9, 1); // October 1, 2024
    const currentDate = new Date();
    const months = [];

    let date = new Date(startDate);
    while (date <= currentDate) {
        const month = date.getMonth() + 1;
        const year = date.getFullYear();
        months.push({
            label: `${month}/1/${year % 100}`,
            apiDate: `${year}-${String(month).padStart(2, '0')}-01`
        });
        date.setMonth(date.getMonth() + 1);
    }

    return months;
}

// Fetch rating from Yext API
async function fetchRating(entityId, maxDate) {
    if (!entityId || entityId === '') {
        console.log(`Skipping empty entity ID`);
        return null;
    }

    return new Promise((resolve) => {
        const url = `${YEXT_BASE_URL}/accounts/me/reviews/aggregateratings?entityIds=${entityId}&maxDate=${maxDate}&v=${YEXT_API_VERSION}&api_key=${YEXT_API_KEY}`;

        https.get(url, (res) => {
            let data = '';

            res.on('data', (chunk) => {
                data += chunk;
            });

            res.on('end', () => {
                try {
                    const json = JSON.parse(data);
                    if (json.response && json.response.averageRating !== undefined) {
                        resolve(parseFloat(json.response.averageRating.toFixed(1)));
                    } else {
                        resolve(null);
                    }
                } catch (error) {
                    console.error(`Error parsing response for ${entityId}:`, error.message);
                    resolve(null);
                }
            });
        }).on('error', (error) => {
            console.error(`Error fetching ${entityId}:`, error.message);
            resolve(null);
        });
    });
}

// Delay helper
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// Main function to fetch all data
async function fetchAllData() {
    console.log('========================================');
    console.log('Starting data fetch process...');
    console.log('========================================\n');

    const monthLabels = generateMonthLabels();
    const result = {
        lastUpdated: new Date().toISOString(),
        monthLabels: monthLabels,
        regions: {}
    };

    let totalLocations = 0;
    let totalAPICalls = 0;

    // Count total locations
    for (const regionData of Object.values(REGIONS)) {
        totalLocations += regionData.locations.length;
    }
    totalAPICalls = totalLocations * monthLabels.length;

    console.log(`📊 Total Locations: ${totalLocations}`);
    console.log(`📅 Months to fetch: ${monthLabels.length} (${monthLabels[0].label} to ${monthLabels[monthLabels.length - 1].label})`);
    console.log(`🔄 Total API calls needed: ${totalAPICalls}`);
    console.log(`⏱️  Estimated time: ~${Math.ceil(totalAPICalls * 0.15 / 60)} minutes\n`);

    let completedCalls = 0;

    for (const [regionName, regionData] of Object.entries(REGIONS)) {
        console.log(`\n🌎 Fetching ${regionName}...`);
        result.regions[regionName] = {
            manager: regionData.manager,
            competitors: regionData.competitors,
            locations: []
        };

        for (let locIndex = 0; locIndex < regionData.locations.length; locIndex++) {
            const location = regionData.locations[locIndex];
            const locationData = {
                address: location.address,
                city: location.city,
                state: location.state,
                zip: location.zip,
                entityId: location.entityId,
                ratings: []
            };

            process.stdout.write(`  📍 ${location.city}, ${location.state}: `);

            for (const month of monthLabels) {
                const rating = await fetchRating(location.entityId, month.apiDate);
                locationData.ratings.push(rating);
                completedCalls++;

                // Show progress
                const progress = ((completedCalls / totalAPICalls) * 100).toFixed(1);
                process.stdout.write('.');

                // Delay to avoid rate limiting
                await delay(150);
            }

            result.regions[regionName].locations.push(locationData);
            process.stdout.write(` ✅ (${completedCalls}/${totalAPICalls} - ${((completedCalls / totalAPICalls) * 100).toFixed(1)}%)\n`);
        }
    }

    console.log('\n========================================');
    console.log('✅ Data fetch complete!');
    console.log('========================================\n');

    return result;
}

// Save data to JSON file
function saveDataToFile(data, filename = 'ratings-data.json') {
    const jsonString = JSON.stringify(data, null, 2);
    fs.writeFileSync(filename, jsonString, 'utf8');
    console.log(`💾 Data saved to ${filename}`);
    console.log(`📦 File size: ${(jsonString.length / 1024).toFixed(2)} KB`);
    console.log(`🕒 Last updated: ${new Date(data.lastUpdated).toLocaleString()}`);
}

// Run the script
(async () => {
    try {
        const data = await fetchAllData();
        saveDataToFile(data);
        console.log('\n✨ Success! You can now use this data file with your website.');
        console.log('   The website will load instantly from this cached data.\n');
    } catch (error) {
        console.error('❌ Error during data fetch:', error);
        process.exit(1);
    }
})();
