import React from 'react';
import SocialIcons from './SocialIcons';

export default (props) => (
  <section className="get-in-touch section" {...props}>
    <div className="container">
      <header className="section-header">
        <h1 className="section-title">Get in touch</h1>
      </header>
      <div className="section-content">
        <p>Interested in my services? Please get in touch! shoot me an email at <a href="mailto:davide@codingshack.com">davide@codingshack.com</a> or reach out to me through my social links!</p>

        <SocialIcons />

        {/*
        <div className="contact-form pure-grid" >
          <form className="pure-form contact-form-area">
          <div className="padded-sm pure-u-1 pure-u-md-1-2 pure-u-lg-1-3">
            <input type="text" className="form-input" placeholder="Name" />
            <input type="text" className="form-input" placeholder="Email" />
            <input type="text" className="form-input" placeholder="Subject" />
          </div>
          <div className="padded-sm pure-u-1 pure-u-md-1-2 pure-u-lg-2-3">
            <textarea className="form-input contact-form-message" placeholder="Type your message here..." />
            <div className="action-area">
              <button className="pure-button pure-button-primary button-wide"><span className="title">GET IN TOUCH!</span></button>
            </div>
          </div>
          </form>
        </div>
        */}
      </div>
    </div>
  </section>
)