import React, { useState } from "react";
import NavBar from "../../../Components/Navbar";
import Footer from "../../../Components/Footer";
import "./FranceEuropePackage.css";
import Images from "./ranceEuropeImage";
import Form from "./FrnaceEuropeForm";

const FrancePackage = () => {
  const inclusions = [
    "Europamundo General Services: Travel by bus with English speaking guide, basic travel insurance, hotel and breakfast buffet.",
    "Includes arrival transfer",
    "City tour in: PARIS, ROME, FLORENCE, VENICE",
    "Excursion: Versailles in Paris (entrance not included)",
    "Boat: River Seine in Paris, Zurich lake, to the island of Venice",
    "Evening transfer: Trastevere in Rome",
    "Transfer: Montmartre District in Paris, Versailles Palace in Paris (entrance not included), Piazzale Michelangelo in Florence",
    "Ticket admission: 2nd Floor Eiffel Tower in Paris, Imperial Forums of Rome, Saint Mark´s Basilica and Murano Glass Factory in Venice",
    "Train: Rapperswil / Zurich, Piazza dei Miracoli in Pisa",
    "Funicular: To Montmartre district in Paris, Lyon, Cable Car to Grindelwald First",
    "1 Lunch Included in: LUCERNE"
  ];

  const exclusions = [
    "Government Service Tax 5% and TCS 5% as applicable",
    "Any items of personal nature viz. telephone, beverages, laundry, Tips gratuities etc and other things not mentioned in our itinerary.",
    "Any other service or meal which is not mentioned in above inclusions.",
    "Costs of meals on internal domestic flights are not included in the tour price.",
    "Cost of excursions, sightseeing tours, entrance fees and local guides availed of by the passengers, other than what is mentioned in the package inclusions"
  ];
  const paymentPolicy = [
    "Booking Fee",
    "30 or more days before departure: 50%",
    "Between 29 to 1 days before departure: 100%"
  ];

  const cancellationPolicy = [
    "Cancellation charges per person",
    "30 or more days before departure: 50%",
    "Between 29 to 1 days before departure: 100%"
  ];

  const detailedItinerary = [
    "Day 1 - Arrival In Paris",
    "Upon arriving at the airport, we will be waiting to transfer you to your hotel. Check the information boards in the hotel reception area for details of the welcome meeting with your guide and fellow travelers.",
    "Day 2 - Paris",
    "TODAY’S HIGHLIGHTS: Transfer to Versailles Palace. Funicular ride included to Montmartre district. City tour in Paris. Early in the morning, we will leave for Versailles, the immense palace of the kings of France. After that, we will return to Paris at lunchtime where we provide a transfer to the Montmartre district. We will ascend by funicular to the hill and admire the spectacular view of Paris from the top. This neighborhood is known for its painters, artists, and its cabarets… Sit down for lunch and enjoy a magical atmosphere. Then, a scenic guided tour to discover the history, main boulevards, and the breathtaking monuments of Paris will take place. Return to the hotel. Optionally you can attend a variety show.",
    "Day 3 - Paris - Eiffel Tower and boat cruise",
    "TODAY’S HIGHLIGHTS: Eiffel Tower and boat cruise in the City of Lights. We go to the center of Paris, starting by the Eiffel Tower area. You will have the opportunity to go up to the second floor of this remarkable metal monument (ticket included). Then, we enjoy a boat cruise along the River Seine, which divides the north of Paris from the south. Enjoy a free afternoon to explore as you choose.",
    "Day 4 - Paris - Semur En Auxois - Beaune - Lyon",
    "TODAY’S HIGHLIGHTS: Vineyards in Beaune and Bourgogne region. Funicular ride in Lyon. Today we travel to the center of France, to the Bourgogne region, famous for its wines. Making a stop in SEMUR EN AUXOIS, a small medieval town listed surrounded by impressive walls. After this, we will visit BEAUNE, located in the center of the Bourgogne region, with its streets full of flowers, hospice and wine museum all points of interest. Continuing on, we will arrive in LYON in the mid-afternoon, the capital of Roman Gallia on the banks of the Rhône (its historic center has been declared a World Heritage site). We include a funicular climb to Notre Dame de Fourvière where we have a great view of the city. Enjoy some leisure time to walk around. Part of the groups will be accommodated in Chambery, a city near Lyon. In these cases, we will leave at the end of the afternoon for CHAMBERY and accommodation. We will then have some time early in the morning to visit the capital of Savoy, a medieval-style city with beautiful historic center and a large castle.",
    "Day 5 - Lyon - Geneva - Zurich",
    "TODAY´S HIGHLIGHTS: Scenic tour around the lakes and vineyards of Switzerland. A beautiful stage awaits us as we set off for Switzerland. Arrival in GENEVA. The guide will take us to the Palais des Nations (the European headquarters of the United Nations), the beautiful “Jardin Anglais” (with its quaint flower clock), and the “Jet d´Eau”, the tallest fountain in Europe. After lunch, we will continue traveling through Switzerland by the beautiful Leman and Neuchatel lakes. We will drive the scenic road alongside the three large lakes, with their magnificent vineyards overlooking the mountains. We will stop in NEUCHATEL, where you can enjoy a walk by the lake, the historic town center or visit its beautiful, 10th century castle. We will then head to ZURICH. Arrival in the late afternoon. Note: depending on the number of passengers traveling from Geneva to Zürich, this part of the trip might be done by train - in which case, there will be no stop in Neuchatel.",
    "Day 6 - Zurich",
    "TODAY’S HIGHLIGHT: Zurich. Cruise on Lake Zurich. Train. With our guide, we will have a tour of ZURICH, the most populated city of Switzerland, and the country’s financial and cultural capital. The city of the banks has twice been declared the city with the best quality of life in the world. Afterwards, we will include a cruise of almost two hours on Lake Zürich. The boat makes brief stops to allow us to see the villages on the way. We get off in RAPPERSWILL, a picturesque little village overlooked by its mediaeval castle. We go back to Zurich by train and appreciate the efficiency and punctuality of the Swiss railways. Note: Depending on the number of travelers, the transfers to the center and from the station may be made on public transport.",
    "Day 7 - Zurich - Lucerne - Zurich",
    "TODAY´S HIGHLIGHTS: Admire the fantastic landscapes. Cable car included to Grindelwald. Lunch included. Today´s journey has beautiful landscapes with high mountains and lakes. Breathtaking scenery in the region of Interlaken. We will stop in GRINDELWALD where we will have time for a coffee before taking the cable car up to the mountain. We will walk along the winding path which will lead us to the suspended bridge. Dare to walk across the bridge amongst the fantastic scenery enjoying glaciers all around us. We will have lunch up in the mountain (included) before heading back down. We continue to LUCERNE, one of the most beautiful cities in Switzerland. In the evening we have time to stroll around, enjoying the city and to have dinner before returning to the hotel in Zurich. Note: The guide will offer you the possibility of a full day optional visit, leaving in the morning and, after some free time to discover Lucerne, we take a rotating cable car to reach the top of Mount Titlis. At the alpine summit, at over 3000m above sea level, you will enjoy breathtaking views of the glacier and the Alps.",
    "Day 8 - Zurich - Lugano - Morcote - Milan",
    "TODAY´S HIGHLIGHTS: Spectacular alpine landscapes, quaint villages and lakes. We will leave Zurich early in the morning and cut across the Alps to reach the Italian-speaking part of Switzerland. Alongside the route, we will get to see beautiful lakes and snow-capped mountains. LUGANO. Arrival in the cosmopolitan capital of Italian Switzerland built next to its beautiful lake. Time to have a stroll and grab lunch. Next, we will reach the enchanting little town of MORCOTE famous for its flowery stone houses. We will then travel to Italy. Arrival in MILAN where the guide will take us to the impressive Duomo Square. Here you will find a variety of local and international restaurants to have dinner at. Transfer to the hotel.",
    "Day 9 - Milan - Pisa - Rome",
    "TODAY’S HIGHLIGHTS: Coast of Liguria, Leaning Tower of Pisa. Today we continue our journey towards PISA. On a little tourist train, we will travel to the Piazza Dei Miracoli (Square of Miracles), where there will be time to admire one of the most alluring and beautiful art complexes in Italy, including the well-known Leaning Tower of Pisa. Then, we continue to ROME, arriving at the end of the day.",
    "Day 10 - Rome",
    "TODAY’S HIGHLIGHTS: City tour of Rome. Imperial Forums (admission price included). Evening transfer to the Trastevere area. In the morning, we have a scenic tour, which will be a great introduction to “The Eternal city”. We will visit the tiny state of the Vatican, the epicenter of Christianity in the world. You will be able to visit St. Peter’s Basilica. We include the entrance to the Imperial Forums, an impressive architectural complex formed by monumental buildings and squares, the center of the political activity of Imperial Rome. At the end of the evening, we arrange a transfer to the Trastevere area for a stroll in the narrow cobbled streets of the district with hidden treasures, such as some modest medieval churches, small shops with the most peculiar objects, or scenes of daily life. Many trattorias (informal Italian eating establishments) and osterias (inns) imbued with the Italian spirit will be ready to serve you local dishes. Other restaurants serving Indian, Chinese, and international food can be found in this area. Return to the hotel. Note: on many occasions during the low season, as well as in some specific dates of the rest of the year, instead of the entrance to the Imperial Forums, we will enter the Roman Colosseum, the symbol of Rome.",
    "Day 11 - Rome - Florence",
    "TODAY’S HIGHLIGHTS: Tour with a local expert from Florence. View from Piazzale Michelangelo. Today we will leave Rome, heading north. This route has beautiful landscapes. Arriving in FLORENCE, we head straight to the impressive Piazzale Michelangelo. In the evening we take a tour with a local expert, walking through the historic center, taking in places such as the Ponte Vecchio, the Duomo, and Plaza della Signoria. This city is truly an outdoor museum. Enjoy some leisure time to explore. In the evening you will have time for dinner, as, in this district, you can find many restaurants serving international cuisine.",
    "Day 12 - Florence - Venice",
    "TODAY’S HIGHLIGHTS: Boat on Venice’s Canal. Visit and admission to St. Mark´s Basilica. Admire the technique of crafting Murano Glass. Today we enjoy stunning mountain landscapes while crossing the Apennine Mountains. We will arrive in VENICE and take the boat and cross the Giudecca to the Island of Venice. With a local guide, we will visit the marvelous St. Mark´s Square and enter the Basilica (entrance included). Afterwards, we will visit the Murano Glass Factory. It is fascinating to see the technique of how this ancient glass is made. Enjoy some time at leisure to explore. Accommodation in the Mestre district.",
    "Day 13 - Departure",
    "After breakfast, end of our services."
  ];

  const aboutDestination = [
    {
      image:
        "https://cdn.pixabay.com/photo/2019/11/19/07/50/bridge-4636745_1280.jpg",
      name: "Zurich",
      description:
        "Set amidst the abundance of nature with enthralling lake views bordered by the magnificent Alps, Zurich appears to be the ideal haven for a travel fanatic. Be it culture, fashion, economy or architecture; this Swiss city promises to provide you with the best of all. The city is deemed to be the most efficient and culturally vibrant metropolis of Europe. It accommodates infinite avenues to explore, ranging from ancient buildings to modern technological hubs. Zurich is the abode of multitudes of international fashion brands and designs, which legitimately turn it into a shopper’s paradise. It is also the financial center of the country and proudly holds the privilege of being the most competitive economy in Europe. A visible evidence of this is the presence of the Swiss Stock Exchange. Needless to say, the quality of life in this city is at its searing heights. It is noteworthy that Zurich is the headquarter of FIFA and also houses some of the world-class universities. The city of Zurich offers a peculiar melange of attractions – from opera houses and art galleries to an extravagant nightlife in the shimmering clubs and bars that are scattered across the city. For those who are fond of trekking, there is the scenic Uetliberg Mountain which is the perfect hiking destination. Other recreational activities include swimming and boat rides in Lake Zurich and the nearby riverside areas."
    },
    {
      image:
        "https://cdn.pixabay.com/photo/2020/07/12/16/40/paris-5397889_1280.jpg",
      name: "Paris",
      description:
        "Paris is not just the capital of France; it’s the capital of fashion and the city of love. Located by the River Seine in the north of France, Paris is reputed for being the most beautiful and romantic city in the world. It is overwhelmed with culture, history, iconic architecture, arty treasures, delicious food and exciting fashion. Europe’s most enchanting city, Paris is known for its many monuments, especially the Eiffel Tower, Notre-Dame Cathedral, Arc de Triomphe, Opéra Garnier, Les Invalides, etc. Paris was home to some of the best artists through history; hence, it harbors treasures and antiques from the masters like Picasso, Van Gogh, Monet, Dalí, and Renoir. Paris (and the whole of France) is famous for its food and drinks; from cozy little cafes to one of its many Michelin-starred restaurants – the food is prepared and presented with perfection here. Whether you’re a first-timer or regular visitor, Paris always seems magical as there are so many places to explore. It’s no wonder that the city is one of the most popular tourist destinations in the world and welcomes over 45 million visitors every year."
      // Add other details specific to Paris
    },
    {
      image:
        "https://cdn.pixabay.com/photo/2017/03/04/07/00/lucerne-2115566_1280.jpg",
      name: "Lucerne",
      description:
        "Lucerne is a small, but popular town located in central Switzerland. The city lies at the north end of Lake Lucerne, the fourth largest lake in the country. This sapphire lake is strangely shaped, with bends and arms and is surrounded by mountains that tell tales. Lucerne was even popular in the 19th century, and it still has a well-preserved medieval town. The views of Europe’s oldest enclosed bridges, rainbow-coloured houses, sunlit plazas and waterfront paths will make you wish you lived there. Though the city has a historical feel to it, its concert halls (especially the Kultur und Kongresszentrum), museums and carnivals give Lucerne a fresh vibe. Some of the major sightseeing spots are Kapellbrücke (Chapel Bridge), Old Town, Spreuerbrücke, Museum Sammlung Rosengart, Hofkirche, Verkehrshaus der Schweiz, Jesuit Church, Löwendenkmal and the Gletschergarten (Glacier Garden). The city is known for its love for music and literature. Thus, there are numerous festivals and events to entertain the locals and tourists. Lucerne is the perfect starting point to explore the best of Central Switzerland and sites like the Rütli Meadow, Mt. Pilatus"
    },
    {
      image:
        "https://cdn.pixabay.com/photo/2021/11/24/10/25/town-6820819_1280.jpg",
      name: "Lyon",
      description:
        "Lyon is a small, but popular town located in central Switzerland. The city lies at the north end of Lake Lucerne, the fourth largest lake in the country. This sapphire lake is strangely shaped, with bends and arms and is surrounded by mountains that tell tales. Lucerne was even popular in the 19th century, and it still has a well-preserved medieval town. The views of Europe’s oldest enclosed bridges, rainbow-coloured houses, sunlit plazas and waterfront paths will make you wish you lived there. Though the city has a historical feel to it, its concert halls (especially the Kultur und Kongresszentrum), museums and carnivals give Lucerne a fresh vibe. Some of the major sightseeing spots are Kapellbrücke (Chapel Bridge), Old Town, Spreuerbrücke, Museum Sammlung Rosengart, Hofkirche, Verkehrshaus der Schweiz, Jesuit Church, Löwendenkmal and the Gletschergarten (Glacier Garden). The city is known for its love for music and literature. Thus, there are numerous festivals and events to entertain the locals and tourists. Lucerne is the perfect starting point to explore the best of Central Switzerland and sites like the Rütli Meadow, Mt. Pilatus"
    },
    {
      image:
        "https://cdn.pixabay.com/photo/2016/08/21/17/52/bridge-1610395_1280.jpg",
      name: "Venice",
      description:
        "Venice is a small, but popular town located in central Switzerland. The city lies at the north end of Lake Lucerne, the fourth largest lake in the country. This sapphire lake is strangely shaped, with bends and arms and is surrounded by mountains that tell tales. Lucerne was even popular in the 19th century, and it still has a well-preserved medieval town. The views of Europe’s oldest enclosed bridges, rainbow-coloured houses, sunlit plazas and waterfront paths will make you wish you lived there. Though the city has a historical feel to it, its concert halls (especially the Kultur und Kongresszentrum), museums and carnivals give Lucerne a fresh vibe. Some of the major sightseeing spots are Kapellbrücke (Chapel Bridge), Old Town, Spreuerbrücke, Museum Sammlung Rosengart, Hofkirche, Verkehrshaus der Schweiz, Jesuit Church, Löwendenkmal and the Gletschergarten (Glacier Garden). The city is known for its love for music and literature. Thus, there are numerous festivals and events to entertain the locals and tourists. Lucerne is the perfect starting point to explore the best of Central Switzerland and sites like the Rütli Meadow, Mt. Pilatus"
    }
    // Add more destinations as needed
  ];

  const [showInclusions, setShowInclusions] = useState(false);
  const [showExclusions, setShowExclusions] = useState(false);
  const [showPaymentPolicy, setShowPaymentPolicy] = useState(false);
  const [showCancellationPolicy, setShowCancellationPolicy] = useState(false);
  const [showTermsAndConditions, setShowTermsAndConditions] = useState(false);
  const [showDetailedItinerary, setShowDetailedItinerary] = useState(false);
  const [showAboutDestination, setShowAboutDestination] = useState(false);
  const [selectedDestination, setSelectedDestination] = useState(null);

  const handleToggle = (stateSetter) => {
    stateSetter((prev) => !prev);
  };

  const handlePayment = (tourPackage) => {
    console.log(`Processing payment for ${tourPackage.name}`);
    // Implement your payment logic or redirection here
  };

  const handleDestinationClick = (destination) => {
    setSelectedDestination(destination);
  };

  return (
    <div className="paris-container">
      <NavBar />

      <img
        src="https://cdn.pixabay.com/photo/2018/10/08/17/52/venice-3733156_1280.jpg"
        alt="head"
      />
      <h1 className="trip-head">Harmonious Europe</h1>
      <p className="trip-description">
        Start your post-wedding love with this fully customizable 12 nights
        Europe package from Delhi, Mumbai, Chennai and other major cities of
        India. Your europe tour starts with romantic Paris, covering tourist
        hotspots in Switzerland before culminating in France including a visit
        to the iconic Eiffel Tower in Paris.
        <Images />
      </p>
      <div className="paris-container-items">
        <div className="inclusions-exclusions">
          <div>
            <h3>
              Inclusions{" "}
              <button
                className="show-more-less"
                onClick={() => handleToggle(setShowInclusions)}
              >
                {showInclusions ? "–" : "+"}
              </button>
            </h3>
            {showInclusions && (
              <ul>
                {inclusions.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            )}
          </div>
          <div className="exclusions-section">
            <h3>
              Exclusions{" "}
              <button
                className="show-more-less"
                onClick={() => handleToggle(setShowExclusions)}
              >
                {showExclusions ? "–" : "+"}
              </button>
            </h3>
            {showExclusions && (
              <ul>
                {exclusions.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            )}
          </div>

          {/* Similar logic for other sections */}
        </div>

        <div className="payment-policy">
          <h3>
            Payment Policy{" "}
            <button
              className="show-more-less"
              onClick={() => handleToggle(setShowPaymentPolicy)}
            >
              {showPaymentPolicy ? "–" : "+"}
            </button>
          </h3>
          {showPaymentPolicy && (
            <ul>
              {paymentPolicy.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          )}
          <div>
            <h3>
              Cancellation Policy {/* Fix the typo here */}
              <button
                className="show-more-less"
                onClick={() => handleToggle(setShowCancellationPolicy)}
              >
                {showCancellationPolicy ? "–" : "+"}{" "}
                {/* Fix the state reference here */}
              </button>
            </h3>
            {showCancellationPolicy && (
              <ul>
                {cancellationPolicy.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            )}
          </div>
        </div>

        {/* ... (other sections) */}

        <div className="detailed-itinerary">
          <h3>
            Detailed Day Wise Itinerary{" "}
            <button
              className="show-more-less"
              onClick={() => handleToggle(setShowDetailedItinerary)}
            >
              {showDetailedItinerary ? "–" : "+"}
            </button>
          </h3>
          {showDetailedItinerary && (
            <ul>
              {detailedItinerary.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          )}
          <div>
            <h3>
              About Destination{" "}
              <button
                className="show-more-less"
                onClick={() => handleToggle(setShowAboutDestination)}
              >
                {showAboutDestination ? "–" : "+"}
              </button>
            </h3>
            {showAboutDestination && (
              <div>
                <div>
                  {aboutDestination.map((destination) => (
                    <span key={destination.name}>
                      <button
                        className="about-destination-button"
                        onClick={() => handleDestinationClick(destination)}
                      >
                        {destination.name}
                      </button>
                    </span>
                  ))}
                </div>
                {selectedDestination && (
                  <div class="about-destination">
                    <span>
                      <h4 className="about-destination-name">
                        {selectedDestination.name}
                      </h4>
                    </span>
                    <div>
                      <img
                        src={selectedDestination.image}
                        alt="Destination Image"
                      />
                      <span className="about-destination-paragraph">
                        {selectedDestination.description}
                      </span>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
      <Form />
      <Footer />
    </div>
  );
};
export default FrancePackage;
