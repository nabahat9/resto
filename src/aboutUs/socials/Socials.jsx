import '../socials/socials.css';

const Socials = () => {

    return(
        <section className="socials flexed">
            <div className="socials-content flex">
              <h1>NOS RéSEaux sociaux</h1>
              <div className="socials-code grid">
                <div className="social flex">
                  <span>instegram:</span>
                  <div className="code-img">
                      <img src="src/assets/aboutus/eightth-section/instacode.png" alt="instegram code" />
                  </div>
                </div>
                <div className="social flex">
                  <span>Facebook:</span>
                  <div className="code-img">
                      <img src="src/assets/aboutus/eightth-section/instacode.png" alt="facebook code" />
                  </div>
                </div>
                <div className="social flex">
                  <span>Twitter:</span>
                  <div className="code-img">
                      <img src="src/assets/aboutus/eightth-section/instacode.png" alt="twitter code" />
                  </div>
                </div>
              </div>
            </div>
          </section>
    );
}
export default Socials;