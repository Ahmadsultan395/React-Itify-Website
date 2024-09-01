import React, { useEffect, useState } from 'react'
import "./Contact_home.css"
import AOS from 'aos'
import '../../../../node_modules/aos/dist/aos.css'
import Axios from "axios"

const ContactHome=()=>{
useEffect(()=>{
    AOS.init({duration:2000})
},[])

const url="https://laravel.itify.website/api/contactform";
const [data,setdata]=useState({
    firstname:'',
    lastname:'',
    email:'',
    message:''
})
const [formsubmition,setformsubmition]=useState(false);

const handleSubmit=(e)=>{
    e.preventDefault();
    Axios.post(url,{
        firstName:data.firstname,
        lastName:data.lastname,
        email:data.email,
        message:data.message
        })
        .then(res=>{
            console.log(res.data);
            setformsubmition(true);
            setdata({
                firstname:'',
                lastname:'',
                email:'',
                message:''
            })
        })
        .catch(error=>console.log(error));
}


const handleChange=(e)=>{
    const newdata={...data};
    newdata[e.target.id]=e.target.value;
    setdata(newdata);
    console.log(newdata)
}
    return(<>
    
{/* contact us section for desktop */}

    <section className="contact-home-us-section" >
        <div className="contact-home-us-cantainer">
            <div className="contact-home-us-bar">
                <div  className="contact-home-us-bar-div">
                    <h2 data-aos="fade-up">Contact Us</h2>
                    <div data-aos="fade-up" className="contact-home-us-bar-location">
                        <a data-aos="fade-up" href="
                        https://www.google.com/maps/place/Shadman+Colony+Burewala,+Vehari,+Punjab,+Pakistan/@30.1529563,72.6618944,17z/data=!3m1!4b1!4m6!3m5!1s0x393cdf1cf5e359c7:0xbea267501402ff2d!8m2!3d30.1534453!4d72.6672247!16s%2Fg%2F1td79k1f?entry=ttu">
                            <i className="fa fa-map-marker"></i>burewala,pakistan</a>
                    </div>
                    <div data-aos="fade-up" className="contact-home-us-bar-location">
                        <a data-aos="fade-up" href="mailto:support@itify.website"><i className="fa fa-envelope"></i>support@itify.website</a>
                    </div>
                    <div data-aos="fade-up" className="contact-home-us-bar-location">
                        <a data-aos="fade-up" href="tel:+923361663905"><i className="fa fa-phone"></i>+923361663905</a>
                    </div>
                </div>
            </div>
            <div  className="contact-home-us-form" >
                <form className="contact-home-us-form-div"  method="POST" >
                    <h2 data-aos="fade-up">Send US A Message</h2>
                    <input onChange={handleChange} value={data.firstname} id='firstname' data-aos="fade-up" type="text" placeholder="First Name" name='firstName'/>
                    <input onChange={handleChange} value={data.lastname} id='lastname' data-aos="fade-up" type="text" placeholder="Last Name" name='lastName'/>
                    <input onChange={handleChange} value={data.email} id='email' data-aos="fade-up" type="email" placeholder="Email Address" name='email'/>
                    <input onChange={handleChange} value={data.message} id='message' data-aos="fade-up" type="message" placeholder="Write a message" name='message'/>
                    <button data-aos="fade-up" type='submit' onClick={handleSubmit}>SEND</button>
                    {formsubmition && 
                    <div className='container-fluid my-3 col-lg-8' style={{backgroundColor:'lightgreen'}}>
                    <p className='px-1  text-center' style={{marginTop:'1rem'}}>Your Form is Submitted</p>
                        </div>}
                </form>
            </div>

        </div>

    </section>

{/* end */}


    {/* <!-- contact  us for mobile ///////////////////////////////////////////////////// --> */}
    <section className="contact1-home-us-section">
        <div className="contact1-home-us-cantainer">
            <div className="contact1-home-us-bar">
                <div className="contact1-home-us-bar-div">
                    <h2 data-aos="fade-up">Contact Us</h2>
                    <div data-aos="fade-up" className="contact1-home-us-bar-div-fa">
                        <div data-aos="fade-up" className="contact1-home-us-bar-location">
                            <a data-aos="fade-up" href="
                            https://www.google.com/maps/place/Shadman+Colony+Burewala,+Vehari,+Punjab,+Pakistan/@30.1529563,72.6618944,17z/data=!3m1!4b1!4m6!3m5!1s0x393cdf1cf5e359c7:0xbea267501402ff2d!8m2!3d30.1534453!4d72.6672247!16s%2Fg%2F1td79k1f?entry=ttu">
                                <i className="fa fa-map-marker"></i>burewala,pakistan</a>
                        </div>
                        <div data-aos="fade-up" className="contact1-home-us-bar-location">
                            <a data-aos="fade-up" href="mailto:support@itify.website"><i className="fa fa-envelope"></i>support@itify.website</a>
                        </div>
                        <div data-aos="fade-up" className="contact-home-us-bar-location">
                            <a data-aos="fade-up" href="tel:+923361663905"><i className="fa fa-phone"></i>+923361663905</a>
                        </div>
                    </div>
                </div>
            </div>
            `<div className="contact1-home-us-form">
                <form className="contact1-home-us-form-div"  method="POST">
                    <h2 data-aos="fade-up">Send US A Message</h2>
                    <input onChange={handleChange} value={data.firstname} id='firstname' data-aos="fade-up" type="text" placeholder="First Name" name='firstName' required/>
                    <input onChange={handleChange} value={data.lastname} id='lastname' data-aos="fade-up" type="text" placeholder="Last Name" name='lastName' required/>
                    <input onChange={handleChange} value={data.email} id='email' data-aos="fade-up" type="email" placeholder="Email Address" name='email' required/>
                    <input onChange={handleChange} value={data.message} id='message' data-aos="fade-up" type="message" placeholder="Write a message" name='message' required/>
                    <button data-aos="fade-up" type='submit'  onClick={handleSubmit}>SEND</button>
                    {formsubmition && 
                    <div className='container-fluid my-3 col-lg-8 ' style={{backgroundColor:'lightgreen'}}>
                    <p className='px-1 text-white text-center' style={{marginTop:'1rem'}}>Your Form is Submitted</p>
                        </div>}
                </form>
            </div>

        </div>
    </section>
    {/* <!-- ///////////////////////////////////////////////////////////////////// --> */}


    </>)
}
export default ContactHome;
