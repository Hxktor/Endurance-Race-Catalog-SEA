/**
 * Data Catalog Project Starter Code - SEA Stage 2
 *
 * This file is where you should be doing most of your work. You should
 * also make changes to the HTML and CSS files, but we want you to prioritize
 * demonstrating your understanding of data structures, and you'll do that
 * with the JavaScript code you write in this file.
 *
 * The comments in this file are only to help you learn how the starter code
 * works. The instructions for the project are in the README. That said, here
 * are the three things you should do first to learn about the starter code:
 * - 1 - Change something small in index.html or style.css, then reload your
 *    browser and make sure you can see that change.
 * - 2 - On your browser, right click anywhere on the page and select
 *    "Inspect" to open the browser developer tools. Then, go to the "console"
 *    tab in the new window that opened up. This console is where you will see
 *    JavaScript errors and logs, which is extremely helpful for debugging.
 *    (These instructions assume you're using Chrome, opening developer tools
 *    may be different on other browsers. We suggest using Chrome.)
 * - 3 - Add another string to the titles array a few lines down. Reload your
 *    browser and observe what happens. You should see a fourth "card" appear
 *    with the string you added to the array, but a broken image.
 *
 */

// An array of endurance race objects. Each object represents one race
// and holds all the key data about that race including distances,
// records, and course details.
let races = [
  {
    // Basic race info
    name: "Ironman World Championship",
    location: "Kailua-Kona, Hawaii",
    country: "USA",
    type: "Triathlon",

    // Individual discipline distances (in miles)
    swim: 2.4,
    bike: 112,
    run: 26.2,
    totalDistance: 140.6,

    // Difficulty rated 1-5 (5 being the hardest)
    difficulty: 5,
    bestSeason: "October",

    // Overall course records for men and women
    mensCourseRecord: "7:35:53",
    mensRecordHolder: "Patrick Lange",
    womensCourseRecord: "8:24:31",
    womensRecordHolder: "Lucy Charles-Barclay",

    // Individual split records for men (swim, bike, run)
    mensSwimRecord: "45:43",
    mensSwimRecordHolder: "Sam Askey-Doran",
    mensBikeRecord: "3:57:22",
    mensBikeRecordHolder: "Sam Laidlow",
    mensRunRecord: "2:36:15",
    mensRunRecordHolder: "Gustav Iden",

    // Individual split records for women (swim, bike, run)
    womensSwimRecord: "48:14",
    womensSwimRecordHolder: "Lucy Charles-Barclay",
    womensBikeRecord: "4:26:07",
    womensBikeRecordHolder: "Daniela Ryf",
    womensRunRecord: "2:48:23",
    womensRunRecordHolder: "Anne Haug",

    // Short description of the race vibe and experience
    description: "Sacred ground for every endurance athlete. Kailua Bay to Ali'i Drive — 140.6 miles through the birthplace of the sport. There is no race like Kona."
  },
  {
    // Basic race info
    name: "Ironman 70.3 World Championship",
    location: "Marbella, Málaga, Spain",
    country: "Spain",
    type: "Triathlon",

    // Individual discipline distances (in miles)
    swim: 1.2,
    bike: 56,
    run: 13.1,
    totalDistance: 70.3,

    // Difficulty rated 1-5 — nearly 2,000m of climbing on the bike makes this a 4
    difficulty: 4,
    bestSeason: "November",

    // 2025 World Championship winning times
    mensCourseRecord: "3:42:52",
    mensRecordHolder: "Jelle Geens",
    womensCourseRecord: "4:14:54",
    womensRecordHolder: "Lucy Charles-Barclay",

    // Individual 2025 split leaders
    mensSwimRecord: "22:21",
    mensSwimRecordHolder: "Alessio Crociani",
    mensBikeRecord: "2:08:54",
    mensBikeRecordHolder: "Rico Bogen",
    mensRunRecord: "1:07:35",
    mensRunRecordHolder: "Jelle Geens",
    womensSwimRecord: "25:05",
    womensSwimRecordHolder: "Lucy Charles-Barclay",
    womensBikeRecord: "2:28:36",
    womensBikeRecordHolder: "Taylor Knibb",

    // Short description
    description: "Sun, sea, and nearly 2,000 meters of climbing. Marbella delivered one of the closest finishes in 70.3 World Championship history — Geens beat Blummenfelt by just 3 seconds."
  },
  {
    // Basic race info
    name: "Ironman World Championship — Nice",
    location: "Nice, France",
    country: "France",
    type: "Triathlon",

    // Individual discipline distances (in miles)
    swim: 2.4,
    bike: 112,
    run: 26.2,
    totalDistance: 140.6,

    // Difficulty rated 1-5 — brutal hilly bike course on the French Riviera
    difficulty: 5,
    bestSeason: "September",

    // Men race Nice in odd years, women race Nice in even years
    mensCourseRecord: "7:51:36",
    mensRecordHolder: "Casper Stornes",
    mensRecordYear: 2025,
    mens2025Winner: "Casper Stornes",
    mens2025WinnerTime: "7:51:36",
    mens2025WinnerCountry: "Norway",
    mens2023Winner: "Sam Laidlow",
    mens2023WinnerTime: "8:06:22",
    mens2023WinnerCountry: "France",

    womensCourseRecord: "8:45:15",
    womensRecordHolder: "Laura Philipp",
    womensRecordYear: 2024,
    womens2024Winner: "Laura Philipp",
    womens2024WinnerTime: "8:45:15",
    womens2024WinnerCountry: "Germany",

    womensBikeRecord: "5:02:25",
    womensBikeRecordHolder: "Laura Philipp",
    womensRunRecord: "2:44:59",
    womensRunRecordHolder: "Laura Philipp",

    // Short description
    description: "The European edition of the Ironman World Championship on the iconic French Riviera. Men race Nice in odd years, women in even years. The hilly Alps bike course makes this one of the toughest full distance courses in the world."
  },
  {
    // Basic race info
    name: "Ironman 70.3 Oceanside",
    location: "Oceanside, California",
    country: "USA",
    type: "Triathlon",

    // Individual discipline distances (in miles)
    swim: 1.2,
    bike: 56,
    run: 13.1,
    totalDistance: 70.3,

    // Difficulty rated 1-5
    difficulty: 3,
    bestSeason: "April",

    // Course records — both set in 2026
    mensCourseRecord: "3:40:08",
    mensRecordHolder: "Kristian Blummenfelt",
    mensRecordYear: 2026,
    womensCourseRecord: "4:01:39",
    womensRecordHolder: "Taylor Knibb",
    womensRecordYear: 2026,

    // 2025 Oceanside winners
    mens2025Winner: "Lionel Sanders",
    mens2025WinnerCountry: "Canada",
    womens2025Winner: "Paula Findlay",
    womens2025WinnerCountry: "Canada",

    // Short description
    description: "The traditional season opener for pro triathletes in North America. A harbor swim in Oceanside, a hilly ride through Camp Pendleton, and a fast run through downtown. Right in Southern California's backyard."
  },
  {
    // Basic race info
    name: "Boston Marathon",
    location: "Hopkinton to Boston, Massachusetts",
    country: "USA",
    type: "Marathon",

    // Distances (in miles)
    swim: 0,
    bike: 0,
    run: 26.2,
    totalDistance: 26.2,

    // Difficulty rated 1-5
    difficulty: 4,
    bestSeason: "April",

    // Course records
    mensCourseRecord: "2:03:02",
    mensRecordHolder: "Geoffrey Mutai",
    womensCourseRecord: "2:17:22",
    womensRecordHolder: "Sharon Lokedi",

    // 2025 Boston Marathon winners
    mens2025Winner: "John Korir",
    mens2025WinnerTime: "2:04:45",
    mens2025WinnerCountry: "Kenya",
    womens2025Winner: "Sharon Lokedi",
    womens2025WinnerTime: "2:17:22",
    womens2025WinnerCountry: "Kenya",

    // Short description
    description: "Hopkinton to Boylston Street. The oldest annual marathon in the world. You don't just run Boston — you qualify for it. Heartbreak Hill has ended more dreams than it has made."
  },
  {
    // Basic race info
    name: "New York City Marathon",
    location: "Staten Island to Central Park, New York",
    country: "USA",
    type: "Marathon",

    // Distances (in miles)
    swim: 0,
    bike: 0,
    run: 26.2,
    totalDistance: 26.2,

    // Difficulty rated 1-5
    difficulty: 4,
    bestSeason: "November",

    // Course records
    mensCourseRecord: "2:04:58",
    mensRecordHolder: "Tamirat Tola",
    womensCourseRecord: "2:22:31",
    womensRecordHolder: "Margaret Okayo",

    // 2024 NYC Marathon winners
    mens2024Winner: "Abdi Nageeye",
    mens2024WinnerTime: "2:07:39",
    mens2024WinnerCountry: "Netherlands",
    womens2024Winner: "Sheila Chepkirui",
    womens2024WinnerTime: "2:24:35",
    womens2024WinnerCountry: "Kenya",

    // Short description
    description: "50,000 runners. Five boroughs. One finish line in Central Park. NYC is the biggest marathon in the world — loud, chaotic, and unforgettable from the Verrazzano Bridge to the last hill in the park."
  },
  {
    // Basic race info
    name: "Chicago Marathon",
    location: "Chicago, Illinois",
    country: "USA",
    type: "Marathon",

    // Distances (in miles)
    swim: 0,
    bike: 0,
    run: 26.2,
    totalDistance: 26.2,

    // Difficulty rated 1-5
    difficulty: 3,
    bestSeason: "October",

    // Course records — Chicago has hosted six world records
    mensCourseRecord: "2:00:35",
    mensRecordHolder: "Kelvin Kiptum",
    womensCourseRecord: "2:09:56",
    womensRecordHolder: "Ruth Chepngetich",

    // 2024 Chicago Marathon winners
    mens2024Winner: "John Korir",
    mens2024WinnerTime: "2:02:44",
    mens2024WinnerCountry: "Kenya",
    womens2024Winner: "Ruth Chepngetich",
    womens2024WinnerTime: "2:09:56",
    womens2024WinnerCountry: "Kenya",

    // Short description
    description: "The flattest and fastest of the World Marathon Majors. Chicago has hosted six world records — more than any other marathon. If you want to run fast, this is where you come."
  },
  {
    // Basic race info
    name: "London Marathon",
    location: "Greenwich to The Mall, London",
    country: "United Kingdom",
    type: "Marathon",

    // Distances (in miles)
    swim: 0,
    bike: 0,
    run: 26.2,
    totalDistance: 26.2,

    // Difficulty rated 1-5
    difficulty: 3,
    bestSeason: "April",

    // Course records
    mensCourseRecord: "2:01:25",
    mensRecordHolder: "Kelvin Kiptum",
    womensCourseRecord: "2:15:50",
    womensRecordHolder: "Tigst Assefa",

    // 2025 London Marathon winners
    mens2025Winner: "Sabastian Sawe",
    mens2025WinnerTime: "2:02:25",
    mens2025WinnerCountry: "Kenya",
    womens2025Winner: "Tigst Assefa",
    womens2025WinnerTime: "2:15:50",
    womens2025WinnerCountry: "Ethiopia",

    // Short description
    description: "From Greenwich to The Mall — London is fast, iconic, and unpredictable. Over a million spectators line the course every April. One of the greatest marathons on earth."
  },
  {
    // Basic race info
    name: "Berlin Marathon",
    location: "Berlin, Germany",
    country: "Germany",
    type: "Marathon",

    // Distances (in miles)
    swim: 0,
    bike: 0,
    run: 26.2,
    totalDistance: 26.2,

    // Difficulty rated 1-5 — flattest major marathon in the world
    difficulty: 2,
    bestSeason: "September",

    // Course records — Berlin is the fastest marathon course on earth
    mensCourseRecord: "2:01:09",
    mensRecordHolder: "Eliud Kipchoge",
    womensCourseRecord: "2:11:53",
    womensRecordHolder: "Tigist Assefa",

    // 2024 Berlin Marathon winners
    mens2024Winner: "Milkesa Mengesha",
    mens2024WinnerTime: "2:03:17",
    mens2024WinnerCountry: "Ethiopia",
    womens2024Winner: "Tigist Ketema",
    womens2024WinnerTime: "2:16:42",
    womens2024WinnerCountry: "Ethiopia",

    // Short description
    description: "The fastest marathon course on earth. Berlin has hosted 13 men's world records through the Brandenburg Gate. If you want to run the fastest time of your life, come to Berlin in September."
  },
  {
    // Basic race info
    name: "Tokyo Marathon",
    location: "Tokyo Metropolitan Government to Tokyo Station, Tokyo",
    country: "Japan",
    type: "Marathon",

    // Distances (in miles)
    swim: 0,
    bike: 0,
    run: 26.2,
    totalDistance: 26.2,

    // Difficulty rated 1-5
    difficulty: 3,
    bestSeason: "March",

    // Course records
    mensCourseRecord: "2:02:16",
    mensRecordHolder: "Benson Kipruto",
    womensCourseRecord: "2:15:55",
    womensRecordHolder: "Sutume Asefa Kebede",

    // 2025 Tokyo Marathon winners
    mens2025Winner: "Tadese Takele",
    mens2025WinnerTime: "2:03:23",
    mens2025WinnerCountry: "Ethiopia",
    womens2025Winner: "Sutume Kebede",
    womens2025WinnerTime: "2:16:31",
    womens2025WinnerCountry: "Ethiopia",

    // Short description
    description: "The first major of every year. Tokyo runs through some of the world's most iconic city streets with over 2 million spectators lining the route. Fast, organized, and unforgettable."
  },
  {
    // Basic race info
    name: "Los Angeles Marathon",
    location: "Dodger Stadium to Century City, Los Angeles",
    country: "USA",
    type: "Marathon",

    // Distances (in miles)
    swim: 0,
    bike: 0,
    run: 26.2,
    totalDistance: 26.2,

    // Difficulty rated 1-5
    difficulty: 4,
    bestSeason: "March",

    // Course records
    mensCourseRecord: "2:06:35",
    mensRecordHolder: "Markos Geneti",
    womensCourseRecord: "2:24:11",
    womensRecordHolder: "Askale Mariachi",

    // 2025 LA Marathon winners
    mens2025Winner: "Matt Richtman",
    mens2025WinnerTime: "2:07:56",
    mens2025WinnerCountry: "USA",
    womens2025Winner: "Tejinesh Gebisa Tulu",
    womens2025WinnerTime: "2:30:16",
    womens2025WinnerCountry: "Ethiopia",

    // Short description
    description: "From Dodger Stadium through Hollywood, Beverly Hills and Century City. The home race for Southern California runners. In 2025 Matt Richtman became the first American man to win it since 1994."
  },
  {
    // Basic race info
    name: "Tour de France",
    location: "Florence, Italy to Nice, France",
    country: "France",
    type: "Cycling",

    // Tour de France distances in kilometers
    swim: 0,
    bike: 3492,
    run: 0,
    totalDistance: 3492,
    distanceUnit: "km",

    // Tour specific fields
    stages: 21,
    totalElevationGainM: 52320,
    totalElevationGainFt: 171654,
    duration: "23 days",
    averageStageKm: 166,

    // Difficulty rated 1-5
    difficulty: 5,
    bestSeason: "July",

    // 2024 Tour de France winner
    mens2024Winner: "Tadej Pogačar",
    mens2024WinnerTime: "83:38:56",
    mens2024WinnerCountry: "Slovenia",
    mens2024WinnerMargin: "6:17",

    // All time Tour de France records
    mostWinsOfficial: "5 wins",
    mostWinsOfficialHolders: "Eddie Merckx, Bernard Hinault, Miguel Indurain, Jacques Anquetil",
    mostWinsStripped: "7 wins (stripped)",
    mostWinsStrippedHolder: "Lance Armstrong — stripped in 2012 for systematic doping violations",
    mostStageWins: "35 stage wins",
    mostStageWinsHolder: "Mark Cavendish",

    // Short description
    description: "3,492 km. 52,320 meters of climbing. 21 stages. 23 days. The Tour de France is the greatest and most brutal test in all of endurance sport. No other race comes close."
  },
  {
    // Basic race info
    name: "Leadville Trail 100",
    location: "Leadville, Colorado",
    country: "USA",
    type: "Ultra",

    // Distances (in miles)
    swim: 0,
    bike: 0,
    run: 100,
    totalDistance: 100,

    // Ultra specific fields
    elevationGainFt: 15744,
    elevationGainM: 4799,
    startElevationFt: 10200,
    highPointFt: 12532,
    cutoffTime: "30 hours",
    finishRate: "less than 50%",

    // Difficulty rated 1-5
    difficulty: 5,
    bestSeason: "August",

    // Course records
    mensCourseRecord: "15:26:34",
    mensRecordHolder: "David Roche",
    mensRecordYear: 2024,
    womensCourseRecord: "18:06:24",
    womensRecordHolder: "Ann Trason",
    womensRecordYear: 1994,

    // 2024 Leadville Trail 100 Run winners
    mens2024Winner: "David Roche",
    mens2024WinnerTime: "15:26:34",
    womens2024Winner: "Mary Denholm",
    womens2024WinnerTime: "18:23:51",

    // Short description
    description: "The Race Across the Sky. 100 miles through the Colorado Rockies at altitude — starting at 10,200 feet and climbing to 12,532 at Hope Pass. Less than half of starters ever finish."
  },
  {
    // Basic race info
    name: "Moab 240",
    location: "Moab, Utah",
    country: "USA",
    type: "Ultra",

    // Distances (in miles)
    swim: 0,
    bike: 0,
    run: 239.66,
    totalDistance: 239.66,

    // Ultra specific fields
    elevationGainFt: 31564,
    elevationGainM: 9621,
    startElevationFt: 3945,
    highPointFt: 10583,
    cutoffTime: "117 hours",
    finishRate: "50-60%",

    // Difficulty rated 1-5
    difficulty: 5,
    bestSeason: "October",

    // Course records
    mensCourseRecord: "55:49:58",
    mensRecordHolder: "Michael McKnight",
    mensRecordYear: 2021,
    womensCourseRecord: "57:55:13",
    womensRecordHolder: "Courtney Dauwalter",
    womensRecordYear: 2017,

    // 2025 Moab 240 winners
    mens2025Winner: "Kilian Korth",
    mens2025WinnerTime: "58:45:47",
    womens2025Winner: "Rebecca Rick",

    // Short description
    description: "240 miles through Utah's red rock desert, two mountain ranges and the canyons of Arches and Canyonlands. You run for days — not hours. One of the most remote and brutal ultras on earth."
  },
  {
    // Basic race info
    name: "Cocodona 250",
    location: "Black Canyon City to Flagstaff, Arizona",
    country: "USA",
    type: "Ultra",

    // Distances (in miles)
    swim: 0,
    bike: 0,
    run: 256,
    totalDistance: 256,

    // Ultra specific fields
    elevationGainFt: 40000,
    elevationGainM: 12200,
    startElevationFt: 1996,
    highPointFt: 9241,
    cutoffTime: "125 hours",
    firstHeld: 2021,

    // Difficulty rated 1-5
    difficulty: 5,
    bestSeason: "May",

    // Course records — both set in 2025
    mensCourseRecord: "58:47:18",
    mensRecordHolder: "Dan Green",
    mensRecordYear: 2025,
    womensCourseRecord: "63:50:55",
    womensRecordHolder: "Rachel Entrekin",
    womensRecordYear: 2025,

    // 2025 Cocodona 250 winners
    mens2025Winner: "Dan Green",
    mens2025WinnerTime: "58:47:18",
    womens2025Winner: "Rachel Entrekin",
    womens2025WinnerTime: "63:50:55",

    // Short description
    description: "256 miles point to point through the heart of Arizona. Desert, canyons, pine forests, red rock Sedona, and a final climb up Mt. Elden into Flagstaff. The most diverse 200 plus mile race in America."
  },
  {
    // Basic race info
    name: "Arizona Monster 300",
    location: "Superior to Patagonia, Arizona",
    country: "USA",
    type: "Ultra",

    // Distances (in miles)
    swim: 0,
    bike: 0,
    run: 304,
    totalDistance: 304,

    // Ultra specific fields
    elevationGainFt: 41000,
    elevationGainM: 12497,
    cutoffTime: "170 hours",
    firstHeld: 2025,
    aidStations: 19,

    // Difficulty rated 1-5
    difficulty: 5,
    bestSeason: "April",

    // Course records — inaugural 2025 race
    mensCourseRecord: "82:49:45",
    mensRecordHolder: "Michael McKnight",
    mensRecordYear: 2025,
    womensCourseRecord: "99:55:02",
    womensRecordHolder: "Selene Mallone",
    womensRecordYear: 2025,

    // 2025 Arizona Monster 300 winners
    mens2025Winner: "Michael McKnight",
    mens2025WinnerTime: "82:49:45",
    womens2025Winner: "Selene Mallone",
    womens2025WinnerTime: "99:55:02",

    // Short description
    description: "304 miles through Arizona's Sonoran desert. The newest and longest race on this list — 2025 was the inaugural year. Every runner at the start takes an oath: 'If I get lost, hurt or die, it's my own damn fault.'"
  },
];

