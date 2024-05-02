import '../chefsection/chef.css';
import {useState} from 'react';

const Chef = () => {
  const [currentClick, setCurrentClick] = useState(0);
  const chefImages = [
    "src/assets/aboutus/third-section/mainChef.png",
    "src/assets/aboutus/third-section/mainChef2.png",
    "src/assets/aboutus/third-section/mainChef3.png",
    "src/assets/aboutus/third-section/mainChef4.png",
    "src/assets/aboutus/third-section/mainChef5.png",
    "src/assets/aboutus/third-section/mainChef6.png",
   ];
   const [selectedImage, setSelectedImage] = useState(null);
   const handleClickImages = (image) => {
      setSelectedImage(image)
    };
    return(
        <section className="chefs-section flexed">
            <div className="chefs-container flex">
              <h1>La meilleure équipe!</h1>
              <div className="best-team">
                  <div className="team-img">
                    <img src={selectedImage || `src/assets/aboutus/third-section/MainChef.png`} alt="Team image" />
                  </div>
                  <div className="about-team">
                      Découvrez notre restaurant, où une équipe exceptionnelle de chefs talentueux, venant de divers horizons, vous promet une expérience culinaire incomparable. Avec un parcours remarquable et des réussites internationales à leur actif, nos chefs vous offrent des plats uniques et savoureux, résultat de leur passion et de leur expertise. Nous sommes impatients de vous faire découvrir notre cuisine exceptionnelle.
                  </div>
              </div>
              <div className="main-chefs">
                <span>Les chefs principales:</span>
                {chefImages.map((image, index) => (
                  <div key={index} className="mainChef-img" onClick={() => {handleClickImages(image), setCurrentClick(index)}} style={{border: currentClick == index ? "8px solid #FFB92C66" : "none"}}>
                     <img src={image} alt={`chef image ${index + 1}`} />
                  </div>
                ))}
              </div>
            </div>
          </section>
    )
}
export default Chef