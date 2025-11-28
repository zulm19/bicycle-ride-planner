## Workflow
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

## 3. "View route" Button (Google Maps)

**Test:** Click "View route" on any suggested route  
**Expected:**  
- A new browser tab opens.
- Google Maps loads with the cycling route.
- Route waypoints match the described landmarks.

## 4. Weather API & Icon

**Test:** With internet connection on, select a duration and click "Plan My Ride"  
**Expected:**  
- `weatherStatus` first shows: "Checking weather...".
- After loading:
  - `weatherStatus` shows something like:  
    "Forecast: Fair" or "Forecast: Cloudy" or "Forecast: Showers".
  - `weatherAdvice` shows a friendly advice message, for example:
    - "Weather looks okay. Ride safely."
    - "Rain expected. Consider delaying your ride."

**Test:** Turn off internet and click "Plan My Ride"  
**Expected:**  
- `weatherStatus`: "Could not load weather."
- `weatherAdvice`: "Please check another source."
- No JavaScript errors in the console.




