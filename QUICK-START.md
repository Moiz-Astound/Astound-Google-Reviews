# ⚡ Quick Start Guide

## Generate Initial Data (One Time)

```bash
node data-fetcher.js
```

Wait ~10 minutes. You'll get a `ratings-data.json` file.

---

## Deploy to GitHub & Netlify

```bash
git add .
git commit -m "Add instant-loading system"
git push
```

Netlify auto-deploys. Done! ✅

---

## What Changed?

### Before:
- 10+ minute load time
- 500+ API calls per page load
- Terrible user experience

### After:
- < 2 second load time
- 0 API calls per page load
- Excellent user experience

---

## How to Update Data Manually

```bash
node data-fetcher.js
git add ratings-data.json
git commit -m "Data refresh"
git push
```

---

## Automatic Updates

GitHub Actions runs on the **1st of every month** automatically. No action needed.

Want to trigger manually?
1. Go to GitHub → **Actions** tab
2. Click **Update Ratings Data Monthly**
3. Click **Run workflow**

---

## Verify It's Working

1. Open website
2. Check header: "Data last updated: [date]"
3. Open DevTools → Network tab
4. Refresh page
5. Should see `ratings-data.json` load, NO Yext API calls

---

That's it! Your dashboard now loads instantly. 🎉
