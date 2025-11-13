// Competitor Data Management
// Google Maps API Key
const GOOGLE_MAPS_API_KEY = "AIzaSyDue7EPZ87rLkIcZFy98RKEJqJCG-DBals";

// Competitor store data mapped to specific Astound locations
// Based on competitor address documents in "competitors copy" folder
const COMPETITOR_MAPPINGS = {
    // TEXAS REGION
    'Odessa-TX': {
        xfinity: null, // No Xfinity in Odessa
        spectrum: null, // No Spectrum in Odessa
        verizon: { address: "4041 E 42nd St, Odessa, TX 79762", rating: 3.9 },
        att: { address: "1801 Linda Ave Suite 110, Odessa, TX 79763", rating: 4.1 }
    },
    'San Marcos-TX': {
        xfinity: null,
        spectrum: { address: "750 Barnes Dr Ste 130, San Marcos, TX 78666", rating: 2.8 },
        verizon: { address: "2319 I 35 N Frontage Rd Ste 911, San Marcos, TX 78666", rating: 3.3 },
        att: { address: "1104 Thorpe Ln Ste A, San Marcos, TX 78666", rating: 4.5 }
    },
    'San Antonio-TX': {
        xfinity: null,
        spectrum: { address: "438 Northwest Loop 410, San Antonio, TX 78216", rating: 3.3 },
        verizon: { address: "255 E Basse Rd #1530, San Antonio, TX 78209", rating: 3.6 },
        att: { address: "1442 Austin Hwy, San Antonio, TX 78209", rating: 3.7 }
    },
    'Belton-TX': {
        xfinity: null,
        spectrum: { address: "201 E Central Texas Expy #645, Harker Heights, TX 76548", rating: 2.8 }, // Harker Heights near Belton/Temple
        verizon: { address: "3614 SW H K Dodgen Loop A, Temple, TX 76504", rating: 3.6 }, // Temple near Belton
        att: { address: "2431 N Main St, Belton, TX 76513", rating: 4.3 }
    },
    'Corpus Christi-TX': {
        xfinity: null,
        spectrum: { address: "4001 Saratoga Blvd #106, Corpus Christi, TX 78413", rating: 3.0 },
        verizon: { address: "4801 S Padre Island Dr, Corpus Christi, TX 78411", rating: 3.7 },
        att: { address: "6093 Saratoga Blvd E, Corpus Christi, TX 78414", rating: 4.7 }
    },
    'Austin-TX': {
        xfinity: null,
        spectrum: { address: "11920 Alterra Pkwy Suite 134, Austin, TX 78758", rating: 3.4 },
        verizon: { address: "1011 E 5th St. Ste 140, Austin, TX 78702", rating: 4.4 },
        att: { address: "13000 N Interstate Hwy 35 Ste. 100, Austin, TX 78753", rating: 4.4 }
    },
    'Brownwood-TX': {
        xfinity: null,
        spectrum: null,
        verizon: { address: "300 W Commerce St, Brownwood, TX 76801", rating: 3.5 },
        att: { address: "210 W Commerce St, Brownwood, TX 76801", rating: 4.0 }
    },
    'Lewisville (Dallas)-TX': {
        xfinity: null,
        spectrum: null,
        verizon: { address: "2403 S Stemmons Fwy Ste 107, Lewisville, TX 75067", rating: 4.1 },
        att: { address: "4770 State Hwy 121, Lewisville, TX 75056", rating: 3.6 }
    },
    'Missouri City (Houston)-TX': {
        xfinity: { address: "13540 University Blvd, Sugar Land, TX 77479", rating: 3.1 }, // Sugar Land near Houston
        spectrum: null,
        verizon: { address: "5750 Hwy 6, Missouri City, TX 77459", rating: 4.3 },
        att: { address: "9029 Hwy 6 A-110, Missouri City, TX 77459", rating: 4.5 }
    },
    'Midland-TX': {
        xfinity: null,
        spectrum: null,
        verizon: { address: "5323 W Loop 250 N, Midland, TX 79707", rating: 3.9 },
        att: { address: "210 W Longview Ave Suite E, Midland, TX 79701", rating: 4.3 }
    },
    'Waco-TX': {
        xfinity: null,
        spectrum: null,
        verizon: { address: "2812 W Loop 340 Suite# H-12, Waco, TX 76711", rating: 3.7 },
        att: { address: "1428 Wooded Acres Dr #120, Waco, TX 76710", rating: 4.3 }
    },

    // ILLIANA REGION
    'Chicago-IL': {
        xfinity: { address: "1255 W North Ave, Chicago, IL 60642", rating: 3.5 },
        spectrum: null,
        verizon: { address: "36 S State St, Chicago, IL 60603", rating: 3.4 },
        att: { address: "4422 N Broadway, Chicago, IL 60640", rating: 4.3 }
    },
    'Evansville-IN': {
        xfinity: null,
        spectrum: { address: "1122 Hirschland Rd Suite 4, Evansville, IN 47715", rating: 2.9 },
        verizon: { address: "2001 N Green River Rd, Evansville, IN 47715", rating: 3.5 },
        att: { address: "330 N Burkhardt Rd, Evansville, IN 47715", rating: 4.1 }
    },

    // WEST COAST REGION - California
    'Auburn-CA': {
        xfinity: null,
        spectrum: null,
        verizon: { address: "340 Elm Ave Suite E, Auburn, CA 95603", rating: 4.6 },
        att: { address: "11835 Willow Creek Dr, Auburn, CA 95603", rating: 4.4 }
    },
    'Concord-CA': {
        xfinity: { address: "2001 Diamond Blvd Suite 150, Concord, CA 94520", rating: 3.4 },
        spectrum: null,
        verizon: { address: "4305 Clayton Rd Ste D, Concord, CA 94521", rating: 4.7 },
        att: { address: "2015 Diamond Blvd Suite 125, Concord, CA 94520", rating: 4.8 }
    },
    'Rocklin-CA': {
        xfinity: { address: "1162 Roseville Pkwy Suite 100, Roseville, CA 95678", rating: 3.6 }, // Roseville near Rocklin
        spectrum: null,
        verizon: { address: "2330 Sunset Blvd, Rocklin, CA 95765", rating: 4.3 },
        att: null
    },
    'San Mateo-CA': {
        xfinity: { address: "35 W Hillsdale Blvd Suite 50, San Mateo, CA 94403", rating: 2.9 },
        spectrum: null,
        verizon: { address: "2290 Bridgepointe Pkwy, San Mateo, CA 94404", rating: 2.9 },
        att: { address: "60 31st Ave Ste 308, San Mateo, CA 94403", rating: 4.2 }
    },
    'West Sacramento-CA': {
        xfinity: { address: "3890 Truxel Rd #300, Sacramento, CA 95834", rating: 3.6 }, // Sacramento near West Sacramento
        spectrum: null,
        verizon: { address: "3635 N Freeway Blvd #100, Sacramento, CA 95834", rating: 3.9 },
        att: { address: "768 Ikea Ct Ste 100, West Sacramento, CA 95605", rating: 3.9 }
    },
    'Woodland-CA': {
        xfinity: { address: "500 1st St Space 25, Davis, CA 95616", rating: 2.5 }, // Davis near Woodland
        spectrum: null,
        verizon: { address: "2021 Bronze Star Dr Ste 3c, Woodland, CA 95776", rating: 4.2 },
        att: { address: "1810 E Main St, Woodland, CA 95776", rating: 4.1 }
    },
    'San Luis Obispo-CA': {
        xfinity: { address: "685 Betteravia Rd, Santa Maria, CA 93454", rating: 3.5 }, // Santa Maria area
        spectrum: { address: "481 Madonna Rd Suite A, San Luis Obispo, CA 93405", rating: 2.7 },
        verizon: { address: "994 Mill St, San Luis Obispo, CA 93401", rating: 3.7 },
        att: { address: "11998 Los Osos Valley Rd, San Luis Obispo, CA 93405", rating: 4.9 }
    },

    // WEST COAST REGION - Oregon
    'Depoe Bay-OR': {
        xfinity: null,
        spectrum: { address: "2310 N Coast Hwy, Newport, OR 97365", rating: 3.0 }, // Newport near Depoe Bay
        verizon: { address: "324 N Coast Hwy #1, Newport, OR 97365", rating: 4.5 },
        att: { address: "2015 N Coast Hwy, Newport, OR 97365", rating: 4.3 }
    },
    'Woodburn-OR': {
        xfinity: { address: "1004 N Springbrook Rd, Newberg, OR 97132", rating: 2.8 }, // Newberg area
        spectrum: null,
        verizon: { address: "105 N Arney Rd Ste 173, Woodburn, OR 97071", rating: 4.3 },
        att: { address: "3040 Sprague Ln #160, Woodburn, OR 97071", rating: 4.3 }
    },
    'Stayton-OR': {
        xfinity: { address: "831 Lancaster Dr NE ste 173, Salem, OR 97301", rating: 3.0 }, // Salem near Stayton
        spectrum: null,
        verizon: { address: "101 Fern Ridge Rd SE, Stayton, OR 97383", rating: 4.2 },
        att: { address: "1132 Lancaster Dr NE, Salem, OR 97301", rating: 4.4 }
    },
    'Sandy-OR': {
        xfinity: { address: "291 NE 223rd Ave, Gresham, OR 97030", rating: 3.7 }, // Gresham area
        spectrum: null,
        verizon: { address: "17390 SE Bluff Rd Suite 2, Sandy, OR 97055", rating: 4.9 },
        att: null
    },
    'Waldport-OR': {
        xfinity: null,
        spectrum: { address: "2310 N Coast Hwy, Newport, OR 97365", rating: 3.0 }, // Newport near Waldport
        verizon: { address: "324 N Coast Hwy #1, Newport, OR 97365", rating: 4.5 },
        att: { address: "2015 N Coast Hwy, Newport, OR 97365", rating: 4.3 }
    },
    'Canby-OR': {
        xfinity: null,
        spectrum: null,
        verizon: null,
        att: { address: "1075 SW 1st Ave, Canby, OR 97013", rating: 4.4 }
    },
    'Sheridan-OR': {
        xfinity: null,
        spectrum: null,
        verizon: { address: "7174 SW Hazel Fern Rd, Tigard, OR 97224", rating: 3.4 }, // Tigard area
        att: null
    },

    // WEST COAST REGION - Washington
    'Seattle-WA': {
        xfinity: { address: "2202 Westlake Ave N Suite 116, Seattle, WA 98121", rating: 3.1 },
        spectrum: null,
        verizon: { address: "1633 6th Ave, Seattle, WA 98101", rating: 3.6 },
        att: { address: "1504 6th Ave, Seattle, WA 98101", rating: 3.7 }
    },
    'La Conner-WA': {
        xfinity: { address: "151 Cascade Mall Dr Suite K01A, Burlington, WA 98233", rating: 3.2 }, // Burlington area
        spectrum: null,
        verizon: { address: "1831 S Burlington Blvd #102, Burlington, WA 98233", rating: 3.7 },
        att: { address: "1835 Riverside Dr #103, Mount Vernon, WA 98273", rating: 4.2 }
    },
    'Port Angeles-WA': {
        xfinity: null,
        spectrum: null,
        verizon: { address: "2737 E Hwy 101, Port Angeles, WA 98362", rating: 4.4 },
        att: { address: "112 S Del Guzzi Dr #1, Port Angeles, WA 98362", rating: 4.9 }
    },
    'Port Orchard-WA': {
        xfinity: { address: "11467 Pacific Crest Pl Suite C107, Silverdale, WA 98383", rating: 2.6 }, // Silverdale near Port Orchard
        spectrum: null,
        verizon: null,
        att: { address: "3475 Bethel Rd SE #101, Port Orchard, WA 98366", rating: 4.0 }
    },
    'Longview-WA': {
        xfinity: { address: "740 Ocean Beach Hwy Suite A, Longview, WA 98632", rating: 3.1 },
        spectrum: null,
        verizon: { address: "1015 Ocean Beach Hwy Ste 137, Longview, WA 98632", rating: 4.3 },
        att: { address: "1015 Ocean Beach Hwy Suite 127, Longview, WA 98632", rating: 4.2 }
    },
    'Sequim-WA': {
        xfinity: null,
        spectrum: null,
        verizon: { address: "1241 W Washington St, Sequim, WA 98382", rating: 4.3 },
        att: { address: "1099 W Washington St, Sequim, WA 98382", rating: 4.6 }
    },
    'Stanwood-WA': {
        xfinity: { address: "151 Cascade Mall Dr Suite K01A, Burlington, WA 98233", rating: 3.2 }, // Burlington area
        spectrum: null,
        verizon: null,
        att: { address: "2701 171st Pl NE Suite #205, Marysville, WA 98271", rating: 4.1 }
    },

    // MASSACHUSETTS REGION
    'Hyde Park-MA': {
        xfinity: { address: "950 Hyde Park Ave, Hyde Park, MA 02136", rating: 3.8 },
        spectrum: null,
        verizon: { address: "95 Washington St #402, Canton, MA 02021", rating: 4.7 }, // Canton near Hyde Park
        att: { address: "718 American Legion Hwy, Roslindale, MA 02131", rating: 4.5 } // Roslindale near Hyde Park
    },
    'Framingham-MA': {
        xfinity: { address: "400 Cochituate Road, Framingham, MA 01701", rating: 3.3 },
        spectrum: { address: "867 Grafton St, Worcester, MA 01604", rating: 3.0 }, // Worcester area
        verizon: { address: "86 Worcester Rd, Framingham, MA 01701", rating: 3.5 },
        att: { address: "225 Worcester Rd, Framingham, MA 01701", rating: 4.8 }
    },
    'Arlington-MA': {
        xfinity: { address: "6186 Alewife Brook Pky, Cambridge, MA 02138", rating: 3.2 }, // Cambridge near Arlington
        spectrum: null,
        verizon: { address: "457 Massachusetts Ave, Arlington, MA 02474", rating: 4.7 },
        att: { address: "353 Fresh Pond Pkwy, Cambridge, MA 02138", rating: 4.1 }
    },

    // DC / MARYLAND REGION
    'Millersville-MD': {
        xfinity: { address: "2077 Somerville Rd Suite 160, Annapolis, MD 21401", rating: 3.3 }, // Annapolis near Millersville
        spectrum: null,
        verizon: { address: "6621 Ritchie Hwy, Glen Burnie, MD 21061", rating: 3.7 }, // Glen Burnie area
        att: { address: "1407 S Main Chapel Way Suite 107, Gambrills, MD 21054", rating: 4.6 } // Gambrills near Millersville
    },
    'Washington DC-DC': {
        xfinity: { address: "715 7th St NW, Washington, DC 20001", rating: 3.1 },
        spectrum: null,
        verizon: { address: "1529 14th St NW, Washington, DC 20005", rating: 3.6 },
        att: { address: "5301 Wisconsin Ave NW, Washington, DC 20015", rating: 4.0 }
    },

    // PENNSYLVANIA / NEW JERSEY REGION
    'Princeton (Philly)-NJ': {
        xfinity: { address: "3371 US-1 Mercer Mall Dr, Lawrence Township, NJ 08648", rating: 3.9 }, // Lawrence Township near Princeton
        spectrum: null,
        verizon: { address: "304 Mercer Mall S, 3371 U.S. Rte 1 C, Lawrence Township, NJ 08648", rating: 3.5 },
        att: { address: "1340 US-206 Suite 3, Skillman, NJ 08558", rating: 5.0 } // Skillman near Princeton
    },
    'Bethlehem-PA': {
        xfinity: { address: "235 N West End Blvd STE D-4, Quakertown, PA 18951", rating: 3.0 }, // Quakertown area
        spectrum: null,
        verizon: { address: "3926 Linden St #15, Bethlehem, PA 18020", rating: 4.8 },
        att: { address: "3859 Nazareth Pike Ste 102, Bethlehem, PA 18020", rating: 4.4 }
    },
    'Pittston (Luzerne)-PA': {
        xfinity: { address: "1150 PA-315 Suite A, Wilkes-Barre, PA 18702", rating: 3.5 }, // Wilkes-Barre near Pittston
        spectrum: null,
        verizon: null,
        att: { address: "320 PA-315 Suite 120, Pittston, PA 18640", rating: 4.4 }
    },

    // NEW YORK REGION
    'Long Island City (Queens)-NY': {
        xfinity: { address: "30 Mall Drive West B28C-5, Jersey City, NJ 07310", rating: 3.3 }, // Jersey City area
        spectrum: { address: "23-20 Jackson Ave, Long Island City, NY 11101", rating: 2.9 },
        verizon: { address: "47-34 Vernon Blvd, Long Island City, NY 11101", rating: 4.9 },
        att: { address: "46-32 Vernon Blvd, Long Island City, NY 11101", rating: 4.6 }
    },
    'New York (Manhattan)-NY': {
        xfinity: { address: "495 Prospect Ave Suite 509, West Orange, NJ 07052", rating: 4.1 }, // West Orange area
        spectrum: { address: "450 W 33rd St Suite 135, New York, NY 10001", rating: 3.5 },
        verizon: { address: "125 W 42nd St, New York, NY 10036", rating: 3.3 },
        att: { address: "3 Times Sq, New York, NY 10036", rating: 3.9 }
    }
};

