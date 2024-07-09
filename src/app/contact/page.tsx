'use client'
import type { NextPage } from "next";
import { useState } from "react";
import { sendEmail } from "../utils/sendEmail";

const Contact: NextPage = () => {
  const [loading, setLoading] = useState(false)
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const handleSubmit = async (e: React.FormEvent) => {
    setLoading(true)
    e.preventDefault();
    try {
      if(!email) {
        return alert('Please Enter Email!')
      }
      await sendEmail({ from: email, subject, text: message });
      alert('Email sent successfully!');
      setEmail('')
      setSubject('')
      setMessage('')
      setLoading(false)
    } catch (error) {
      alert('Failed to send email. Please try again later.');
      setLoading(false)
    }
  };
  return (
    <>
      <section className="contact section" id="contact">
        <div className="container">
          <div className="row">
            <div className="section-title padd-15">
              <h2>Contact Me</h2>
            </div>
          </div>
          <div className="row">
            <div className="contact-info-item padd-15">
              <div className="icon">
                <i className="fa fa-map-marker" />
              </div>
              <h4>Address</h4>
              <p>116, Amipark Socity, Kargil Chowk, Punagam, Surat, Gujarat, 395010.</p>
            </div>
            <div className="contact-info-item padd-15">
              <div className="icon">
                <i className="fa fa-phone" />
              </div>
              <h4>Call Us On</h4>
              <p>+91 9537267385</p>
            </div>
            <div className="contact-info-item padd-15">
              <div className="icon">
                <i className="fa fa-envelope" />
              </div>
              <h4>Email</h4>
              <p>dharmik.kachhadiya.02@gmail.com</p>
            </div>
          </div>
          <div className="row">
            <form className="contact-form padd-15" onSubmit={handleSubmit}>
              <div className="row">
                <div className="form-item col-6 padd-15">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Name*"
                    />
                  </div>
                </div>
                <div className="form-item col-6 padd-15">
                  <div className="form-group">
                    <input
                      type="email"
                      value={email} 
                      onChange={(e) => setEmail(e.target.value)}
                      className="form-control"
                      placeholder="Email*"
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="form-item col-12 padd-15">
                  <div className="form-group">
                    <input
                      type="text"
                      value={subject} 
                      onChange={(e) => setSubject(e.target.value)}
                      className="form-control"
                      placeholder="Subject*"
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="form-item col-12 padd-15">
                  <div className="form-group">
                    <textarea
                      className="form-control"
                      value={message} 
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Your Message*"
                      defaultValue={""}
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-12 padd-15" style={{ textAlign: 'center' }}>
                  <button type="submit"disabled={loading} className="btn" style={{ backgroundColor: loading ? 'gray' : '' }}>
                    Send Message
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
