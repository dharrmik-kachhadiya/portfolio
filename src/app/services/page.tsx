import type { NextPage } from "next";

const Service: NextPage = () => {
  return (
    <>
      <section className="service section" id="services">
        <div className="container">
          <div className="row">
            <div className="section-title padd-15">
              <h2>Our Services</h2>
            </div>
          </div>
          <div className="row">
            {/* Service Item 1: Logo Design */}
            <div className="service-item padd-15">
              <div className="service-item-inner">
                <div className="icon"><i className="fa fa-paint-brush" /></div>
                <h4>UI/UX Design</h4>
                <p>UI/UX design combines user interface and user experience principles to create intuitive, visually appealing digital experiences that prioritize usability and engagement.</p>
              </div>
            </div>
            {/* Service Item 1 End */}
            {/* Service Item 2: Web Design */}
            <div className="service-item padd-15">
              <div className="service-item-inner">
                <div className="icon"><i className="fa fa-laptop" /></div>
                <h4>Web Development and Design</h4>
                <p>Web development and design encompass the creation and implementation of websites, focusing on both the technical aspects of functionality and the aesthetic elements of user experience.
                </p>
              </div>
            </div>
            {/* Service Item 2 End */}
            {/* Service Item 3: WordPress */}
            <div className="service-item padd-15">
              <div className="service-item-inner">
                <div className="icon"><i className="fa fa-wordpress" /></div>
                <h4>E-commerce Solutions</h4>
                <p>E-commerce solutions involve the development and integration of online platforms that facilitate buying and selling of goods or services, ensuring seamless transactions and enhanced user experiences.</p>
              </div>
            </div>
            {/* Service Item 3 End */}
            {/* Service Item 4: Web Development */}
            <div className="service-item padd-15">
              <div className="service-item-inner">
                <div className="icon"><i className="fa fa-code" /></div>
                <h4>Performance Optimization</h4>
                <p>Performance optimization in web development focuses on enhancing website speed, responsiveness, and efficiency to improve user experience and SEO rankings.</p>
              </div>
            </div>
            {/* Service Item 4 End */}
            {/* Service Item 5: Video Editing */}
            <div className="service-item padd-15">
              <div className="service-item-inner">
                <div className="icon"><i className="fa fa-film" /></div>
                <h4>Back-End Development</h4>
                <p>Back-end development involves creating and maintaining the server-side logic and databases that power websites and applications, ensuring functionality, security, and seamless integration with front-end interfaces.</p>
              </div>
            </div>
            {/* Service Item 5 End */}
            {/* Service Item 6: SEO Optimization */}
            <div className="service-item padd-15">
              <div className="service-item-inner">
                <div className="icon"><i className="fa fa-rocket" /></div>
                <h4>SEO Optimization</h4>
                <p>SEO optimization involves techniques to improve a website's visibility and ranking in search engine results, focusing on content relevance, technical aspects, and user experience to attract organic traffic.
                </p>
              </div>
            </div>
            {/* Service Item 6 End */}
          </div>
        </div>
      </section>
    </>
  );
};

export default Service;