// updates the race count bar dynamically based on how many cards are showing
function updateRaceCount(count, label) {
  const raceCountBar = document.getElementById("race-count");
  if (count === races.length) {
    raceCountBar.textContent = races.length + " Endurance Races — Triathlon · Marathon · Cycling · Ultra";
  } else {
  raceCountBar.textContent = count + " " + label;  }
}

// this function builds a visual difficulty bar based on the difficulty rating
// 1-3 = orange (manageable), 4-5 = red (brutal)
function getDifficultyBars(level) {
  let bars = "";
  let color = level <= 3 ? "#e85d04" : "#cc0000";

  for (let i = 1; i <= 5; i++) {
    if (i <= level) {
      bars += `<span style="
        display: inline-block;
        width: 18px;
        height: 8px;
        background-color: ${color};
        border-radius: 2px;
        margin-right: 3px;
      "></span>`;
    } else {
      bars += `<span style="
        display: inline-block;
        width: 18px;
        height: 8px;
        background-color: #e0e0e0;
        border-radius: 2px;
        margin-right: 3px;
      "></span>`;
    }
  }
  return bars;
}

// this function adds cards to the page to display the data in the array
function showCards() {
  const cardContainer = document.getElementById("card-container");
  cardContainer.innerHTML = "";
  const templateCard = document.querySelector(".card");

  // loop through every race in our races array
  for (let i = 0; i < races.length; i++) {
    let race = races[i];
    const nextCard = templateCard.cloneNode(true);
    editCardContent(nextCard, race);
    cardContainer.appendChild(nextCard);
  }

  // update the race count bar
  updateRaceCount(races.length, "Races");
}

