import '../ratingsection/rating.css';
import {useState, useEffect, useRef} from 'react';
import {FaXmark } from "react-icons/fa6";
import { PiStarFill, PiStarBold  } from "react-icons/pi";

const Rating = () => {
  const [showPopup, setShowPopup] = useState(false);
  useEffect(() => {
    if (showPopup) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'visible';
    } }, [showPopup]);
  const [commentInfo, setCommentInfo] = useState({
    rate: 0,
    comment: "",
  });
  const handleComment = (event) => {
    setCommentInfo({...commentInfo, rate: commentInfo.rate, comment: event.target.value}); 
  };
  const [ratings, setRatings] = useState([]);
  const addComment = (com) => {
    setRatings([...ratings, {rate: com.rate, comment: com.comment}])
  }
  const carouselRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!carouselRef.current) return;
           
      const containerWidth = carouselRef.current.offsetWidth;
      const scrollLeft = carouselRef.current.scrollLeft;

      const rectangles = Array.from(carouselRef.current.children);
 
      rectangles.forEach((rectangle, index) => {
        const rectLeft = rectangle.offsetLeft; 
        const rectWidth = rectangle.offsetWidth;
        const rectCenter = rectLeft + rectWidth / 2;

        if (rectCenter >= scrollLeft && rectCenter <= scrollLeft + containerWidth) {
          setActiveIndex(index);
        }
      });
    };

    if (carouselRef.current) {
      carouselRef.current.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (carouselRef.current) {
        carouselRef.current.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);
    return(
        <section className="rating-section">
            <div className="rating-content flex">
              <div className="rating-header">
                <div className="rating-image flex">
                  <div className="rating-img-box flexed">
                    <img src="src/assets/aboutus/fifth-section/map.png" alt="visiteurs" />
                  </div>
                  <span>+50000 Visiteurs</span>
                </div>
                <h1>Avis et témoignages</h1>
                <div className="rating-image flex">
                  <div className="rating-img-box flexed">
                    <img src="src/assets/aboutus/fifth-section/stars.png" alt="stars" />
                  </div>
                  <span>5 Etoiles</span>
                </div>
              </div>
              <div className="rating-area" ref={carouselRef} style={{gridTemplateColumns: `repeat(${ratings.length}, 1fr)`}}>
                
                {ratings.map((rating, index) => (
                  <div key={index} className={`rating-box flex  ${activeIndex === index ? 'active' : ''}`}>
                  <div className="stars">

                    {[...Array(rating.rate)].map((t,i)=>{
                    
                
                       return(
                        <PiStarFill className={`-N${i+1}-star`} />
                       )

                    })}
                    
                    {[...Array(5 - rating.rate)].map((t,i)=>{
                        
                        return (
                          <PiStarBold className={`-N${i+rating.rate+1}-star`}/>
                        )

                    })}
                  </div>
                  <h2>User Abdessamed</h2>
                  <p className='comment'>
                    {rating.comment}
                  </p>
                  <p className='evaluation'>Evaluation: {rating.rate} Etoiles</p>
                </div>
                ))}
              </div>
              {showPopup && 
                            <div className="blur">
                              <div className="rating-area">
                                  <div className="rating-area-content flex">
                                      <div className="exit">
                                        <FaXmark className="exitIcon" onClick={() => setShowPopup(false)}/>
                                      </div>
                                      <p>
                                        Nous sommes impatients de lire vos commentaires !
                                      </p>
                                      <div className="commentArea">
                                         <div className="star-range">
                                            <div className="smallStar" onClick={() => setCommentInfo({...commentInfo , rate:1})}>
                                               {
                                                  ((commentInfo.rate !== 0)) &&
                                                         <PiStarFill className="star"/>
                                                }
                                               {
                                                 (commentInfo.rate == 0) &&
                                                        <PiStarBold className="star"/>
                                                }
                                            </div>
                                            <div className="smallStar" onClick={() =>  setCommentInfo({...commentInfo , rate:2})}>
                                                {
                                                 ((commentInfo.rate == 2) || (commentInfo.rate == 3) || (commentInfo.rate == 4) || (commentInfo.rate == 5)) &&
                                                                                                                         <PiStarFill className="star"/>
                                               }
                                                {
                                                  !((commentInfo.rate == 2) || (commentInfo.rate == 3) || (commentInfo.rate == 4) || (commentInfo.rate == 5)) &&
                                                         <PiStarBold className="star"/>
                                               }
                                            </div>
                                            <div className="smallStar" onClick={() =>  setCommentInfo({...commentInfo , rate:3})}>
                                                {
                                                  ((commentInfo.rate == 3) || (commentInfo.rate == 4) || (commentInfo.rate == 5)) &&
                                                                                                       <PiStarFill className="star"/>
                                                }
                                                {
                                                  !((commentInfo.rate == 3) || (commentInfo.rate == 4) || (commentInfo.rate == 5)) &&
                                                               <PiStarBold className="star"/>
                                                }
                                            </div>
                                            <div className="smallStar" onClick={() =>  setCommentInfo({...commentInfo , rate:4})}>
                                                {
                                                  ((commentInfo.rate == 4) || (commentInfo.rate == 5)) &&
                                                  <PiStarFill className="star"/>
                                               }
                                                {
                                                  !((commentInfo.rate == 4) || (commentInfo.rate == 5)) &&
                                                               <PiStarBold className="star"/>
                                                }
                                            </div>
                                            <div className="smallStar" onClick={() =>  setCommentInfo({...commentInfo , rate:5})}>
                                                {
                                                 (commentInfo.rate == 5) &&
                                                  <PiStarFill className="star"/>
                                               }
                                                {
                                                  !(commentInfo.rate == 5) &&
                                                                <PiStarBold className="star"/>
                                                }
                                             </div>    
                                         </div>
                                         <textarea onChange={handleComment} value={commentInfo.comment} className="userComment" cols="70" rows="7" placeholder='Describe your experience with us !'/>
                                      </div>
                                      <button className="rating-btn" disabled={(commentInfo.comment =="") || (commentInfo.rate == 0)} onClick={() => {addComment(commentInfo), setShowPopup(false), commentInfo.comment ="", commentInfo.rate = 0 }}>Evaluer</button>
                                  </div>
                              </div>
                            </div>
              }
              <button className="rating-btn" onClick={() => setShowPopup(true)}>Evaluer</button>
            </div>
          </section>
    );
}
export default Rating;