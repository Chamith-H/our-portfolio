import "./Hero.css";

const Hero = () => {
  return (
    <div className="Hero ps-5">
      <div className="Hero-content">
        <div className="row g-0">
          <div className="col-6 Hero-Des py-5">
            <div className="Hero-Slogan pt-5">
              <h1>
                TRANSFORMING <span>IDEAS</span> INTO DIGITAL EXCELLENCE
              </h1>
              <p className="pe-5">
                We believe in the transformative power of innovation and
                excellence. Our unwavering dedication to turning visionary
                concepts into cutting-edge digital solutions drives real-world
                success for our clients. We specialize in custom software
                development, dynamic websites, intuitive mobile apps, and
                comprehensive digital marketing solutions. Our team of skilled
                developers, designers, and strategists work closely with you to
                bring your ideas to life with precision and creativity.
              </p>
              <button className="px-4 py-1 mt-2">Connet with us</button>
            </div>

            <div className="Social-Icons d-flex">
              <button className="me-2">
                <i className="bi bi-linkedin"></i>
              </button>
              <button className="me-2">
                <i className="bi bi-facebook"></i>
              </button>
              <button className="me-2">
                <i className="bi bi-whatsapp"></i>
              </button>
              <button>
                <i className="bi bi-envelope-at-fill"></i>
              </button>
            </div>
          </div>
          <div className="col-6 d-flex align-items-end justify-content-end">
            <div className="Hero-Side-Img"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
