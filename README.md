# Google Reviews Analytics Platform v2.0

**Instant-Loading Dashboard with Monthly Auto-Updates**

---

## What's New in v2.0?

### Performance Improvements

| Metric | Before | After | Improvement |
|--------|--------|-------|-------------|
| Load Time | 10+ minutes | < 2 seconds | **300x faster** |
| API Calls | 500+ per load | 0 per load | **100% reduction** |
| User Experience | Unusable | Excellent | ✅ |

---

## Quick Start

### 1. Generate Data (First Time Only)

```bash
node data-fetcher.js
```

or

```bash
npm run fetch-data
```

**Wait ~10 minutes** - This fetches all ratings and creates `ratings-data.json`

### 2. Deploy

```bash
git add .
git commit -m "Add instant-loading system"
git push
```

**Done!** Your website now loads instantly. ⚡

---

## Project Structure

```
111/
├── index.html                      # Main dashboard (updated)
├── dynamic.js                      # Load logic (now uses cache)
├── competitors.js                  # Competitor data
├── data-fetcher.js                 # ✨ NEW: Data fetcher script
├── ratings-data.json               # ✨ NEW: Cached data file
├── package.json                    # NPM scripts
├── .github/
│   └── workflows/
│       └── update-data.yml         # ✨ NEW: Monthly automation
├── QUICK-START.md                  # Quick reference
└── SETUP-INSTRUCTIONS.md           # Detailed guide
```

---

## Automatic Updates

The system automatically fetches fresh data on the **1st of every month** via GitHub Actions.

**No maintenance required!**

### Manual Update

Want to update data right now?

```bash
npm run update
```

This will:
1. Fetch fresh data from Yext API
2. Commit to GitHub
3. Auto-deploy to Netlify

---

## 🔍 How It Works

### Previous System (Slow)
```
User Opens Page → Website Fetches API (500+ calls) → 10 min wait → Display
```

### New System (Fast)
```
User Opens Page → Load ratings-data.json → < 2 sec → Display
```

### Monthly Updates
```
GitHub Actions (1st of month) → Fetch Fresh Data → Commit → Auto-Deploy
```

---

## Features

 **Instant Loading** - Page loads in < 2 seconds
 **Auto-Updates** - Fresh data every month automatically
 **Zero API Calls** - No rate limiting issues
 **Fallback System** - Falls back to API if cache missing
 **Data Freshness** - Shows "Last Updated" timestamp
 **Manual Refresh** - Can trigger updates anytime
 **Regional Analysis** - Track performance by region
 **Competitor Comparison** - Compare vs Xfinity, Spectrum, Verizon, AT&T
 **Executive Reports** - PDF exports with insights

---

##  Deployment

### Netlify (Current)

Already deployed! Just push your changes:

```bash
git push
```

Netlify auto-deploys within 2 minutes.

### Requirements

- Node.js 14+ (for running data-fetcher.js)
- GitHub repository (for automation)
- Netlify account (for hosting)

---

##  Update Schedule

| Day | Event |
|-----|-------|
| **1st of each month, 2:00 AM UTC** | GitHub Actions fetches fresh data |
| **1st of each month, 2:10 AM UTC** | Auto-commits to repository |
| **1st of each month, 2:12 AM UTC** | Netlify auto-deploys |

**Users see:** Fresh data from the 1st of each month, loaded instantly

---

##  Maintenance

### Update Data Manually

**Option 1:** Run locally
```bash
node data-fetcher.js
git add ratings-data.json
git commit -m "Manual data refresh"
git push
```

**Option 2:** Trigger GitHub Actions
1. Go to GitHub repo → **Actions** tab
2. Select **Update Ratings Data Monthly**
3. Click **Run workflow**

### Check Last Update

Open the website and look at the header:
```
 Data last updated: November 13, 2024, 2:00 PM
```

---

##  Testing

### Verify Instant Loading

1. Open website
2. Press F12 → Network tab
3. Refresh page
4. Should see:
   -  `ratings-data.json` loads (~50 KB)
   -  No Yext API calls
   -  Total load time < 2 seconds

### Verify Automation

1. Wait until the 1st of next month
2. Check GitHub commits - should see auto-commit
3. Check website - should show updated data

---

## 📖 Documentation

- **QUICK-START.md** - Essential commands only
- **SETUP-INSTRUCTIONS.md** - Complete setup guide with troubleshooting
- **This README** - Overview and reference

---

##  Tech Stack

- **Frontend:** HTML, CSS, JavaScript
- **Charts:** Chart.js
- **PDF Export:** jsPDF, html2canvas
- **API:** Yext Reviews API
- **Hosting:** Netlify
- **Automation:** GitHub Actions
- **Data Storage:** JSON file

---

##  Security

-  API key only used server-side (data-fetcher.js)
-  No API calls from browser
-  JSON file contains public data only (Google ratings)
-  No sensitive information exposed

---

##  Troubleshooting

### "Data last updated: Loading..." forever

**Fix:** Run `node data-fetcher.js` to generate initial data file

### GitHub Actions failing

**Check:**
1. API key is correct in `data-fetcher.js`
2. Repository has Actions enabled
3. Check Actions logs for specific errors

### Website showing old data

**Fix:** Manually trigger data update or wait until 1st of month

---

##  Support

Created by **Moiz Uddin**

For issues:
1. Check console logs (F12 → Console)
2. Review SETUP-INSTRUCTIONS.md
3. Check GitHub Actions logs

---
