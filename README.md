**Bicycle Ride Planner**

Bicycle Ride Planner is a web app that helps users discover curated cycling routes and check live weather conditions in Singapore.

This app is for beginner to intermediate cyclists who are interested in finding scenic routes to ride around Singapore.

**UX**

For users who intend to discover popular cycling routes in Singapore. The user can interact with the website primary via two step process.

1.  User selects a cycling duration (30, 60, or 90 minutes) and clicks a button "Plan My Ride".

- The site then suggests suitable cycling routes with:
  - Approximate distance (km)
  - Difficulty
  - Area
  - Key landmarks
  - 
2. Each route has a “View route” button that opens the loop directly in Google Maps with pre-curated cycling routes.
- The app fetches the latest 2-hour weather forecast from data.gov.sg (NEA) and shows a simple riding advice message. It provides advice to the rider if riding is safe or if they should consider to postpone in the event of rain.

The site uses a simple interface whereby all the information are displayed in a singular page.

**User Stories**

As a beginner cyclist, I want to choose how long I plan to ride (e.g. 30, 60, 90 minutes), so that I can see routes that fit my available time.

As a safety-conscious rider, I want to see a simple weather forecast with an icon and advice, so that I can quickly decide if it’s safe to ride now or if I should delay.

As a beginner rider, I want to see the route difficulty clearly labelled (Easy / Moderate / Advanced), so that I can avoid routes that are too challenging for me.

**Features**

The app has a cycling duration option where users can select. It will then recommend cycling routes based on the user's preferred cycling duration. The suggested cycling route options are launched in Google maps site where users can immediately start using once they have decided on the route.

The app comes with 2-hour weather forecast from NEA that helps riders plan their rides to avoid bad weather. It will even advise the rider if they should continue with their ride or to postpone. In general, when weather conditions from NEA's site indicate rain or thunderstorm, the site will advise to postpone for the user's safety.


**Technologies Used**

- External API:
  - NEA 2-hour weather forecast from data.gov.sg
- Google Maps route URLs for visualising cycling loops

**Testing**

Site has mainly 3 sections:
Plan Your Ride – the main user input (duration radio buttons and “Plan My Ride” button).
Weather – forecast text + advice message.
Recommended Routes – a list of cards, one per route, with a “View route” button.

Each section is presented in a panel with a background image and a dark overlay to keep text readable.
Text is kept short and descriptive to reduce cognitive load, especially for non-technical users.

Weather Testing:
- When the user submits the form, the route list updates and the weather panel shows “Checking weather…” before displaying results.
- If no duration is selected, the user sees a clear alert message.
- If there is no internet connection, site will advise "Could not load weather" & "Please check another source.". App buttons are still workable but navigating to external sites such as Google maps will not load successfully. Recommended routes will still work as it is pre-defined locally in script.

**Deployment**

The application in development encountered alot of bugs initially. There was an idea to utilise routes to be based on user's location and to suggest routes available in close proximity to user. However, the idea was too complex and the location of the user often made routes change drastically to be very different from its intended route. As such, instead of making it intuitive to be based on user's location, due to issues faced, it would instead be static route displayed on Google maps.

The structure of deployment of files is as per follows:
bicycle-ride-planner/
│
├── index.html
├── style.css
├── script.js
│
└── images/
    ├── cyclist-header.jpg
    ├── plan-bg.jpg
    ├── weather-bg.jpg
    └── routes-bg.jpg


**Credits**

Media
Pictures obtained for banner and background of the site was obtained from https://www.pexels.com/search/forest%20and%20bicycle/





