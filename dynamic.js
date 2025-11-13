// Yext API Configuration
const YEXT_API_KEY = "a4b10ee786fe9d7a47d8432c947220d8";
const YEXT_BASE_URL = "https://api.yextapis.com/v2";
const YEXT_API_VERSION = "20240101";

// Store locations organized by region (from CSV)
// Make REGIONS globally accessible for graph pages
window.REGIONS = window.REGIONS || {};
const REGIONS = window.REGIONS;

// Populate REGIONS
Object.assign(REGIONS, {
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
});

// Generate month labels from 10/1/2024 to current month
function generateMonthLabels() {
    const startDate = new Date(2024, 9, 1); // October 1, 2024 (months are 0-indexed)
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

        // Move to next month
        date.setMonth(date.getMonth() + 1);
    }

    return months;
}

// Fetch rating from Yext API for a specific entity and date (via Netlify proxy)
async function fetchRating(entityId, maxDate) {
    if (!entityId || entityId === '') {
        console.log('No entity ID provided');
        return null;
    }

    // Use Netlify serverless function proxy
    const PROXY_URL = 'https://moizgoogle.netlify.app/.netlify/functions/yext-proxy';

    const params = new URLSearchParams({
        entityId: entityId,
        maxDate: maxDate
    });

    const url = `${PROXY_URL}?${params}`;
    console.log(`Fetching via proxy: ${url}`);

    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(`Response for ${entityId} on ${maxDate}:`, data);

        if (data && data.response && data.response.averageRating !== undefined) {
            return data.response.averageRating.toFixed(1);
        }
        return null;
    } catch (error) {
        console.error(`Error fetching rating for entity ${entityId}:`, error);
        return null;
    }
}

// Get CSS class for rating
function getRatingClass(rating) {
    if (!rating || rating === '-') return '';
    const val = parseFloat(rating);
    if (val >= 4.0) return 'rating-excellent';
    if (val >= 3.0) return 'rating-good';
    if (val >= 2.5) return 'rating-fair';
    return 'rating-poor';
}

// Format rating for display
function formatRating(rating) {
    return rating !== null ? rating : '-';
}

// Calculate average rating for a region
function calculateAverage(ratings) {
    const validRatings = ratings.filter(r => r !== null && r !== '-');
    if (validRatings.length === 0) return '-';
    const sum = validRatings.reduce((acc, r) => acc + parseFloat(r), 0);
    return (sum / validRatings.length).toFixed(1);
}

// Load cached data from JSON file
async function loadCachedData() {
    try {
        const response = await fetch('ratings-data.json');
        if (!response.ok) {
            throw new Error('Cached data file not found');
        }
        const data = await response.json();
        console.log('✅ Loaded cached data from:', new Date(data.lastUpdated).toLocaleString());

        // Update the last updated display in the header
        const lastUpdatedElement = document.getElementById('last-updated');
        if (lastUpdatedElement && data.lastUpdated) {
            const date = new Date(data.lastUpdated);
            lastUpdatedElement.textContent = date.toLocaleString('en-US', {
                month: 'long',
                day: 'numeric',
                year: 'numeric',
                hour: 'numeric',
                minute: '2-digit'
            });
        }

        return data;
    } catch (error) {
        console.error('❌ Error loading cached data:', error);
        console.log('⚠️ Falling back to live API fetching...');

        // Update UI to show live fetching
        const lastUpdatedElement = document.getElementById('last-updated');
        if (lastUpdatedElement) {
            lastUpdatedElement.textContent = 'Fetching live data...';
        }

        return null;
    }
}

