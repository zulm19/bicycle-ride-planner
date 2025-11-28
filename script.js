// Bicycle Ride Planner

// Route Data
const routes = [
  {
    name: "Marina Bay Loop",
    distanceKm: 7.1,
    durationMins: 31,
    area: "Central",
    difficulty: "Easy",
    landmarks: "Marina Bay MRT, Esplanade, The Float @ Marina Bay, Helix Bridge",
    routeUrl:
      "https://www.google.com/maps/dir/Marina+Bay+MRT+Station+(TE20),+25+Park+St,+Singapore+018929/Esplanade+-+Theatres+on+the+Bay,+Singapore,+1+Esplanade+Dr,+Singapore+038981/The+Float@Marina+Bay+Grandstand,+20+Raffles+Ave.,+Singapore+039805/Helix+Bridge/Park+Street,+Marina+Bay+MRT+Station+(TE20),+Singapore/@1.2832239,103.8503926,16z/data=!3m1!4b1!4m32!4m31!1m5!1m1!1s0x31da19524f1a1463:0x7487c3936d19722e!2m2!1d103.8544814!2d1.2752319!1m5!1m1!1s0x31da19a7ec1ae549:0xb955a5f90a365835!2m2!1d103.8558166!2d1.2897934!1m5!1m1!1s0x31da190787130db3:0x127a6bbdf67aa870!2m2!1d103.8590313!2d1.2892063!1m5!1m1!1s0x31da19071707804f:0xe96cc4b454cf960c!2m2!1d103.8606326!2d1.2874774!1m5!1m1!1s0x31da19524f1a1463:0x7487c3936d19722e!2m2!1d103.8544814!2d1.2752319!3e1?entry=ttu&g_ep=EgoyMDI1MTExNy4wIKXMDSoASAFQAw%3D%3D"
  },
  {
    name: "Punggol Waterway & Coney Ride",
    distanceKm: 8.3,
    durationMins: 30,
    area: "North-East",
    difficulty: "Easy",
    landmarks: "Punggol Waterway Park, Jewel Bridge, Coney Island Gate",
    routeUrl:
      "https://www.google.com/maps/dir/Punggol+Waterway+Park/Jewel+Bridge/Northshore+Drive,+Marina+Country+Club,+Singapore/Coney+Island+Park+West+Entrance/Punggol+Drive,+Damai+LRT+Station+(PE7),+Singapore/Punggol+Waterway+Park/@1.4112014,103.9017623,16z/data=!3m1!5s0x31da15ed9a203adb:0x26515ac5852bdc31!4m38!4m37!1m5!1m1!1s0x31da15f1a3415505:0x49a9ba7cdc9132fa!2m2!1d103.9044621!2d1.4111377!1m5!1m1!1s0x31da15e65221cd5f:0xc697a591ad3eddca!2m2!1d103.8958644!2d1.4095595!1m5!1m1!1s0x31da15ec20cb5177:0x49850af0ddeedd66!2m2!1d103.8993355!2d1.416106!1m5!1m1!1s0x31da3f00762c79a9:0x78f7f7a93078db40!2m2!1d103.9150476!2d1.4162844!1m5!1m1!1s0x31da15001e2008f1:0x4580856f03053519!2m2!1d103.9088641!2d1.4051876!1m5!1m1!1s0x31da15f1a3415505:0x49a9ba7cdc9132fa!2m2!1d103.9044621!2d1.4111377!3e1?entry=ttu&g_ep=EgoyMDI1MTExNy4wIKXMDSoASAFQAw%3D%3D"
  },
  {
    name: "East Coast Park Coastal Cruise",
    distanceKm: 19.9,
    durationMins: 59,
    area: "East",
    difficulty: "Moderate",
    landmarks: "East Coast Lagoon, Parkland Green, Marina Barrage",
    routeUrl:
      "https://www.google.com/maps/dir/East+Coast+Lagoon+Food+Village,+1220+ECP,+Singapore+468960/Marina+Gardens+Drive,+Marina+Barrage,+Singapore/East+Coast+Lagoon+Food+Village,+1220+ECP,+Singapore+468960/@1.286779,103.8964193,2204m/data=!3m1!1e3!4m20!4m19!1m5!1m1!1s0x31da18764013f43b:0x6cfef20f595a57b0!2m2!1d103.9349594!2d1.3069299!1m5!1m1!1s0x31da19ad31884be7:0xdd66daf2e5edc4d1!2m2!1d103.8714399!2d1.2805168!1m5!1m1!1s0x31da18764013f43b:0x6cfef20f595a57b0!2m2!1d103.9349594!2d1.3069299!3e1?entry=ttu&g_ep=EgoyMDI1MTExNy4wIKXMDSoASAFQAw%3D%3D"
  },
  {
    name: "West Coast Park Loop",
    distanceKm: 17.5,
    durationMins: 59,
    area: "West",
    difficulty: "Moderate",
    landmarks: "Labrador Nature Reserve, ORTO, McDonald's West Coast Park",
    routeUrl:
      "https://www.google.com/maps/dir/Labrador+Nature+Reserve/ORTO/West+Coast+Park+Carpark+1/McDonald's+West+Coast+Park/Turning+Point+To+Boardwalk/McDonald's+West+Coast+Park/Labrador+Nature+Reserve/@1.2803311,103.7874344,3707m/data=!3m2!1e3!5s0x31da1ae5342fb8f1:0xe5d49c8a30e8c40b!4m64!4m63!1m5!1m1!1s0x31da1beb8feb2da3:0x2202c5ac550cfc03!2m2!1d103.8020649!2d1.2665094!1m15!1m1!1s0x31da140f04cfc89d:0xa6ec83a0b97d89e6!2m2!1d103.7805348!2d1.2831852!3m4!1m2!1d103.7791723!2d1.2858284!3s0x31da1babc776cf43:0x9727767b19817456!3m4!1m2!1d103.7767823!2d1.2878175!3s0x31da1baaed6d9e51:0x5e5dee1b8297d3e8!1m5!1m1!1s0x31da1b192c65b3c7:0x44fae87ad97b06b8!2m2!1d103.7714497!2d1.2895664!1m5!1m1!1s0x31da1afc6e15924b:0x1282116999f0130f!2m2!1d103.7633584!2d1.2975443!1m5!1m1!1s0x31da1ae5f4a351a3:0x5bce2ebc5c8d215f!2m2!1d103.7592598!2d1.298663!1m15!1m1!1s0x31da1afc6e15924b:0x1282116999f0130f!2m2!1d103.7633584!2d1.2975443!3m4!1m2!1d103.7760835!2d1.2881796!3s0x31da1baa98719c49:0x3663aebbe5ff68be!3m4!1m2!1d103.7777647!2d1.2873778!3s0x31da1baae4bffee1:0x94f172033973b403!1m5!1m1!1s0x31da1beb8feb2da3:0x2202c5ac550cfc03!2m2!1d103.8020649!2d1.2665094!3e1?entry=ttu&g_ep=EgoyMDI1MTExNy4wIKXMDSoASAFQAw%3D%3D"
  },
  {
    name: "North-Northwest Heritage Ride",
    distanceKm: 26.8,
    durationMins: 91,
    area: "North-Northwest",
    difficulty: "Advanced",
    landmarks: "Admiralty Park, Kranji War Memorial, CCK Lot One",
    routeUrl:
      "https://www.google.com/maps/dir/Riverside+Road,+Admiralty+Park,+Singapore/Woodlands+Road,+Kranji+War+Memorial,+Singapore/Choa+Chu+Kang+Street+52,+Yew+Tee+Community+Club,+Singapore/Choa+Chu+Kang+Grove,+ITE+College+West,+Singapore/Riverside+Road,+Admiralty+Park,+Singapore/@1.419064,103.7524006,4406m/data=!3m2!1e3!5s0x31da1ae5342fb8f1:0xe5d49c8a30e8c40b!4m47!4m46!1m5!1m1!1s0x31da13036ea51735:0x75db0a3afb24a00f!2m2!1d103.7806565!2d1.4465535!1m15!1m1!1s0x31da123cc4520bbb:0x5d6e6644e648b7f2!2m2!1d103.7581967!2d1.418346!3m4!1m2!1d103.7550993!2d1.4074728!3s0x31da12217edf7697:0xf47086bc8e0a5d4f!3m4!1m2!1d103.7433014!2d1.3998329!3s0x31da11f7aabfc3b7:0xe7d535a8471317f6!1m10!1m1!1s0x31da11f1a1fb0aa9:0x2ea8f5783e05f11f!2m2!1d103.7447108!2d1.3948528!3m4!1m2!1d103.7468731!2d1.3794529!3s0x31da11c3e037e24d:0x94cfa85daf6aa4a2!1m5!1m1!1s0x31da11e779c9171f:0xcd7c753732154ecb!2m2!1d103.7524199!2d1.3758303!1m5!1m1!1s0x31da13036ea51735:0x75db0a3afb24a00f!2m2!1d103.7806565!2d1.4465535!3e1?entry=ttu&g_ep=EgoyMDI1MTExNy4wIKXMDSoASAFQAw%3D%3D"
  },
  {
    name: "West Coast University Circuit",
    distanceKm: 28.4,
    durationMins: 92,
    area: "West",
    difficulty: "Advanced",
    landmarks: "Pandan Reservoir, Joo Koon, Nanyang Technological University, IMM Building",
    routeUrl:
      "https://www.google.com/maps/dir/Pandan+Reservoir/Joo+Koon+Circle,+FairPrice+Joo+Koon,+Singapore/Nanyang+Avenue,+Nanyang+Technological+University,+Singapore/Jurong+East+Street+21,+IMM+Building,+Singapore/Pandan+Reservoir/@1.334284,103.6921242,8816m/data=!3m3!1e3!4b1!5s0x31da1ae5342fb8f1:0xe5d49c8a30e8c40b!4m37!4m36!1m10!1m1!1s0x31da1ab9bd18f8b9:0x2dff385ab71c28fe!2m2!1d103.7433983!2d1.3154014!3m4!1m2!1d103.7073123!2d1.3209128!3s0x31da055dbd859945:0x3f71ed3aef5ba9a8!1m5!1m1!1s0x31da05809f355fc9:0xc598024eb7d5b19e!2m2!1d103.6784138!2d1.3258844!1m5!1m1!1s0x31da0f0a99014463:0xb8bb0800c52d8219!2m2!1d103.6831347!2d1.3483099!1m5!1m1!1s0x31da100ddadb696b:0x82ca15d32e0cc595!2m2!1d103.7470337!2d1.3359631!1m5!1m1!1s0x31da1ab9bd18f8b9:0x2dff385ab71c28fe!2m2!1d103.7433983!2d1.3154014!3e1?entry=ttu&g_ep=EgoyMDI1MTExNy4wIKXMDSoASAFQAw%3D%3D"
  }
];

