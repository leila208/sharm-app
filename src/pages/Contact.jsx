import React from "react";
function Contact() {
  return (
    <section className="photo">
      <div className="k">
        <h1>Əlaqə</h1>
      </div>
      <div className="container">
        <div className="contact">
          <div className="contact-map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3039.1787955021896!2d49.82203171482909!3d40.3827297656316!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307da6f327d463%3A0xbe68553e791e5e84!2sCoders%20Azerbaijan!5e0!3m2!1sen!2s!4v1660429091166!5m2!1sen!2s"
              width="500"
              height="500"
            />
          </div>
          <div className="contact-text">
            <div className="small-text">
              <div className="contact-icon">
                <i className="fa-regular fa-phone orange" />
                <p className="pcontent">Qaynar xətt</p>
              </div>
              <div className="contact-information">
                <p className="pcontent">*5858</p>
              </div>
            </div>
            <div className="small-text">
              <div className="contact-icon">
                <i className="fa-regular fa-at orange" />
                <p className="pcontent ">E-mail:</p>
              </div>
              <div className="contact-information">
                <p className="pcontent">beautyshop@gmail.com</p>
              </div>
            </div>
            <div className="small-text">
              <div className="contact-icon">
                <i className="fa-regular fa-location-dot orange" />
                <p className="pcontent">Ünvan:</p>
              </div>
              <div className="contact-information">
                <p className="pcontent">Yasamal r-nu, Həsənbəy Zərdabi</p>
              </div>
            </div>
            <div className="small-text">
              <div className="contact-icon">
                <i className="fa-regular fa-calendar orange" />
                <p className="pcontent">İş günləri:</p>
              </div>
              <div className="contact-information">
                <p className="pcontent">Hər gün</p>
              </div>
            </div>
            <div className="small-text">
              <div className="contact-icon">
                <i className="fa-regular fa-clock orange" />
                <p className="pcontent">İş saatları:</p>
              </div>
              <div className="contact-information">
                <p className="pcontent">09:00 - 20:00</p>
              </div>
            </div>
          </div>
        </div>
        <div className="line">
          <p>Operativ cavablandırma</p>
          <h1>Bizimlə əlaqə üçün</h1>
          <form>
            <div className="line-inputs">
              <input type="text" placeholder="Ad" />
              <input type="email" placeholder="Email" />
              <input type="number" placeholder="Nömrə" />
            </div>
            <div className="textareas">
              <textarea placeholder="Mövzu"></textarea>
              <textarea placeholder="Mesaj"></textarea>
            </div>
          </form>
          <div className="contact-button">
            <div id="orangered">Mesajı göndər</div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Contact;
