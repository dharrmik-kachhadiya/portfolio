
export default async function Home() {

  return (
    <main>
      <section className="home section" id="home">
        <div className="container">
          <div className="intro">
            <img
              src="/imgs/profile.jpg"
              className="shadow-dark"
            />
            <h1>Dharmik Kachhadiya</h1>
            <p>MERN Stack | Vue.js, Next.js | AWS | Postgress SQL | React Native</p>
            <div className="social-links">
              <a href="https://github.com/dharrmik-kachhadiya" target="_blank">
                <i className="fa fa-github" />
              </a>
              <a href="https://www.instagram.com/_mr.d_k_0137/?next=%2F" target="_blank">
                <i className="fa fa-instagram" />
              </a>
              <a href="https://www.linkedin.com/in/dharmik-kachhadiya-74a605228/" target="_blank">
                <i className="fa fa-linkedin" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
