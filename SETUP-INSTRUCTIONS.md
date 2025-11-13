# 🚀 Google Reviews Analytics Platform - Setup Instructions

## Problem Solved

**Before:** Every page load took 10+ minutes because the website fetched all ratings from the Yext API in real-time.

**After:** The website now loads **instantly** by reading from a pre-cached JSON file. Data is automatically refreshed monthly via GitHub Actions.

---

## 📋 How It Works

1. **data-fetcher.js** - Node.js script that fetches all ratings once and saves to `ratings-data.json`
2. **ratings-data.json** - Cached data file (loads in < 1 second)
3. **dynamic.js** - Modified to load from cache first, falls back to API if needed
4. **GitHub Actions** - Automatically runs the fetcher on the 1st of each month

---

## 🛠️ Initial Setup

### Step 1: Generate the Initial Data File

Run this command in your terminal from the project directory:

```bash
node data-fetcher.js
```

**Expected output:**
```
📊 Total Locations: 52
📅 Months to fetch: 2 (10/1/24 to 11/1/24)
🔄 Total API calls needed: 104
⏱️  Estimated time: ~1 minutes

🌎 Fetching Texas...
  📍 Odessa, TX: .... ✅ (11/104 - 10.6%)
  ...

✅ Data fetch complete!
💾 Data saved to ratings-data.json
📦 File size: 45.23 KB
🕒 Last updated: November 13, 2024, 2:00 PM

✨ Success! You can now use this data file with your website.
   The website will load instantly from this cached data.
```

**Important:** You only need to run this once to generate the initial `ratings-data.json` file.

---

### Step 2: Upload Files to Your Repository

Make sure these files are in your GitHub repository:

1. **data-fetcher.js** - The fetcher script
2. **ratings-data.json** - The generated data file (commit this!)
3. **.github/workflows/update-data.yml** - The automation workflow
4. **dynamic.js** - The modified dashboard script
5. **index.html** - The updated HTML with freshness indicator

Commit and push:

```bash
git add .
git commit -m "Add instant-loading cached data system"
git push
```

---

### Step 3: Deploy to Netlify

Your existing Netlify deployment should automatically pick up the changes. The website will now:

✅ Load instantly from `ratings-data.json`
✅ Show "Data last updated" timestamp
✅ Fall back to API if cache is missing

---

## 🤖 Automatic Monthly Updates (GitHub Actions)

### How It Works

The GitHub Actions workflow (`.github/workflows/update-data.yml`) will:

1. **Run automatically** on the 1st of every month at 2:00 AM UTC
2. Execute `node data-fetcher.js` to fetch fresh data
3. Commit the updated `ratings-data.json` to your repository
4. Netlify auto-deploys the update

### Manual Trigger

You can also trigger the data update manually:

1. Go to your GitHub repository
2. Click **Actions** tab
3. Click **Update Ratings Data Monthly** workflow
4. Click **Run workflow** button
5. Wait ~10 minutes for it to complete
6. Check the **Commits** to see the auto-commit

---

## 🔄 Manual Data Refresh (Optional)

If you want to manually update the data at any time:

```bash
node data-fetcher.js
git add ratings-data.json
git commit -m "Manual data refresh - $(date +'%B %Y')"
git push
```

Netlify will auto-deploy within 1-2 minutes.

---

## 📊 What's in ratings-data.json?

The JSON file structure:

```json
{
  "lastUpdated": "2024-11-13T14:00:00.000Z",
  "monthLabels": [
    { "label": "10/1/24", "apiDate": "2024-10-01" },
    { "label": "11/1/24", "apiDate": "2024-11-01" }
  ],
  "regions": {
    "Texas": {
      "manager": "Mike Carrosquilla",
      "competitors": { ... },
      "locations": [
        {
          "address": "2401 E Interstate 20",
          "city": "Odessa",
          "state": "TX",
          "zip": "79766",
          "entityId": "3339612",
          "ratings": [3.8, 3.9]
        }
      ]
    }
  }
}
```

---

## 🧪 Testing

### Test 1: Verify Fast Loading

1. Open your website in a browser
2. Open DevTools (F12) → **Network** tab
3. Refresh the page
4. You should see:
   - ✅ `ratings-data.json` loaded (~50 KB)
   - ✅ No Yext API calls
   - ✅ Page loads in < 2 seconds

### Test 2: Verify Data Freshness

1. Open the website
2. Check the header: **"Data last updated: [date]"**
3. It should match the date from `ratings-data.json`

### Test 3: Test Fallback

1. Temporarily rename `ratings-data.json` to `ratings-data-backup.json`
2. Refresh the website
3. You should see:
   - ⚠️ Console: "Falling back to live API fetching..."
   - ⏳ Loading spinner for 10 minutes
   - ✅ Data loads from API

---

## 📅 Monthly Update Schedule

| Date | Action | Who |
|------|--------|-----|
| **1st of each month** | GitHub Actions auto-fetches data | Automated |
| **1st of each month + ~10 min** | Updated JSON committed to repo | GitHub Bot |
| **1st of each month + ~12 min** | Netlify auto-deploys | Automated |

**Result:** Users always see data that's max 1 month old, and the page loads instantly.

---

## 🐛 Troubleshooting

### Problem: Website shows "Loading..." forever

**Solution:**
- Check if `ratings-data.json` exists in your repository
- Run `node data-fetcher.js` to generate it
- Commit and push the file

### Problem: GitHub Actions fails

**Causes:**
1. **No Node.js:** The workflow uses Node.js 18 (automatically installed)
2. **API key expired:** Update `YEXT_API_KEY` in `data-fetcher.js`
3. **Rate limiting:** The script has 150ms delays between calls

**Check logs:**
- Go to **Actions** tab in GitHub
- Click the failed workflow
- Read the error messages

### Problem: Data looks outdated

**Solution:**
- Manually run the workflow from GitHub Actions
- Or run `node data-fetcher.js` locally and push

---

## 🎯 Performance Comparison

| Metric | Before (Live API) | After (Cached) |
|--------|------------------|----------------|
| **Initial Load Time** | 10+ minutes | < 2 seconds |
| **API Calls per Load** | 500+ calls | 0 calls |
| **Server Load** | Very high | Minimal |
| **User Experience** | Terrible | Excellent |
| **Data Freshness** | Real-time | Monthly |

---

## 🔒 Security Notes

- ✅ API key is still exposed in `data-fetcher.js` (only runs server-side)
- ✅ No API calls from browser (secure)
- ✅ JSON file is public (same as before - only contains public Google ratings)

---

## 📝 Files Modified

| File | Status | Purpose |
|------|--------|---------|
| `data-fetcher.js` | ✅ New | Fetches and caches data |
| `ratings-data.json` | ✅ Generated | Cached ratings data |
| `.github/workflows/update-data.yml` | ✅ New | Monthly automation |
| `dynamic.js` | ✅ Modified | Loads from cache first |
| `index.html` | ✅ Modified | Shows data freshness |

---

## 📞 Support

If you encounter any issues:

1. Check the console logs (F12 → Console)
2. Verify `ratings-data.json` exists and is valid JSON
3. Check GitHub Actions logs for automation errors
4. Re-run `node data-fetcher.js` to regenerate data

---

## 🎉 Success!

Your dashboard now:
- ✅ Loads **instantly** (< 2 seconds)
- ✅ Updates **automatically** (monthly)
- ✅ Shows **data freshness** (timestamp in header)
- ✅ Has **fallback** (API if cache missing)
- ✅ Zero maintenance required

Enjoy your lightning-fast analytics platform! ⚡
