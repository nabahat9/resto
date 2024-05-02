import '../rewardsection/reward.css';

const Reward = () => {
    return(
      <section className="rewards-section flexed">
        <div className="rewards-content flex">
          <h1>Récompences</h1>
          <div className="our-rewards grid">
            <div className="reward">
              <div className="reward-img">
                <img src="src/assets/aboutus/sixth-section/firstreward.png" alt="first reward" />
              </div>
              <p className="reward-description">
                Distinction pour 
                l'excellence du service
              </p>
            </div>
            <div className="reward">
              <div className="reward-img">
                <img src="src/assets/aboutus/sixth-section/secondreward.png" alt="second reward" />
              </div>
              <p className="reward-description">
                Prix de la meilleure
                cuisine
              </p>
            </div>
            <div className="reward">
              <div className="reward-img">
                <img src="src/assets/aboutus/sixth-section/thirdreward.png" alt="third reward" />
              </div>
              <p className="reward-description">
                Récompense pour 
                l'innovation culinaire
              </p>
            </div>
          </div>
        </div>
      </section>
    );
}
export default Reward;