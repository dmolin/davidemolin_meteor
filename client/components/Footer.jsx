import React from 'react';

class Footer extends React.Component {
  render() {
    return (
      <section className="footer section">
        <div className="container">
          <div className="copyright">
            <p className="copyright-text">== Powered by MeteorJS-React ==</p>
            <p className="copyright-text">© Copyright 2016 www.davidemolin.com. All rights reserved.</p>
          </div>
        </div>
      </section>
    )
  }
}

export default Footer