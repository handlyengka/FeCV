const about =()=>{
    return(
        <>
 <section className="section pt-0" id="about">
    {/* container */}
    <div className="container text-center">
      {/* about wrapper */}
      <div className="about">
        <div className="about-img-holder">
          <img src="assets/imgs/man.png" className="about-img" alt="Download free bootstrap 4 landing page, free boootstrap 4 templates, Download free bootstrap 4.1 landing page, free boootstrap 4.1.1 templates, meyawo Landing page" />
        </div>
        <div className="about-caption">
          <p className="section-subtitle">Siapa Henly ?</p>
          <h2 className="section-title mb-3">About Me</h2>
          <p>
            Saya hanyalah manusia biasa yang tak sempurna dan kadang salah, namun di hatiku hanya satu, cinta untukmu luarbiasaa... 
            <br />             
          </p>
          <button className="btn-rounded btn btn-outline-primary mt-4">Download CV</button>
        </div>              
      </div>{/* end of about wrapper */}
    </div>{/* end of container */}
  </section> 
    </>
    );
};
export default about;