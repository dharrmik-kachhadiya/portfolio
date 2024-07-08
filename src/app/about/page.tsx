import type { NextPage } from "next";

const About: NextPage = () => {
  return (
    <main>
      <section className="about section" id="about">
        <div className="container">
          <div className="row">
            <div className="section-title padd-15">
              <h2>About Me</h2>
            </div>
          </div>
          <div className="row">
            <div className="about-content padd-15">
              <div className="row">
                <div className="about-text padd-15">
                  <h2>
                    I am Dharmik Kachhadiya, a <span>FULL-STACK DEVELOPER</span>
                  </h2>
                  <p>
                    Hi! My name is Dharmik Kachhadiya. I am a full-stack developer with 2+ years of experience. I am very passionate and dedicated to my work. With over 2 years of experience as a full-stack developer, I have acquired the skills and knowledge necessary to make your project a success. I enjoy every step of the development process, from discussion to collaboration.
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="personal-info padd-15">
                  <div className="row">
                    <div className="info-item padd-15">
                      <p>
                        Website : <span>www.urfolio.vercel.app</span>
                      </p>
                    </div>
                    <div className="info-item padd-15">
                      <p>
                        Email : <span>dharmik.kachhadiya.02@gmail.com</span>
                      </p>
                    </div>
                    <div className="info-item padd-15">
                      <p>
                        Degree : <span>BCA, MCA</span>
                      </p>
                    </div>
                    <div className="info-item padd-15">
                      <p>
                        Phone : <span>+91 9537267385</span>
                      </p>
                    </div>
                    <div className="info-item padd-15">
                      <p>
                        City : <span>Surat</span>
                      </p>
                    </div>
                    <div className="info-item padd-15">
                      <p>
                        Freelance : <span>Available</span>
                      </p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="buttons padd-15">
                      <a
                        href="/assets/Dharmik.pdf"
                        target="_target"
                        className="btn"
                      >
                        Download CV
                      </a>
                      <a
                        href="https://www.upwork.com/freelancers/~014b4c8b707c9609be"
                        target="_target"
                        data-section-index={0}
                        className="btn hire-me"
                      >
                        Hire Me
                      </a>
                    </div>
                  </div>
                </div>
                <div className="skills padd-15">
                  <div className="row">
                    <div className="skill-item padd-15">
                      <h5>Javascript</h5>
                      <div className="progress">
                        <div className="progress-in" style={{ width: "80%" }} />
                        <div className="skill-percent">95%</div>
                      </div>
                    </div>
                    <div className="skill-item padd-15">
                      <h5>React js</h5>
                      <div className="progress">
                        <div className="progress-in" style={{ width: "60%" }} />
                        <div className="skill-percent">90%</div>
                      </div>
                    </div>
                    <div className="skill-item padd-15">
                      <h5>Vue js</h5>
                      <div className="progress">
                        <div className="progress-in" style={{ width: "50%" }} />
                        <div className="skill-percent">80%</div>
                      </div>
                    </div>
                    <div className="skill-item padd-15">
                      <h5>Next js</h5>
                      <div className="progress">
                        <div className="progress-in" style={{ width: "70%" }} />
                        <div className="skill-percent">90%</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="education padd-15">
                  <h3 className="title">Education</h3>
                  <div className="row">
                    <div className="timeline-box padd-15">
                      <div className="timeline shadow-dark">
                        {/* Timeline Item */}
                        <div className="timeline-item">
                          <div className="circle-dot" />
                          <h6 className="timeline-date">
                            <i className="fa fa-calendar" /> 2024 to Present
                          </h6>
                          <h4 className="timeline-title">
                            Master of Computer Science
                          </h4>
                          <p className="timeline-text">
                            In 2024, I started my Master of Computer Applications (MCA) program at Jain University in Bangalore. This program is designed to provide in-depth knowledge and skills in computer science, preparing me for advanced roles in the IT industry.
                          </p>
                        </div>
                        {/* Timeline Item end */}
                        {/* Timeline Item */}
                        {/* Timeline Item end */}
                        {/* Timeline Item */}
                        <div className="timeline-item">
                          <div className="circle-dot" />
                          <h6 className="timeline-date">
                            <i className="fa fa-calendar" /> 2020 to 2023
                          </h6>
                          <h4 className="timeline-title">
                            Bachelor of Computer Science
                          </h4>
                          <p className="timeline-text">
                            In 2023, I completed my Bachelor of Computer Applications (BCA) from Saurashtra University, graduating with a GPA of 8.85. This program equipped me with a solid foundation in computer science principles and practical skills, preparing me for further studies and a career in the IT industry.
                          </p>
                        </div>
                        <div className="timeline-item">
                          <div className="circle-dot" />
                          <h6 className="timeline-date">
                            <i className="fa fa-calendar" /> 2019 to 2020
                          </h6>
                          <h4 className="timeline-title">
                            Full-Stack Development
                          </h4>
                          <p className="timeline-text">
                            In 2019, I began learning full-stack development at Creative Multimedia Institute. This training covered both front-end and back-end technologies, enabling me to build comprehensive web applications. The hands-on experience and projects helped me gain practical skills and a deep understanding of web development.
                          </p>
                        </div>
                        {/* Timeline Item end */}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="experience padd-15">
                  <h3 className="title">Experience</h3>
                  <div className="row">
                    <div className="timeline-box padd-15">
                      <div className="timeline shadow-dark">
                        {/* Timeline Item */}
                        <div className="timeline-item">
                          <div className="circle-dot" />
                          <h6 className="timeline-date">
                            <i className="fa fa-calendar" /> February 2022
                          </h6>
                          <h4 className="timeline-title">Internship</h4>
                          <p className="timeline-text">
                            In February 2022, I started my internship at HMR Technologies in Surat. During this internship, I gained valuable industry experience, working on real-world projects and collaborating with experienced professionals. This opportunity allowed me to apply my theoretical knowledge to practical situations and further develop my technical and professional skills.
                          </p>
                        </div>

                        {/* Timeline Item end */}
                        {/* Timeline Item */}
                        <div className="timeline-item">
                          <div className="circle-dot" />
                          <h6 className="timeline-date">
                            <i className="fa fa-calendar" /> April 2022 to April 2024
                          </h6>
                          <h4 className="timeline-title">Full-Stack Developer</h4>
                          <p className="timeline-text">
                            From April 2022 to April 2024, I worked as a Senior Full-Stack Developer at HMR Technologies in Surat. During this period, I led multiple projects, developed and maintained web applications, and collaborated with cross-functional teams to deliver high-quality software solutions. My role also involved mentoring junior developers and contributing to the overall growth of the development team.
                          </p>
                        </div>

                        {/* Timeline Item end */}
                        {/* Timeline Item */}
                        <div className="timeline-item">
                          <div className="circle-dot" />
                          <h6 className="timeline-date">
                            <i className="fa fa-calendar" /> April 2024
                          </h6>
                          <h4 className="timeline-title">Freelancer</h4>
                          <p className="timeline-text">
                            In April 2024, I began my journey as a freelancer, offering web development services. This transition allowed me to leverage my skills and experience to work on diverse projects for various clients. As a freelancer, I focus on delivering customized solutions, enhancing user experiences, and staying updated with the latest industry trends and technologies.
                          </p>
                        </div>

                        {/* Timeline Item end */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main >
  );
};

export default About;
