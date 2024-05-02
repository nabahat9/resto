import '../herosection/hero.css';
import {useState, useEffect} from 'react';
import { FaArrowDownLong } from "react-icons/fa6";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

const Hero = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const images = [
      'src/assets/aboutus/first-section/menugourment1.png',
      'src/assets/aboutus/first-section/menugourment2.png',
      'src/assets/aboutus/first-section/menugourment3.png',
      'src/assets/aboutus/first-section/menugourment4.png',
      'src/assets/aboutus/first-section/menugourment5.png',
    ];
  
    useEffect(() => {
      const intervalId = setInterval(() => {
        goToNextImage();
      }, 5000);
      return () => clearInterval(intervalId);
    }, []); 
  
    const goToNextImage = () => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    };
  
    const goToPreviousImage = () => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
      );
    };
    const scrollToNextPage = () => {
      const nextPage = document.querySelector('.story-section');
      if (nextPage) {
        nextPage.scrollIntoView({ behavior: 'smooth' });
      }
    };
    return(
        <div className="hero-container">
              <div className="background-overlay"></div>
              <section  className="hero-section flexed" style={{backgroundImage: `url(${images[currentImageIndex]})`}}>
                <div className="hero-content flex">
                    <h1 className="hero-heading">Menu Gourmet</h1>
                    <p className="hero-text">Découvrez une expérience culinaire inoubliable où chaque plat raconte une histoire 
                       de saveurs exquises et d'innovation gastronomique
                    </p>
                    <button className='btn-explore flexed' onClick={scrollToNextPage}>
                        <FaArrowDownLong className='explore-icon'/>
                        <span>Explorer</span>
                    </button>
                </div>
                <button className='btn-nextImage' onClick={goToNextImage}><IoIosArrowForward className='arrow-icon'/></button>
                <button className='btn-prevImage' onClick={goToPreviousImage}><IoIosArrowBack className='arrow-icon'/></button>
            </section>
          </div>
    );
}
export default Hero;