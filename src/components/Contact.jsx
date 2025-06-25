import React from 'react'

export default function Contact() {
  return (
    <div>
      <div className="container-xxl pb-5" id="contact" style={{ background: "#f8f9fa" }}>
        <div className="container py-5">
          <div className="row g-5 mb-5 wow fadeInUp" data-wow-delay="0.1s">
            <div className="col-lg-6">
              <h1 className="display-5 mb-0">Let's Work Together</h1>
            </div>
            <div className="col-lg-6 text-lg-end">
              <a className="btn btn-primary py-3 px-5 rounded-pill shadow-sm" href="#">Say Hello</a>
            </div>
          </div>
          <div className="row g-5">
            <div className="col-lg-5 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
              <div className="p-4 rounded-4 shadow-sm bg-white h-100">
                <p className="mb-2 text-muted">My Address:</p>
                <h5 className="fw-bold mb-3">Wat Samroung Andet, Sensok, PP</h5>
                <hr className="w-100" />
                {/* <p className="mb-2 text-muted">Call me:</p> */}
                {/* <h5 className="fw-bold mb-3">+85596-588-172-2</h5> */}
                <hr className="w-100" />
                <p className="mb-2 text-muted">Mail me:</p>
                <h5 className="fw-bold mb-3">sokchanear0@gmail.com</h5>
                <hr className="w-100" />
                <p className="mb-2 text-muted">Follow me:</p>
                <div className="d-flex pt-2">
                  <a className="btn btn-outline-primary btn-square me-2 rounded-circle d-flex align-items-center justify-content-center" style={{width:40, height:40}} href="https://t.me/Ear_Sokchan" target="_blank" rel="noopener noreferrer"><i className="fab fa-telegram-plane" /></a>
                  <a className="btn btn-outline-primary btn-square me-2 rounded-circle d-flex align-items-center justify-content-center" style={{width:40, height:40}} href="https://www.facebook.com/share/1BtFcd41V4/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f" /></a>
                  <a className="btn btn-outline-primary btn-square me-2 rounded-circle d-flex align-items-center justify-content-center" style={{width:40, height:40}} href="https://github.com/Sokchan3434456677" target="_blank" rel="noopener noreferrer"><i className="fab fa-github" /></a>
                  <a className="btn btn-outline-primary btn-square rounded-circle d-flex align-items-center justify-content-center" style={{width:40, height:40}} href="https://www.linkedin.com/in/sok-chan-ba7219371?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in" /></a>
                </div>
              </div>
            </div>
            <div className="col-lg-7 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
              <div className="p-4 rounded-4 shadow-sm bg-white h-100">
                <p className="mb-4 text-muted">
                  I'm always open to new opportunities, collaborations, or freelance work.
                  If you'd like to work together or have any questions, feel free to reach out.
                </p>
                <form>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <div className="form-floating">
                        <input type="text" className="form-control rounded-3 shadow-sm" id="name" placeholder="Your Name" />
                        <label htmlFor="name">Your Name</label>
                      </div>
                    </div>
                    
                    <div className="col-12">
                      <div className="form-floating">
                        <input type="text" className="form-control rounded-3 shadow-sm" id="subject" placeholder="Subject" />
                        <label htmlFor="subject">Subject</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-floating">
                        <textarea className="form-control rounded-3 shadow-sm" placeholder="Leave a message here" id="message" style={{height: 120, resize: "vertical"}} defaultValue={""} />
                        <label htmlFor="message">Message</label>
                      </div>
                    </div>
                    <div className="col-12 text-end">
                      <button className="btn btn-primary py-3 px-5 rounded-pill shadow-sm" type="submit">Send Message</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