function editCardContent(card, race) {
  // make the card visible
  card.style.display = "block";

  // set race type class for color coding
  card.className = "card type-" + race.type.toLowerCase();

  // set the race name as the card title
  const cardHeader = card.querySelector("h2");
  cardHeader.textContent = race.name;

  // hide the image since we are using data instead
  const cardImage = card.querySelector("img");
  cardImage.style.display = "none";

  // find the list inside the card and fill it with race data
  const cardList = card.querySelector("ul");
  cardList.innerHTML = `
    <li>📍 ${race.location}</li>
    <li>🏁 Type: ${race.type}</li>
    <li>📏 Total Distance: ${race.totalDistance} ${race.distanceUnit ? race.distanceUnit : "miles"}</li>
    <li>💪 Difficulty: ${getDifficultyBars(race.difficulty)}</li>
    <li>📅 Best Season: ${race.bestSeason}</li>
    ${race.mensCourseRecord ? `<li>🏆 Men's Record: ${race.mensCourseRecord} — ${race.mensRecordHolder}</li>` : ""}
    ${race.womensCourseRecord ? `<li>🏆 Women's Record: ${race.womensCourseRecord} — ${race.womensRecordHolder}</li>` : ""}
    <li>📝 ${race.description}</li>
  `;

  // add the calendar button to each card
  const calendarBtn = document.createElement("button");
  calendarBtn.textContent = "+ Add to Calendar";
  calendarBtn.className = "add-to-calendar-btn";
  calendarBtn.onclick = function() {
    addToCalendar(race);
  };
  card.querySelector(".card-content").appendChild(calendarBtn);

  // log to console so we can verify each card is being built
  console.log("Card created for:", race.name);
}

// this calls showCards() when the page first loads
document.addEventListener("DOMContentLoaded", function() {
  showCards();
  // set All button as active on page load
  const allButton = document.querySelector("#filter-container button");
  if (allButton) {
    allButton.classList.add("active");
  }
});

function quoteAlert() {
  console.log("Button Clicked!");
  alert("I guess I can kiss heaven goodbye, because it got to be a sin to look this good!");
}

function removeLastCard() {
  races.pop();
  showCards();
}

function filterRaces(type) {
  // update active button state
  const buttons = document.querySelectorAll("#filter-container button");
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].classList.remove("active");
    if (buttons[i].textContent.toUpperCase() === type.toUpperCase() ||
       (type === "All" && buttons[i].textContent === "All")) {
      buttons[i].classList.add("active");
    }
  }

  // if All is selected show every race
  if (type === "All") {
    showCards();
    return;
  }

  // clear the card container
  const cardContainer = document.getElementById("card-container");
  cardContainer.innerHTML = "";
  const templateCard = document.querySelector(".card");

  // loop through all races and only show ones that match the selected type
  for (let i = 0; i < races.length; i++) {
    let race = races[i];

    // only build a card if the race type matches what was clicked
    if (race.type === type) {
      const nextCard = templateCard.cloneNode(true);
      editCardContent(nextCard, race);
      cardContainer.appendChild(nextCard);
    }
  }

  // update the race count bar
  updateRaceCount(
    document.getElementById("card-container").children.length,
    type + " Races"
  );
}

function searchRaces() {
  // grab what the user typed and convert to lowercase
  const searchInput = document.getElementById("search-bar").value.toLowerCase();

  // clear the card container
  const cardContainer = document.getElementById("card-container");
  cardContainer.innerHTML = "";
  const templateCard = document.querySelector(".card");

  // loop through all races and check if they match the search
  for (let i = 0; i < races.length; i++) {
    let race = races[i];

    // convert race name and location to lowercase so search is not case sensitive
    const raceName = race.name.toLowerCase();
    const raceLocation = race.location.toLowerCase();

    // if the search input matches the name or location show the card
    if (raceName.includes(searchInput) || raceLocation.includes(searchInput)) {
      const nextCard = templateCard.cloneNode(true);
      editCardContent(nextCard, race);
      cardContainer.appendChild(nextCard);
    }
  }

  // update the race count bar
  updateRaceCount(
    document.getElementById("card-container").children.length,
    "Races"
  );
}

function sortRaces(value) {
  // make a copy of the races array so we don't change the original
  let sortedRaces = [...races];

  // sort based on what the user selected
  if (value === "easiest") {
    sortedRaces.sort((a, b) => a.difficulty - b.difficulty);
  } else if (value === "hardest") {
    sortedRaces.sort((a, b) => b.difficulty - a.difficulty);
  } else {
    showCards();
    return;
  }

  // clear the card container
  const cardContainer = document.getElementById("card-container");
  cardContainer.innerHTML = "";
  const templateCard = document.querySelector(".card");

  // loop through the sorted races and build cards
  for (let i = 0; i < sortedRaces.length; i++) {
    let race = sortedRaces[i];
    const nextCard = templateCard.cloneNode(true);
    editCardContent(nextCard, race);
    cardContainer.appendChild(nextCard);
  }
}

// array to store races added to the calendar
let myCalendar = [];

function addToCalendar(race) {
  // check if race is already in the calendar
  for (let i = 0; i < myCalendar.length; i++) {
    if (myCalendar[i].name === race.name) {
      alert(race.name + " is already in your calendar!");
      return;
    }
  }

  // add the race to the calendar array
  myCalendar.push(race);

  // refresh the calendar display
  renderCalendar();
}

function renderCalendar() {
  const container = document.getElementById("calendar-container");
  const raceCountSelected = document.getElementById("race-count-selected");
  const totalDistanceSelected = document.getElementById("total-distance-selected");

  // if no races selected show empty message
  if (myCalendar.length === 0) {
    container.innerHTML = '<p id="calendar-empty-message">Click "Add to Calendar" on any race card to start building your race calendar.</p>';
    raceCountSelected.textContent = "0 races selected";
    totalDistanceSelected.textContent = "0 miles total";
    return;
  }

  // sort calendar by best season month order
  const monthOrder = {
    "January": 1, "February": 2, "March": 3,
    "April": 4, "May": 5, "June": 6,
    "July": 7, "August": 8, "September": 9,
    "October": 10, "November": 11, "December": 12
  };

  let sorted = [...myCalendar].sort((a, b) => {
    return (monthOrder[a.bestSeason] || 13) - (monthOrder[b.bestSeason] || 13);
  });

  // calculate total distance
  let totalDistance = 0;
  for (let i = 0; i < myCalendar.length; i++) {
    totalDistance += myCalendar[i].totalDistance;
  }

  // update stats
  raceCountSelected.textContent = myCalendar.length + " race" + (myCalendar.length > 1 ? "s" : "") + " selected";
  totalDistanceSelected.textContent = totalDistance.toFixed(1) + " miles total";

  // build the calendar cards
  let html = "";
  for (let i = 0; i < sorted.length; i++) {
    let race = sorted[i];
    html += `
      <div class="calendar-card">
        <div class="calendar-month">${race.bestSeason}</div>
        <div class="calendar-race-name">${race.name}</div>
        <div class="calendar-race-location">📍 ${race.location}</div>
        <div class="calendar-race-distance">📏 ${race.totalDistance} ${race.distanceUnit ? race.distanceUnit : "miles"}</div>
        <div class="calendar-race-type type-badge-${race.type.toLowerCase()}">${race.type}</div>
        <button class="remove-from-calendar-btn" onclick="removeFromCalendar('${race.name}')">✕ Remove</button>
      </div>
    `;
  }

  container.innerHTML = html;
}

function removeFromCalendar(raceName) {
  // filter out the race that was removed
  myCalendar = myCalendar.filter(function(race) {
    return race.name !== raceName;
  });

  // refresh the calendar
  renderCalendar();
}

function clearCalendar() {
  // empty the calendar array
  myCalendar = [];

  // refresh the calendar
  renderCalendar();
}
