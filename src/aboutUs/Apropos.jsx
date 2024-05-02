import './apropos.css';
import Chef from './chefsection/Chef.jsx'
import Hero from './herosection/Hero.jsx';
import Story from './story/Story.jsx';
import Gerant from './gerantsection/Gerant.jsx';
import Reward from './rewardsection/Reward.jsx';
import Rating from './ratingsection/Rating.jsx';
import Socials from './socials/Socials.jsx';
import Restaurants from './restaurants/Restaurants';


const Apropos = () => {
          
    return(
        <div className='aboutUs-container'>         
          <Hero/>
          <Story/>
          <Chef/>
          <Gerant/>
          <Rating/>
          <Reward/>
          <Restaurants/>
          <Socials/>
        </div>
    );
}
export default Apropos;