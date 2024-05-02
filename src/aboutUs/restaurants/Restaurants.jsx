import '../restaurants/restaurants.css';
import {useState} from 'react';


const Restaurants = () => {
  const locations = [
    {country: "France", flag: "src/assets/aboutus/seventh-section/france.png", adress: {street: "94 rue de la Boétie", city: "Poitiers", state: "Poitou-Charentes"}, contact: {email: " resto.fr@res-frc.com", phone: "+33 1.42.60.60.60"}},
    {country: "Algeria", flag: "src/assets/aboutus/seventh-section/algeria.png", adress: {street: "15 Rue Didouche Mourad", city: " Algiers", state: "Algiers Province"}, contact: {email: " resto.dz@res-alg.com", phone: "+213 21.63.41.41"}},
    {country: "Italy", flag: "src/assets/aboutus/seventh-section/italy.png", adress: {street: "30 Via della Conciliazione", city: "Rome", state: "Lazio"}, contact: {email: " resto.it@res-itl.com", phone: "+39 06 .6982.2121"}},
    {country: "China", flag: "src/assets/aboutus/seventh-section/china.png", adress: {street: "10 Nanjing East Road", city: " Huangpu District", state: "Shanghai"}, contact: {email: " resto.ch@res-chn.com", phone: "+86 21.6321.1122"}},
    {country: "Spain", flag: "src/assets/aboutus/seventh-section/spain.png", adress: {street: " 20 Paseo de la Castellana", city: "Madrid", state: "Community of Madrid"}, contact: {email: " resto.sp@res-spn.com", phone: "+34 91.436.00.44"}}
  ];
  const [countryInfo, setCountryInfo] =useState(0);
    return(
        <section className="all-restaurants flexed">
            <div className="all-restaurants-content flex">
              <h1>Tous nos restaurants</h1>
              <p className="all-restaurants-paragraph">
                Découvrez nos emplacements de restauration et trouvez votre prochaine expérience culinaire
              </p>
              <div className="restaurants-location grid">
                <div className="countries">
                  {locations.map((location, index) => 
                    (<div key={index} className={countryInfo === index ? `country child${index} active` : `country child${index}`} onClick={() => setCountryInfo(index)}>
                      <div className='country-flag flex'>
                        <img src={location.flag} alt={location.country} />
                      </div>
                      <span className='country-name'>{location.country}</span>
                    </div>
                  ))}
                </div>
                <div className="planet">
                  <div className="planet-img">
                    <img src="src/assets/aboutus/seventh-section/planet.png" alt="planet" />
                  </div>
                  <div className="cercle-img">
                    <img src="src/assets/aboutus/seventh-section/cercle.png" alt="cercle" />
                  </div>
                  <div className="orbit-img">
                    <img src="src/assets/aboutus/seventh-section/orbit.png" alt="orbit" />
                  </div>
                </div>
                <div className="country-info flex">
                  <div className="adress flex">
                    <h2>Adresse:</h2>
                    <div className="place">
                      <p>Street:&nbsp;{`  ${locations[countryInfo].adress.street}`}</p>
                      <p>City:&nbsp;{`  ${locations[countryInfo].adress.city}`}</p>
                      <p>State:&nbsp;{`  ${locations[countryInfo].adress.state}`}</p>
                    </div>
                  </div>
                  <div className="contact flex">
                    <h2>Contact:</h2>
                    <div className="countact-info">
                      <p>Email:&nbsp;{` ${locations[countryInfo].contact.email}`}</p>
                      <p>Number:&nbsp;{` ${locations[countryInfo].contact.phone}`}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
    );
}
export default Restaurants;