// Populate dashboard with cached data (FAST)
async function populateDashboardFromCache(cachedData) {
    console.log('=== Starting populateDashboard (from cache) ===');
    const container = document.getElementById('regions-container');
    const monthLabels = cachedData.monthLabels;
    console.log('Month labels:', monthLabels);

    // Update header with date range
    const dateRange = document.getElementById('date-range');
    if (dateRange) {
        dateRange.textContent = `October 2024 - ${new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}`;
    }

    try {
        for (const [regionName, regionData] of Object.entries(cachedData.regions)) {
            console.log(`Processing region: ${regionName}`);

            // Merge cached data with REGIONS structure for competitors
            const regionInfo = REGIONS[regionName] || { competitors: regionData.competitors };

            // Use createRegionSectionCustom if available (from index.html), otherwise use createRegionSection
            let regionSection;
            if (typeof createRegionSectionCustom === 'function') {
                regionSection = createRegionSectionCustom(regionName, {
                    ...regionInfo,
                    locations: regionData.locations
                }, monthLabels);
            } else {
                regionSection = createRegionSection(regionName, {
                    ...regionInfo,
                    locations: regionData.locations
                }, monthLabels);
            }
            container.appendChild(regionSection);

            // Update table rows with cached ratings
            for (let locIndex = 0; locIndex < regionData.locations.length; locIndex++) {
                const location = regionData.locations[locIndex];
                updateLocationRow(regionName, locIndex, location.ratings, monthLabels);
            }

            // Calculate and update average row
            updateAverageRow(regionName, regionData.locations.length, monthLabels);

            // Generate graph data from cached ratings
            if (typeof generateGraphDataFromCache === 'function') {
                const graphData = generateGraphDataFromCache(regionName, regionData, monthLabels);
                // Store in global variable for graph rendering
                if (typeof regionalGraphData !== 'undefined') {
                    regionalGraphData[regionName] = graphData;
                }
                // Render the graph tab
                if (typeof renderRegionGraph === 'function') {
                    renderRegionGraph(regionName, graphData);
                }
            }
        }
    } catch (error) {
        console.error('Error in populateDashboard:', error);
    }

    // Sync row heights
    syncRowHeights();

    // Populate competitor data for all locations
    console.log('Populating competitor data...');
    if (typeof populateCompetitorData === 'function') {
        populateCompetitorData();
    } else {
        console.error('populateCompetitorData function not found - make sure competitors.js is loaded');
    }

    // Generate companywide data
    if (typeof generateCompanywideData === 'function') {
        await generateCompanywideData();
    }

    console.log('=== Finished populateDashboard (from cache) ===');
}

// Helper function to generate graph data from cached ratings
function generateGraphDataFromCache(regionName, regionData, monthLabels) {
    const colors = ['#e74c3c', '#3498db', '#2ecc71', '#f39c12', '#9b59b6', '#1abc9c',
                    '#34495e', '#e67e22', '#95a5a6', '#16a085', '#c0392b', '#27ae60',
                    '#d35400', '#8e44ad', '#2980b9', '#c0392b', '#16a085', '#f1c40f',
                    '#e74c3c', '#3498db', '#2ecc71'];

    const locationsData = regionData.locations.map((loc, i) => ({
        name: loc.address.includes('Serviceable Area') ? 'Serviceable Area' : loc.address,
        city: loc.city,
        data: loc.ratings,
        color: colors[i % colors.length]
    }));

    // Calculate average
    const averageData = [];
    for (let i = 0; i < monthLabels.length; i++) {
        const validRatings = locationsData.map(loc => loc.data[i]).filter(r => r !== null);
        if (validRatings.length > 0) {
            const avg = validRatings.reduce((sum, r) => sum + parseFloat(r), 0) / validRatings.length;
            averageData.push(parseFloat(avg.toFixed(1)));
        } else {
            averageData.push(null);
        }
    }

    return {
        months: monthLabels.map(m => m.label),
        locations: locationsData,
        average: {
            name: `${regionName.toUpperCase()} AVERAGE`,
            data: averageData,
            color: '#000000'
        }
    };
}

// Populate dashboard with live API data (SLOW - fallback only)
async function populateDashboardFromAPI() {
    console.log('=== Starting populateDashboard (from API) ===');
    const container = document.getElementById('regions-container');
    const monthLabels = generateMonthLabels();
    console.log('Month labels:', monthLabels);

    // Update header with date range
    const dateRange = document.getElementById('date-range');
    if (dateRange) {
        dateRange.textContent = `October 2024 - ${new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}`;
    }

    try {
        for (const [regionName, regionData] of Object.entries(REGIONS)) {
            console.log(`Processing region: ${regionName}`);
            const regionSection = createRegionSection(regionName, regionData, monthLabels);
            container.appendChild(regionSection);

            // Fetch data for each location
            for (let locIndex = 0; locIndex < regionData.locations.length; locIndex++) {
                const location = regionData.locations[locIndex];
                console.log(`Fetching data for: ${location.city}, ${location.state}`);
                const ratings = [];

                for (const month of monthLabels) {
                    const rating = await fetchRating(location.entityId, month.apiDate);
                    ratings.push(rating);
                    // Small delay to avoid rate limiting
                    await new Promise(resolve => setTimeout(resolve, 100));
                }

                // Update table row with ratings
                updateLocationRow(regionName, locIndex, ratings, monthLabels);
            }

            // Calculate and update average row
            updateAverageRow(regionName, regionData.locations.length, monthLabels);
        }
    } catch (error) {
        console.error('Error in populateDashboard:', error);
    }

    // Sync row heights
    syncRowHeights();

    // Populate competitor data for all locations
    console.log('Populating competitor data...');
    if (typeof populateCompetitorData === 'function') {
        populateCompetitorData();
    } else {
        console.error('populateCompetitorData function not found - make sure competitors.js is loaded');
    }

    console.log('=== Finished populateDashboard (from API) ===');
}

