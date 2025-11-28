# Bicycle Ride Planner

Bicycle Ride Planner is a simple web app that helps users discover curated cycling routes and check live weather conditions in Singapore.

## What the website does

- User selects a cycling duration (30, 60, or 90 minutes).
- The app suggests suitable cycling routes with:
  - Approximate distance (km)
  - Difficulty
  - Area
  - Key landmarks.
- Each route has a **“View route”** button that opens the loop directly in **Google Maps (cycling mode)**.
- The app fetches the latest **2-hour weather forecast** from **data.gov.sg (NEA)** and shows a simple riding advice message.

## Technologies Used

- HTML – structure
- CSS – styling (including header image)
- JavaScript – interactivity and logic
- External API:
  - NEA 2-hour weather forecast from data.gov.sg
- Google Maps route URLs for visualising cycling loops

## How to Run

1. Place all files (`index.html`, `style.css`, `script.js`, images, etc.) in the same folder.
2. Open `index.html` in a browser (Chrome/Edge/Firefox).
3. Select a ride duration and click **"Plan My Ride"**.

## Notes

- Distances shown are approximate and based on the designed loops.
- Google Maps may show slightly different values depending on routing changes.
