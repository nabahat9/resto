import '../gerantsection/gerant.css';

const Gerant = () => {

    return(
        <section className="gerant-restaurent flexed">
            <div className="gerant-content flex">
                  <h1>Gérant de le restaurent</h1>
                  <p className="first">
                    Chez nous, chaque plat est préparé avec soin et passion pour offrir à nos clients une expérience gastronomique inoubliable.
                  </p>
                  <p className="first">-Lisa kabrina-</p>
                  <div className="gerant-img">
                    <img src="src/assets/aboutus/fourth-section/gerant.png" alt="Gerant img" />
                  </div>
                  <div className="gerant-vector1">
                    <img src="src/assets/aboutus/fourth-section/Vector1.png" alt="Gerant img" />
                  </div>
                  <div className="gerant-vector2">
                    <img src="src/assets/aboutus/fourth-section/Vector2.png" alt="Gerant img" />
                  </div>
            </div>
          </section>
    );
}
export default Gerant;