// Main populate function - tries cache first, falls back to API
async function populateDashboard() {
    showLoading();

    // Try to load from cache first
    const cachedData = await loadCachedData();

    if (cachedData) {
        // Fast path: load from cache
        await populateDashboardFromCache(cachedData);
        hideLoading();
    } else {
        // Slow path: fetch from API
        await populateDashboardFromAPI();
        hideLoading();
    }
}

// Create region section HTML structure
function createRegionSection(regionName, regionData, monthLabels) {
    const section = document.createElement('div');
    section.className = 'region-section';
    section.id = `region-${regionName.replace(/\s+/g, '-')}`;

    section.innerHTML = `
        <div class="region-header" onclick="window.location.href='dynamic-graph.html?region=${encodeURIComponent(regionName)}'" style="cursor: pointer;">
            <h2><a href="dynamic-graph.html?region=${encodeURIComponent(regionName)}" style="color: white; text-decoration: none;">${regionName}</a> <span style="font-size: 0.5em; font-weight: 400; opacity: 0.85; font-style: italic;">(click to see graph)</span></h2>
            <span class="region-manager">
                <span class="legend-item"><span class="legend-color rating-excellent"></span>Excellent (4.0+)</span>
                <span class="legend-item"><span class="legend-color rating-good"></span>Good (3.0-3.9)</span>
                <span class="legend-item"><span class="legend-color rating-fair"></span>Fair (2.5-2.9)</span>
                <span class="legend-item"><span class="legend-color rating-poor"></span>Poor (&lt; 2.5)</span>
            </span>
        </div>
        <div class="hint">← Scroll the middle section to view all months (October 2024 - Present) →</div>
        <div class="table-wrapper">
            <!-- LEFT: Location Info -->
            <div class="fixed-left">
                <table>
                    <thead>
                        <tr>
                            <th>Address</th>
                            <th>City</th>
                            <th>State</th>
                            <th>Zip</th>
                        </tr>
                    </thead>
                    <tbody id="${regionName}-left-tbody">
                        ${regionData.locations.map(loc => `
                            <tr>
                                <td>${loc.address.includes('Serviceable Area') ? 'Serviceable Area' : loc.address}</td>
                                <td>${loc.city}</td>
                                <td>${loc.state}</td>
                                <td>${loc.zip}</td>
                            </tr>
                        `).join('')}
                        <tr class="average-row">
                            <td colspan="4"><strong>${regionName.toUpperCase()} AVERAGE</strong></td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <!-- MIDDLE: Scrollable Months -->
            <div class="scrollable-middle">
                <table>
                    <thead>
                        <tr>
                            ${monthLabels.map(m => `<th>${m.label}</th>`).join('')}
                        </tr>
                    </thead>
                    <tbody id="${regionName}-middle-tbody">
                        ${regionData.locations.map(() => `
                            <tr>
                                ${monthLabels.map(() => `<td class="rating">-</td>`).join('')}
                            </tr>
                        `).join('')}
                        <tr class="average-row">
                            ${monthLabels.map(() => `<td class="rating">-</td>`).join('')}
                        </tr>
                    </tbody>
                </table>
            </div>

            <!-- RIGHT: Competitors -->
            <div class="fixed-right">
                <table>
                    <thead>
                        <tr>
                            <th>XFINITY</th>
                            <th>Spectrum</th>
                            <th>Verizon</th>
                            <th>AT&T</th>
                        </tr>
                    </thead>
                    <tbody id="${regionName}-right-tbody">
                        ${regionData.locations.map(() => `
                            <tr>
                                <td class="rating ${getRatingClass(regionData.competitors.xfinity)}">${formatRating(regionData.competitors.xfinity)}</td>
                                <td class="rating ${getRatingClass(regionData.competitors.spectrum)}">${formatRating(regionData.competitors.spectrum)}</td>
                                <td class="rating ${getRatingClass(regionData.competitors.verizon)}">${formatRating(regionData.competitors.verizon)}</td>
                                <td class="rating ${getRatingClass(regionData.competitors.att)}">${formatRating(regionData.competitors.att)}</td>
                            </tr>
                        `).join('')}
                        <tr class="average-row">
                            <td class="rating">${formatRating(regionData.competitors.xfinity)}</td>
                            <td class="rating">${formatRating(regionData.competitors.spectrum)}</td>
                            <td class="rating">${formatRating(regionData.competitors.verizon)}</td>
                            <td class="rating">${formatRating(regionData.competitors.att)}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    `;

    return section;
}

