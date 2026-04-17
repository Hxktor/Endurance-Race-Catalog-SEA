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
    description:"Sacred ground for every endurance athlete. Kailua Bay to Ali'i Drive — 140.6 miles through the birthplace of the sport. There is no race like Kona."
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
    name: "Boston Marathon",
    location: "Hopkinton to Boston, Massachusetts",
    country: "USA",
    type: "Marathon",

    // Distances (in miles)
    swim: 0,
    bike: 0,
    run: 26.2,
    totalDistance: 26.2,

    // Difficulty rated 1-5 — Heartbreak Hill and no pacers make this a 4
    difficulty: 4,
    bestSeason: "April",

    // Course records — Boston is point-to-point so times are not world record eligible
    // but these are the fastest times ever run on the Boston course
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

    // Difficulty rated 1-5 — rolling hills through 5 boroughs, no pacers, massive field
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

    // Difficulty rated 1-5 — flat course, fast times, but 26.2 miles is always hard
    difficulty: 3,
    bestSeason: "October",

    // Course records — Chicago is one of the fastest marathon courses in the world
    // and has hosted 7 world records
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
    description: "The flattest and fastest of the World Marathon Majors. Chicago has hosted more world records than any other marathon. If you want to run fast, this is where you come."
  },
];

// Your final submission should have much more data than this, and
// you should use more than just an array of strings to store it all.

// This function adds cards the page to display the data in the array
function showCards() {
  const cardContainer = document.getElementById("card-container");
  cardContainer.innerHTML = "";
  const templateCard = document.querySelector(".card");

  for (let i = 0; i < titles.length; i++) {
    let title = titles[i];

    // This part of the code doesn't scale very well! After you add your
    // own data, you'll need to do something totally different here.
    let imageURL = "";
    if (i == 0) {
      imageURL = FRESH_PRINCE_URL;
    } else if (i == 1) {
      imageURL = CURB_POSTER_URL;
    } else if (i == 2) {
      imageURL = EAST_LOS_HIGH_POSTER_URL;
    }

    const nextCard = templateCard.cloneNode(true); // Copy the template card
    editCardContent(nextCard, title, imageURL); // Edit title and image
    cardContainer.appendChild(nextCard); // Add new card to the container
  }
}

function editCardContent(card, newTitle, newImageURL) {
  card.style.display = "block";

  const cardHeader = card.querySelector("h2");
  cardHeader.textContent = newTitle;

  const cardImage = card.querySelector("img");
  cardImage.src = newImageURL;
  cardImage.alt = newTitle + " Poster";

  // You can use console.log to help you debug!
  // View the output by right clicking on your website,
  // select "Inspect", then click on the "Console" tab
  console.log("new card:", newTitle, "- html: ", card);
}

// This calls the addCards() function when the page is first loaded
document.addEventListener("DOMContentLoaded", showCards);

function quoteAlert() {
  console.log("Button Clicked!");
  alert(
    "I guess I can kiss heaven goodbye, because it got to be a sin to look this good!",
  );
}

function removeLastCard() {
  titles.pop(); // Remove last item in titles array
  showCards(); // Call showCards again to refresh
}
