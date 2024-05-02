import '../story/story.css';
import { FaArrowDownLong } from "react-icons/fa6";

const Story = () => {
  const scrollToLastPage = () => {
    const lastPage = document.querySelector('.all-restaurants');
    if (lastPage) {
      lastPage.scrollIntoView({behavior: 'smooth'});
    }
  };
    return(
      <section className='story-section flexed'>
        <div className="story-content">
          <div className="story-images flex">
            <div className="image-container">
              <img src="src/assets/aboutus/second-section/histoire1.png" alt="histoire1" />
            </div>
            <div className="image-container">
              <img src="src/assets/aboutus/second-section/histoire2.png" alt="histoire2" />
            </div>
            <div className="image-container">
              <img src="src/assets/aboutus/second-section/histoire3.png" alt="histoire3" />
            </div>
          </div>
          <div className="story-text flex">
            <h1>Notre Histoire</h1>
            <p>
                Depuis plus de deux décennies, La Maison Gourmande est bien plus qu'un  simple restaurant. Fondé par le chef  Jean-Pierre et son épouse Sophie, notre établissement est un lieu où la  gastronomie raffinée rencontre l'hospitalité chaleureuse. Chaque plat est  préparé avec passion et créativité, et chaque convive est accueilli comme  un membre de notre famille. Venez découvrir notre histoire et savourer une expérience culinaire inoubliable à La Maison Gourmande.
            </p>
            <button className='story-btn flexed' onClick={scrollToLastPage}>
              <FaArrowDownLong className='explore-icon'/>
              <span>Tous nos restaurents</span>
            </button>
          </div>
        </div>
      </section>
    );
}
export default Story;