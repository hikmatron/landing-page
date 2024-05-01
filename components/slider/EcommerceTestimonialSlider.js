// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Autoplay, Pagination } from "swiper";

export default function EcommerceTestimonialSlider() {
  return (
    <>
      <Swiper
        modules={[Autoplay, Pagination]}
        slidesPerView={2}
        spaceBetween={30}
        centeredSlides={false}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          el: ".testimonial-pagination",
        }}
        // navigation={{
        //     prevEl: ".navigation-prev",
        //     nextEl: ".navigation-next",
        // }}
        // breakpoints={{
        //     320: {
        //         slidesPerView: 1,
        //         spaceBetween: 30,
        //     },
        //     575: {
        //         slidesPerView: 2,
        //         spaceBetween: 30,
        //     },
        //     767: {
        //         slidesPerView: 3,
        //         spaceBetween: 30,
        //     },
        //     991: {
        //         slidesPerView: 2,
        //         spaceBetween: 30,
        //     },
        //     1199: {
        //         slidesPerView: 2,
        //         spaceBetween: 30,
        //     },
        //     1350: {
        //         slidesPerView: 2,
        //         spaceBetween: 30,
        //     },
        // }}
        className="swiper-wrapper"
      >
        <SwiperSlide>
          <div className="item">
            <p>
              "Hikmatron Systems delivered exceptional websites for
              <strong> FathimaBooks.com and Ghazal.lk </strong>, seamlessly
              blending aesthetics with functionality. Their expertise in web
              development ensures a smooth and satisfying user experience."
            </p>
            <div className="meta">
              <div className="author">
                <div className="avatar">
                  <img src="/assets/images/post-author-01.jpg" alt="Avatar" />
                  <i className="las la-quote-right" />
                </div>
                <div className="info">
                  <div className="name">Mohamed Sabry</div>
                  <div className="position">
                    Founder<br></br>Fathima Books, Ghazal Publications
                  </div>
                </div>
              </div>
              <div className="logo">
                <img src="/assets/images/client-01.webp" alt="Logo" />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="item">
            <p>
              "Creation of <strong>foreigncity.lk</strong> is a sweet success,
              offering a delectable array of candies from around the globe.
              Navigating the site is as delightful as indulging in its treats,
              showcasing their mastery in crafting engaging e-commerce
              platforms."
            </p>
            <div className="meta">
              <div className="author">
                <div className="avatar">
                  <img src="/assets/images/post-author-02.jpg" alt="Avatar" />
                  <i className="las la-quote-right" />
                </div>
                <div className="info">
                  <div className="name">Sanoos Abdullah</div>
                  <div className="position">
                    Founder <br></br> Foreign City
                  </div>
                </div>
              </div>
              <div className="logo">
                <img src="/assets/images/client-02.webp" alt="Logo" />
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      <div className="swiper-pagination testimonial-pagination" />
    </>
  );
}
