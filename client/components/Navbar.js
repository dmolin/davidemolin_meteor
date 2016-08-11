import React from 'react';

class Navbar extends React.Component {
  constructor(...args) {
    super(...args);
    this.goTo = this.goTo.bind(this);
  }

  render() {
    return (
      <section className="navbar-wrapper">
        <div className="navbar container pure-g">
          <div className="navbar-brand pure-u-1 pure-u-md-1-4">
            <a href="/" className="navbar-brand-logo">
              <h1 className="structural">Codingshack ltd</h1>
            </a>
          </div>
          <nav className="navbar-items navigation pure-u-1 pure-u-md-3-4">
            <ul className="pure-menu-horizontal" onClick={this.goTo}>
              <li className="navigation-item pure-menu-item"><a data-target="home" href="#">Home</a></li>
              <li className="navigation-item pure-menu-item"><a data-target="about-me" href="#" >About me</a></li>
              <li className="navigation-item pure-menu-item"><a data-target="testimonials" href="#" >Testimonials</a></li>
              <li className="navigation-item pure-menu-item"><a data-target="works" href="#" >Works</a></li>
              <li className="navigation-item pure-menu-item"><a data-target="values" href="#" >Values</a></li>
              <li className="navigation-item pure-menu-item"><a data-target="contact" href="#" >Contact</a></li>
            </ul>
          </nav>
        </div>
      </section>
    );
  }

  goTo(e) {
    e.preventDefault();
    const $el = $(e.target);
    const $target = $('[data-id=' + $el.data('target') + ']');
    if(!$target || !$target.offset()) return;

    $('html,body').animate({
      scrollTop: $target.offset().top - 40
    }, 1000);
    return false;
  }
}

export default Navbar;
