import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper";
import CountUp from "react-countup";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
function AboutUs() {
  return (
    <>
      <section>
        <div className="k">  
            <h1>Haqqımızda</h1>
        </div>
        <div className="us">
          <div className="container">
            <div className="us-details">
              <div className="us-text">
                <h1>
                  Müştərilərin <i className="orange">Sharm</i> haqqında
                  fikirləri
                </h1>
                <p className="pcontent">
                  Siz də müştərilərimiz sırasına daxil olun
                </p>
                <i className="fa-solid fa-right-long" />
              </div>
              <Swiper
                loop="true"
                // autoplay={{
                //   delay: 1500,
                // }}
                // pagination={{
                //   clickable: true,
                // }}
                // navigation={true}
                modules={[Autoplay, Navigation, Pagination]}
                slidesPerView={1}
                className="swiper-about"
              >
                <SwiperSlide>
                  <div className="us-right-text">
                    <div className="us-up-text">
                      <p>
                        Buradan alış-veriş etdiyimə görə çox məmnunam.Hər kəsə
                        buradan alış-veriş etməyi tövsiyə edirəm.Məhsullar çox
                        keyfiyyətlidir və qiymətlər çox sərfəlidir.Məhsullar
                        təbiətə heç bir zərər vermədən hazırlanır və tamamilə
                        orqanikdir.Ən əsası isə komanda çox gülərüzdür və daim
                        müştəri ilə maraqlanırlar.
                      </p>
                    </div>
                    <div className="us-bottom-text">
                      <div className="us-image">
                        <img src="https://shtheme.org/demosd/betty/wp-content/uploads/2022/02/t1.png" />
                      </div>
                      <div className="us-bottom">
                        <p className="pcontent">Nuray İsgəndərli</p>
                        <p>müştəri</p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="us-right-text">
                    <div className="us-up-text">
                      <p>
                        Buradan alış-veriş etdiyimə görə çox məmnunam.Hər kəsə
                        buradan alış-veriş etməyi tövsiyə edirəm.Məhsullar çox
                        keyfiyyətlidir və qiymətlər çox sərfəlidir.Məhsullar
                        təbiətə heç bir zərər vermədən hazırlanır və tamamilə
                        orqanikdir.Ən əsası isə komanda çox gülərüzdür və daim
                        müştəri ilə maraqlanırlar.
                      </p>
                    </div>
                    <div className="us-bottom-text">
                      <div className="us-image">
                        <img src="https://shtheme.org/demosd/betty/wp-content/uploads/2022/02/t3.png" />
                      </div>
                      <div className="us-bottom">
                        <p className="pcontent">Aysu Əhmədli</p>
                        <p>müştəri</p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="us-right-text">
                    <div className="us-up-text">
                      <p>
                        Buradan alış-veriş etdiyimə görə çox məmnunam.Hər kəsə
                        buradan alış-veriş etməyi tövsiyə edirəm.Məhsullar çox
                        keyfiyyətlidir və qiymətlər çox sərfəlidir.Məhsullar
                        təbiətə heç bir zərər vermədən hazırlanır və tamamilə
                        orqanikdir.Ən əsası isə komanda çox gülərüzdür və daim
                        müştəri ilə maraqlanırlar.
                      </p>
                    </div>
                    <div className="us-bottom-text">
                      <div className="us-image">
                        <img src="https://avenue-sandbox.mybigcommerce.com/product_images/uploaded_images/newsletter-right.jpg" />
                      </div>
                      <div className="us-bottom">
                        <p className="pcontent">Aysu Əhmədli</p>
                        <p>müştəri</p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
        <div className="our_artists">
          <div className="container">
            <h1>Komandamız</h1>
            <div className="artists">
              <div className="artist">
                <div
                  className="artistimg"
                  data-aos="fade-right"
                  data-aos-duration="2000"
                >
                  <img src="https://cdn.bolvo.com/assets/viasun/team-item-1.jpg" />
                </div>
                <div className="artisttext">
                  <h1>Saç ustası</h1>
                </div>
              </div>
              <div className="artist">
                <div
                  className="artistimg"
                  data-aos="fade-up"
                  data-aos-duration="2000"
                >
                  <img src="https://cdn.bolvo.com/assets/viasun/team-item-2.jpg" />
                </div>
                <div className="artisttext">
                  <h1>Vizajist</h1>
                </div>
              </div>
              <div className="artist">
                <div
                  className="artistimg"
                  data-aos="fade-left"
                  data-aos-duration="2000"
                >
                  <img src="https://cdn.bolvo.com/assets/viasun/team-item-3.jpg" />
                </div>
                <div className="artisttext">
                  <h1>Dermatoloq</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="about-flowers">
          <div className="about-flowers-details">
            <p className="bolder">Çatdırılma xidmətimiz indi daha sərfəlidir</p>
            <p className="pstyle">Sizlər üçün ən sərfəlisini etdik</p>
          </div>
        </div>
        <div className="friends">
          <div className="container">
            <div className="collobs">
              <div
                className="collob"
                data-aos="fade-right"
                data-aos-duration="3000"
              >
                <img src="https://www.logolynx.com/images/logolynx/c8/c8146e3289445926cf0998801a28aae1.jpeg" />
              </div>
              <div
                className="collob"
                data-aos="fade-right"
                data-aos-duration="3000"
              >
                <img src="https://trademarks.justia.com/media/image.php?serial=87976261" />
              </div>
              <div
                className="collob"
                data-aos="fade-left"
                data-aos-duration="3000"
              >
                <img src="https://logos-download.com/wp-content/uploads/2016/05/NARS_logo_small.png" />
              </div>
              <div
                className="collob"
                data-aos="fade-left"
                data-aos-duration="3000"
              >
                <img src="https://th.bing.com/th/id/R.797dda482620a833c81c0a04af6c9964?rik=1hp%2bObYksYmpBA&pid=ImgRaw&r=0" />
              </div>
            </div>
          </div>
        </div>
        <div className="area">
          <div className="container">
            <div className="clients">
              <div className="client">
                <div className="client-image">
                  <i className="fa-regular fa-user-hair-long client-icon"></i>
                </div>
                <div className="client-text">
                  <CountUp end={500} start={0} duration={6.75} separator=" " />
                  <p>Müştəri</p>
                </div>
              </div>
              <div className="client">
                <div className="client-image">
                  <i className="fa-regular fa-manat-sign client-icon"></i>
                </div>
                <div className="client-text">
                  <CountUp
                    end={15}
                    start={0}
                    duration={6.75}
                    separator=" "
                    decimals={3}
                    decimal=","
                  />
                  <p>Gəlir</p>
                </div>
              </div>
              <div className="client">
                <div className="client-image">
                  <i className="fa-regular fa-file-chart-column client-icon"></i>
                </div>
                <div className="client-text">
                  <CountUp
                    end={250}
                    start={0}
                    duration={6.75}
                    separator=" "
                  />
                  <p>Proyekt</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="terri">
          <div className="container">
            <div className="teams">
              <div className="team">
                <div className="team-image">
                  <i className="fa-regular fa-laptop-mobile client-icon" />
                </div>
                <div className="team-text">
                  <h1>Texniki Dəstək</h1>
                  <p>Müştərilərimizə tam texniki dəstək göstərilir</p>
                </div>
              </div>
              <div className="team">
                <div className="team-image">
                  <i className="fa-regular fa-file-certificate client-icon" />
                </div>
                <div className="team-text">
                  <h1>Sertifikat</h1>
                  <p>Tam sertifikatlaşdırılmış müəssisəmiz xidmətinizdədir</p>
                </div>
              </div>
              <div className="team">
                <div className="team-image">
                  <i className="fa-regular fa-seedling client-icon" />
                </div>
                <div className="team-text">
                  <h1>Təbii məhsullar</h1>
                  <p>Məhsullar heç bir canlıya zərər vermədən hazırlanır </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default AboutUs;
