# Cash Book

A simple, mobile-friendly cash book: track **Cash In** and **Cash Out** in separate books, filter and search entries, and download reports as **Excel** or **PDF**.

It is a single file (`index.html`). There is no server, no sign-up and no build step.

## Features

- Multiple books (Household, Business, Projects, ...)
- Cash in / cash out entries with category, payment mode, note and date
- Search and filters (date range, type, category, payment mode)
- Reports: all entries, day-wise summary, category-wise summary, as Excel or PDF
- **Settings page**: company name, your name, currency label, your own categories and payment modes, light/dark theme
- Backup to a `.json` file, restore from it, export all entries to `.csv`
- Light and dark mode, works on phone and desktop

## Where is my data?

Everything is saved in your own browser (`localStorage`) on the device you use. Nothing is uploaded anywhere.

- Each person, browser and device has its own separate data.
- Clearing the browser's site data deletes your entries. **Download a backup from Settings regularly.**
- To move to another computer: Settings > Download backup file, then open the app there and use Settings > Restore from a backup file.

This app does not share one book between several people. If a team needs that, it needs a shared database, which is a separate step.

## Put it on GitHub Pages (free hosting)

1. Create a new repository on GitHub (for example `cashbook`). Make it **Public**.
2. Upload `index.html` and this `README.md` to the repository (Add file > Upload files > Commit).
3. Open **Settings > Pages**. Under *Build and deployment*, set Source to **Deploy from a branch**, choose branch `main` and folder `/ (root)`, then Save.
4. After a minute, your app is live at `https://YOUR-USERNAME.github.io/cashbook/`. Share that link with anyone.

On a phone, open the link and use *Add to Home Screen* so it opens like an app.

## Notes

- Excel and PDF export load two small libraries (SheetJS and jsPDF) from cdnjs, so those two buttons need internet. If the Excel library cannot load, the app saves a `.csv` instead. Everything else works offline.
- The **Download PDF** button uses a built-in font that covers English letters only, so Sinhala or Tamil notes show as `?` there. For those, use **Print or save as PDF** on the report page and choose *Save as PDF* in the print window. It uses your device's fonts, so Sinhala and Tamil show correctly. They are also fine in the app, the Excel file and the CSV.
- Fonts are loaded from Google Fonts. The app falls back to the system font if they are unavailable.

## Credit

App created by Rajitha Gaspe. The credit line appears at the bottom of the home and settings screens and on printed and PDF reports.

## Licence

Add a `LICENSE` file to your repository to say how others may use it (for example the MIT licence). Without one, the default is "all rights reserved", even on a public repository.