// Helper function to get rating CSS class
function getRatingClass(rating) {
    if (!rating || rating === '-') return '';
    const val = parseFloat(rating);
    if (val >= 4.0) return 'rating-excellent';
    if (val >= 3.0) return 'rating-good';
    if (val >= 2.5) return 'rating-fair';
    return 'rating-poor';
}

// Get competitor data for a specific location
function getCompetitorDataForLocation(astoundCity, astoundState) {
    // Create location key
    const locationKey = `${astoundCity}-${astoundState}`;

    // Return the mapped data or nulls if not found
    return COMPETITOR_MAPPINGS[locationKey] || {
        xfinity: null,
        spectrum: null,
        verizon: null,
        att: null
    };
}

// Populate competitor columns in the table
function populateCompetitorData() {
    console.log('=== Populating Competitor Data ===');

    // Get all regions from dynamic.js
    if (typeof REGIONS === 'undefined') {
        console.error('REGIONS not defined - make sure dynamic.js is loaded first');
        return;
    }

    // For each region
    for (const [regionName, regionData] of Object.entries(REGIONS)) {
        console.log(`\nProcessing region: ${regionName}`);

        const rightTbody = document.getElementById(`${regionName}-right-tbody`);
        if (!rightTbody) {
            console.error(`Could not find right tbody for region: ${regionName}`);
            continue;
        }

        // For each location in the region
        for (let locIndex = 0; locIndex < regionData.locations.length; locIndex++) {
            const location = regionData.locations[locIndex];
            console.log(`  Location ${locIndex}: ${location.city}, ${location.state}`);

            // Get competitor data for this location
            const competitors = getCompetitorDataForLocation(location.city, location.state);

            console.log(`    Xfinity: ${competitors.xfinity ? competitors.xfinity.address + ' - ' + competitors.xfinity.rating : 'N/A'}`);
            console.log(`    Spectrum: ${competitors.spectrum ? competitors.spectrum.address + ' - ' + competitors.spectrum.rating : 'N/A'}`);
            console.log(`    Verizon: ${competitors.verizon ? competitors.verizon.address + ' - ' + competitors.verizon.rating : 'N/A'}`);
            console.log(`    AT&T: ${competitors.att ? competitors.att.address + ' - ' + competitors.att.rating : 'N/A'}`);

            // Get the row for this location
            const row = rightTbody.children[locIndex];
            if (!row) {
                console.error(`    Could not find row ${locIndex} in ${regionName}`);
                continue;
            }

            // Update cells with competitor ratings
            const xfinityCell = row.children[0];
            const spectrumCell = row.children[1];
            const verizonCell = row.children[2];
            const attCell = row.children[3];

            // Xfinity
            if (competitors.xfinity) {
                xfinityCell.textContent = competitors.xfinity.rating;
                const ratingClass = getRatingClass(competitors.xfinity.rating);
                xfinityCell.className = 'rating ' + ratingClass;
                xfinityCell.title = competitors.xfinity.address;
                console.log(`    Updated Xfinity cell: ${competitors.xfinity.rating} (class: ${ratingClass})`);
            } else {
                xfinityCell.textContent = '-';
                xfinityCell.className = 'rating';
                xfinityCell.title = 'No competitor data';
            }

            // Spectrum
            if (competitors.spectrum) {
                spectrumCell.textContent = competitors.spectrum.rating;
                spectrumCell.className = 'rating ' + getRatingClass(competitors.spectrum.rating);
                spectrumCell.title = competitors.spectrum.address;
            } else {
                spectrumCell.textContent = '-';
                spectrumCell.className = 'rating';
                spectrumCell.title = 'No competitor data';
            }

            // Verizon
            if (competitors.verizon) {
                verizonCell.textContent = competitors.verizon.rating;
                verizonCell.className = 'rating ' + getRatingClass(competitors.verizon.rating);
                verizonCell.title = competitors.verizon.address;
            } else {
                verizonCell.textContent = '-';
                verizonCell.className = 'rating';
                verizonCell.title = 'No competitor data';
            }

            // AT&T
            if (competitors.att) {
                attCell.textContent = competitors.att.rating;
                attCell.className = 'rating ' + getRatingClass(competitors.att.rating);
                attCell.title = competitors.att.address;
            } else {
                attCell.textContent = '-';
                attCell.className = 'rating';
                attCell.title = 'No competitor data';
            }
        }

        // Update average row
        const avgRow = rightTbody.children[regionData.locations.length];
        if (avgRow) {
            // Calculate regional averages
            const xfinityRatings = [];
            const spectrumRatings = [];
            const verizonRatings = [];
            const attRatings = [];

            for (let i = 0; i < regionData.locations.length; i++) {
                const location = regionData.locations[i];
                const competitors = getCompetitorDataForLocation(location.city, location.state);
                if (competitors.xfinity) xfinityRatings.push(competitors.xfinity.rating);
                if (competitors.spectrum) spectrumRatings.push(competitors.spectrum.rating);
                if (competitors.verizon) verizonRatings.push(competitors.verizon.rating);
                if (competitors.att) attRatings.push(competitors.att.rating);
            }

            const calcAvg = (ratings) => {
                if (ratings.length === 0) return '-';
                const sum = ratings.reduce((acc, r) => acc + r, 0);
                return (sum / ratings.length).toFixed(1);
            };

            const xfinityAvg = calcAvg(xfinityRatings);
            const spectrumAvg = calcAvg(spectrumRatings);
            const verizonAvg = calcAvg(verizonRatings);
            const attAvg = calcAvg(attRatings);

            avgRow.children[0].textContent = xfinityAvg;
            avgRow.children[0].className = 'rating';

            avgRow.children[1].textContent = spectrumAvg;
            avgRow.children[1].className = 'rating';

            avgRow.children[2].textContent = verizonAvg;
            avgRow.children[2].className = 'rating';

            avgRow.children[3].textContent = attAvg;
            avgRow.children[3].className = 'rating';
        }
    }

    console.log('=== Competitor Data Population Complete ===');
}

// Make function globally available
window.populateCompetitorData = populateCompetitorData;
