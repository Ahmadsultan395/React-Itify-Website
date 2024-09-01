import React,{useEffect} from 'react'
import "./Team.css"
import HamzaSoud from "../../assets/images/team/c-hamza.jpg"
import AhmadSultan from "../../assets/images/team/33.jpg"
import junaid from "../../assets/images/team/c-junaid.jpg"

import AOS from 'aos'
import "../../../node_modules/aos/dist/aos.css"


const Team=()=>{
  useEffect(()=>{
    AOS.init({duration:1000})
  },[])

return(<>


{/* <!-- head image ///////////////////////////// --> */}
  <section id="head-section-our-team">
    <div className="head-text-our-team">
     
    </div>
  </section>
  {/* <!--end ///////////////////////////////////////////////////////////////// --> */}


  {/* <!-- team ////////////////////////////////////// --> */}
  <div className="vcenter-our-team">
    <section className="section-our-team">
      <div className="container-our-team">
        <header className="section-header-our-team">
          <h1 data-aos="fade-up" className="section-title-our-team">Company's Experts</h1>
          <p data-aos="fade-up">"The ITify Software House boasts an exceptional team of IT experts, each a specialist in their respective
            fields. Their collective knowledge and dedication ensure the development of top-notch software solutions.
            With a commitment to staying ahead of the technology curve, they continuously innovate and deliver
            excellence. The ITify team is the backbone of our success, driving us forward in the ever-evolving world of
            IT"</p>
        </header>
        <ul className="team-our-team">
          <li className="team__members-our-team">
            <div data-aos="fade-up" className="userProfile-our-team">
              <figure className="userProfile__thumbnail-our-team">
                <img src={HamzaSoud} alt="Photo" className="userProfile__image-our-team"/>
              </figure>
            </div>
            <div className="team__details-our-team">
              <header className="team__meta-our-team">
                <h3 data-aos="fade-up" className="team__meta__title-our-team">Hamza Saood</h3>
                <div data-aos="fade-up" className="team__meta__designation-our-team">CEO/Founder</div>
              </header>
              <div data-aos="fade-up" className="team__details__summery-our-team">
                As the visionary CEO and Founder of ITify Software House,Hamza Saood leads with innovation and
                expertise, driving technology solutions to new heights.
              </div>
              <div className="social-icons-our-team">
                <a href="https://www.facebook.com/hamza.saood/" className="fa fa-facebook-f"></a>
                <a href="https://www.instagram.com/hamzasaood/" className="fa fa-instagram"></a>
                <a href="https://www.linkedin.com/in/hamza-saood-451a05b3/" className="fa fa-linkedin"></a>
              </div>
            </div>
          </li>
          {/* <!-- Add more team members as needed --> */}
          <li className="team__members-our-team">
            <div data-aos="fade-up" className="userProfile-our-team">
              <figure className="userProfile__thumbnail-our-team">
                <img src={AhmadSultan} alt="Photo" className="userProfile__image-our-team"/>
              </figure>
            </div>
            <div className="team__details-our-team">
              <header className="team__meta-our-team">
                <h3 data-aos="fade-up" className="team__meta__title-our-team">Muhammad Ahmad</h3>
                <div data-aos="fade-up" className="team__meta__designation-our-team">MERN Developer/Lead</div>
              </header>
              <div data-aos="fade-up" className="team__details__summery-our-team">
              He leads Itify Software House's development team, ensuring high-quality,
               innovative applications that redefine industry standards and drive success.
              </div>
              <div className="social-icons-our-team">
                <a href="https://www.facebook.com/people/Ahmad-Sultan/100037261876545/" className="fa fa-facebook-f"></a>
                <a href="https://www.instagram.com/ahmad_5ultan/" className="fa fa-instagram"></a>
                <a href="https://www.linkedin.com/in/muhammad-ahmad-b9214b271?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="fa fa-linkedin"></a>
              </div>
            </div>
          </li>
          {/* junaid */}
          <li className="team__members-our-team">
            <div data-aos="fade-up" className="userProfile-our-team">
              <figure className="userProfile__thumbnail-our-team">
                <img src={junaid} alt="Photo" className="userProfile__image-our-team"/>
              </figure>
            </div>
            <div className="team__details-our-team">
              <header className="team__meta-our-team">
                <h3 data-aos="fade-up" className="team__meta__title-our-team">Muhammmad Junaid</h3>
                <div data-aos="fade-up" className="team__meta__designation-our-team">Graphic Designer/UI/UX Lead</div>
              </header>
              <div data-aos="fade-up" className="team__details__summery-our-team">
               Leading the Graphic Design and UI/UX team, they ensure high-quality designs,
                redefine industry standards, and drive success through innovation and expertise.
              </div>
              <div className="social-icons-our-team">
                <a href="https://www.facebook.com/Junaid2611" className="fa fa-facebook-f"></a>
                <a href="#" className="fa fa-instagram"></a>
                <a href="https://www.linkedin.com/in/muhammad-junaid-iqbal-graphics-designer-65a3b128a/?original_referer=" className="fa fa-linkedin"></a>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  </div>
  {/* <!--end /////////////////////////////////////////////////// --> */}

</>);

}
export default Team;