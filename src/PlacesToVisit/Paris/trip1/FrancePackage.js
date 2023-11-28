import React, { useState } from "react";
import NavBar from "../../../Components/Navbar";
import Footer from "../../../Components/Footer";
import "./FrancePackage.css";
import Images from "./Image";
import Form from "./Form";

const FrancePackage = () => {
  const inclusions = [
    "Welcome drink on arrival",
    "Wi-Fi",
    "Parking and Toll tax",
    "Meet & greet at arrival",
    "Sightseeing in shared vehicle",
    "Driver's allowance, Road tax and Fuel charges",
    "Tea/Coffee Kettle in the Room",
    "Breakfast",
    "Cruise",
    "Train",
    "04 Days Swiss Pass 02nd Class",
    "All tours and transfers by Shared Car is included"
  ];

  const exclusions = [
    "Camera fee",
    "Alcoholic / Non-Alcoholic beverages",
    "Travel insurance",
    "5% GST",
    "Any Airfare / Train fare",
    "Expenses caused by factors beyond our control like rail and flight delays, roadblocks, vehicle mal-functions, political disturbances etc.",
    "Tips, laundry & phone call",
    "Entrance fees to monuments and museum",
    "All personal expenses",
    "TCS 05 %"
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
    "Day 1",
    "Welcome to Zurich",
    "Welcome to Zurich- the most beautiful city in the world! It is famous for Scenic ambience, a place where Traditionalism & urban Modernization mingle. Note: If flight arrival is after 2000 Hours, you will be provided with Packed eatables.",

    "Day 2",
    "Optional Tour for Rhine Falls",
    "The Rhine Falls is a waterfall located in Switzerland and the most powerful waterfall in Europe. The falls are located on the High Rhine on the border between the cantons of Schaffhausen and Zurich. This is an Optional tour after returning to the hotel overnight stay in Zurich.",

    "Day 3",
    "Lucerne Sightseeing",
    "Leave behind Interlaken to experience another marvel of Switzerland - the mesmerizing city of Lucerne and explore the city at your own pace. Wake up to a day at your disposal and begin by enjoying a refreshing breakfast. Prepare to leave Interlaken and don't miss the opportunity to stop by at the Ballenberg open museum. Another option would be to go for a boat trip on Lake Thun, where you can cherish pure bliss in the company of your dearest. Reach the Interlaken train station and once again set off on a 2.5-hour train journey to Lucerne. On reaching Lucerne, proceed for a check-in at your hotel. Shed off the load and exploit the rest of the day as per your wish. You could pay a visit to the Chapel Bridge or the Lion Monument. Shopaholics can here shop for the signature Swiss products ranging from watches to chocolates etc. If the desire to do something adventurous strikes, enter the bedazzling nightlife in Lucerne by visiting a club before returning to the hotel. Distance from Interlaken to Lucerne: 68.2 km Travel time: 2.5 hours",

    "Day 4",
    "Lucerne: A day at Mt Titlis",
    "As you spend your second day in Lucerne, get ready to live the precious moments of being at Mt Titlis in person. Feel the chill of a European morning along with your better half and fill yourself with a delightful breakfast. On this day, you are booked for a visit to the mesmerizing Mt Titlis. Seat yourself in the first-ever revolving gondola to Mt Titlis and leave the rest to the mesmerizing sceneries. From Lucerne, take the LSE train to Engelberg and shift to a small gondola all the way up to the Trubsee. Another gondola would take you up till Stand before finally dropping you to Mt Titlis. Witness the grandeur of the Swiss mountains like never before and set free your curious souls. Visit the glacier cave and the Ice Flyer Chairlift and relish Indian or Continental food at the restaurant on top for a lunch-date to remember. Prepare to extract yourself from this beauty, for now, it is time to return to Lucerne. Drift into the world of dreams with your delightful experience of the day. Tip: Don't forget to carry your sunscreen. The sun in the Alps can get very warm, giving you a harsh tan.",

    "Day 5",
    "Lucerne to Paris By Train",
    "After Breakfast get ready for Paris. The fastest trains from Lucerne to Paris take around 4 hours and 35 minutes, covering a distance of approximately 489 kilometers. Landing Paris Overnight Stay in Paris.",

    "Day 6",
    "Paris: Sightseeing in Paris",
    "Wake up early morning to rejoice your last morning in Switzerland since today you will be moving to the city of lights and love - Paris. Check out from the hotel and proceed to the Zurich train station to board the train for Paris. After reaching the hotel, prepare to leave for a visit to the majestic Eiffel Tower and take your time admiring it inside out. Just when you thought your purpose in visiting Paris has been fulfilled, undertake the lovely river cruise on River Seine followed by an enchanting Illumination Tour. Blown away by the beauty of the city, return to your hotel and enjoy your overnight stay in comfort. Distance from Zurich to Paris: 654.2 km Travel Time: 5 hours approx",

    "Day 7",
    "Paris: Disneyland in Paris",
    "Enjoy your Parisian breakfast and stay prepared for a thrilling day at Disneyland. An entertainment resort housing 1 theme parks, hotels, and shopping centers -- Disneyland entertains kids and adults alike. Having gotten in touch with the kids in yourselves, retreat to your hotel and drift away into the world of dreams. Bid farewell to this beautiful city.",

    "Day 8",
    "Paris: Return to India",
    "Bid goodbye. Your journey has come to rest, and from this day onwards, Switzerland and Paris get engraved in your memories forever. You will be transferred to the airport for your onward journey."
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
        src="https://cdn.pixabay.com/photo/2021/08/14/01/58/museum-6544420_1280.jpg"
        alt="head"
      />
      <h1 className="trip-head">Swiss & Paris Tour Delight</h1>
      <p className="trip-description">
        Start your post-wedding love with this fully customizable 07 nights 08
        days Europe package from Delhi, Mumbai, Chennai and other major cities
        of India. Your europe tour starts with romantic Paris, covering tourist
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
                  <div>
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