// Update location row with fetched ratings
function updateLocationRow(regionName, locIndex, ratings, monthLabels) {
    const tbody = document.getElementById(`${regionName}-middle-tbody`);
    const row = tbody.children[locIndex];

    ratings.forEach((rating, index) => {
        const cell = row.children[index];
        const formattedRating = formatRating(rating);
        cell.textContent = formattedRating;

        // Apply color coding - set base class first, then add color class
        cell.className = 'rating';
        if (formattedRating !== '-') {
            const ratingValue = parseFloat(formattedRating);
            if (ratingValue >= 4.0) {
                cell.classList.add('rating-excellent');
            } else if (ratingValue >= 3.0) {
                cell.classList.add('rating-good');
            } else if (ratingValue >= 2.5) {
                cell.classList.add('rating-fair');
            } else {
                cell.classList.add('rating-poor');
            }
        }
    });
}

// Update average row for a region
function updateAverageRow(regionName, numLocations, monthLabels) {
    const tbody = document.getElementById(`${regionName}-middle-tbody`);
    const avgRow = tbody.children[numLocations]; // Last row

    for (let monthIndex = 0; monthIndex < monthLabels.length; monthIndex++) {
        const ratings = [];

        // Collect all ratings for this month across all locations
        for (let locIndex = 0; locIndex < numLocations; locIndex++) {
            const row = tbody.children[locIndex];
            const cellText = row.children[monthIndex].textContent.trim();
            if (cellText !== '-') {
                ratings.push(cellText);
            }
        }

        const avg = calculateAverage(ratings);
        const cell = avgRow.children[monthIndex];
        cell.textContent = avg;

        // Apply color coding to average row - set base class first, then add color class
        cell.className = 'rating';
        if (avg !== '-') {
            const ratingValue = parseFloat(avg);
            if (ratingValue >= 4.0) {
                cell.classList.add('rating-excellent');
            } else if (ratingValue >= 3.0) {
                cell.classList.add('rating-good');
            } else if (ratingValue >= 2.5) {
                cell.classList.add('rating-fair');
            } else {
                cell.classList.add('rating-poor');
            }
        }
    }
}

// Sync row heights across tables
function syncRowHeights() {
    document.querySelectorAll('.table-wrapper').forEach(wrapper => {
        const leftRows = wrapper.querySelectorAll('.fixed-left tbody tr');
        const middleRows = wrapper.querySelectorAll('.scrollable-middle tbody tr');
        const rightRows = wrapper.querySelectorAll('.fixed-right tbody tr');

        leftRows.forEach((row, i) => {
            const heights = [
                leftRows[i].offsetHeight,
                middleRows[i].offsetHeight,
                rightRows[i].offsetHeight
            ];
            const maxHeight = Math.max(...heights);

            leftRows[i].style.height = maxHeight + 'px';
            middleRows[i].style.height = maxHeight + 'px';
            rightRows[i].style.height = maxHeight + 'px';
        });
    });
}

// Show loading spinner
function showLoading() {
    const spinner = document.getElementById('loading-spinner');
    if (spinner) {
        spinner.style.display = 'flex';
    }
}

// Hide loading spinner
function hideLoading() {
    const spinner = document.getElementById('loading-spinner');
    if (spinner) {
        spinner.style.display = 'none';
    }
}

// Check if we need to refresh data (at the beginning of each month)
function checkForMonthlyRefresh() {
    const lastRefresh = localStorage.getItem('lastRefresh');
    const now = new Date();
    const currentMonth = `${now.getFullYear()}-${now.getMonth()}`;

    if (!lastRefresh || lastRefresh !== currentMonth) {
        // Clear any cached data and refresh
        localStorage.setItem('lastRefresh', currentMonth);
        return true;
    }

    return false;
}

// Initialize dashboard on page load
window.addEventListener('load', () => {
    checkForMonthlyRefresh();
    populateDashboard();
});

window.addEventListener('resize', syncRowHeights);
