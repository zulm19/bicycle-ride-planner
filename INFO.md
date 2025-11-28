
---

## 5️⃣ `TESTING.md`

```md
# Testing Plan – Bicycle Ride Planner

## 1. Duration Selection

**Test:** Click "Plan My Ride" with no duration selected  
**Expected:**  
- An alert appears: "Please select a duration."
- No routes are displayed.

**Test:** Select 30 minutes and click "Plan My Ride"  
**Expected:**  
- At least one route with distance between 5–12 km is shown  
  (e.g. Marina Bay Loop, Punggol Waterway & Coney Ride).

**Test:** Select 60 minutes and click "Plan My Ride"  
**Expected:**  
- Routes with distance between 12–22 km are shown  
  (e.g. East Coast Park Coastal Cruise, West Coast Park Loop).

**Test:** Select 90 minutes and click "Plan My Ride"  
**Expected:**  
- Routes with distance between 20–35 km are shown  
  (e.g. North-Northwest Heritage Ride, West Coast University Circuit).

---

## 2. Routes Display

**Test:** After selecting a valid duration and planning a ride  
**Expected:**  
- `resultsIntro` text changes to:  
  "Recommended routes for a X-minute ride:".
- For each route:
  - A route card appears as a `<li>` with:
    - Route name (as a heading line)
    - Distance line – "Distance: X km"
    - Region line – "Region: ..."
    - Difficulty line – "Difficulty: ..."
    - Landmarks line – "Landmarks: ..."
  - A **"View route"** button is visible at the bottom of the card.

---

## 3. "View route" Button (Google Maps)

**Test:** Click "View route" on any suggested route  
**Expected:**  
- A new browser tab opens.
- Google Maps loads with the cycling route.
- Route waypoints match the described landmarks.

---

## 4. Weather API & Icon

**Test:** With internet connection on, select a duration and click "Plan My Ride"  
**Expected:**  
- `weatherStatus` first shows: "Checking weather...".
- After loading:
  - `weatherStatus` shows something like:  
    "☀️ Forecast: Fair" or "☁️ Forecast: Cloudy" or "🌧️ Forecast: Showers".
  - `weatherAdvice` shows a friendly advice message, for example:
    - "Weather looks okay. Ride safely."
    - "Rain expected. Consider delaying your ride."
  - The emoji icon matches the forecast:
    - ☀️ for "Fair"
    - ☁️ for "Cloudy"
    - 🌧️ for "Rain" / "Showers"
    - ❔ for unknown or missing forecast

**Test:** Turn off internet and click "Plan My Ride"  
**Expected:**  
- `weatherStatus`: "Could not load weather."
- `weatherAdvice`: "Please check another source."
- No JavaScript errors in the console.

---

## 5. Layout & Appearance

**Test:** View on desktop and resize the browser window narrower  
**Expected:**  
- Header banner image appears with readable overlay text.
- Panels ("Plan Your Ride", "Weather", "Recommended Routes") stack vertically and remain readable.
- Route cards stay inside the "Recommended Routes" panel with proper spacing.
- Weather icon and text stay aligned in the weather panel.

---

## 6. Console Errors

**Test:** Open the browser DevTools console and interact with the app  
**Expected:**  
- No red error messages.
- No uncaught exceptions when:
  - Selecting durations
  - Clicking "Plan My Ride"
  - Loading weather (online or offline)
  - Clicking "View route" buttons.