// DOM
const durationInputs = document.querySelectorAll("input[name='duration']");
const rideForm = document.querySelector("#rideForm");
const routesList = document.querySelector("#routesList");
const resultsIntro = document.querySelector("#resultsIntro");
const weatherStatus = document.querySelector("#weatherStatus");
const weatherAdvice = document.querySelector("#weatherAdvice");

// Recommended Routes Display
function showRoutes(list, duration) {
  routesList.innerHTML = "";
  if (list.length === 0) {
    resultsIntro.textContent = "No routes for this duration.";
    return;
  }
  resultsIntro.textContent = "Recommended routes for a " + duration + "-minute ride:";
  for (let i = 0; i < list.length; i++) {
    const r = list[i];
    const item =
      "<li class='route-card'>" +
      "<h3>" + r.name + "</h3>" +
      "<p>Distance: " + r.distanceKm + " km</p>" +
      "<p>Region: " + r.area + "</p>" +
      "<p>Difficulty: " + r.difficulty + "</p>" +
      "<p>Landmarks: " + r.landmarks + "</p>" +
      "<a href='" + r.routeUrl + "' target='_blank'>View route</a>" +
      "</li>";
    routesList.innerHTML += item;
  }
}

// Weather API and Advice
function fetchWeather() {
  weatherStatus.textContent = "Checking weather...";
  weatherAdvice.textContent = "";
  fetch("https://api.data.gov.sg/v1/environment/2-hour-weather-forecast")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      let forecast = "";
      if (data.items && data.items[0] && data.items[0].forecasts && data.items[0].forecasts[0]) {
        forecast = data.items[0].forecasts[0].forecast;
      }
      if (!forecast) {
        weatherStatus.textContent = "Forecast: N/A";
        weatherAdvice.textContent = "Weather unavailable.";
      } else {
        weatherStatus.textContent = "Forecast: " + forecast;
        if (forecast.indexOf("Rain") !== -1 || forecast.indexOf("Showers") !== -1) {
          weatherAdvice.textContent = "Might rain. Consider delaying your ride.";
        } else if (forecast.indexOf("Cloudy") !== -1 || forecast.indexOf("Fair") !== -1) {
          weatherAdvice.textContent = "Looks okay, but ride safely.";
        } else {
          weatherAdvice.textContent = "Please check the weather conditions.";
        }
      }
    })
    .catch(function () {
      weatherStatus.textContent = "Could not load weather.";
      weatherAdvice.textContent = "Please check the weather on another site.";
    });
}

rideForm.addEventListener("submit", function (event) {
  event.preventDefault();
  let duration = null;
  for (let i = 0; i < durationInputs.length; i++) {
    if (durationInputs[i].checked) {
      duration = Number(durationInputs[i].value);
    }
  }
  if (duration === null) {
    alert("Please select a duration.");
    return;
  }
  let min = 0;
  let max = 0;
  if (duration === 30) {
    min = 5;
    max = 12;
  } else if (duration === 60) {
    min = 12;
    max = 22;
  } else if (duration === 90) {
    min = 20;
    max = 35;
  }
  const list = [];
  for (let i = 0; i < routes.length; i++) {
    const r = routes[i];
    if (r.distanceKm >= min && r.distanceKm <= max) {
      list.push(r);
    }
  }
  showRoutes(list, duration);
  fetchWeather();
});
