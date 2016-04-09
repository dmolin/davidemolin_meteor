import React from 'react';
import SocialIcons from './SocialIcons';

class AboutMe extends React.Component {
  render() {
    const props = this.props

    return (
      <section className="about-me shaded section" {...props}>
        <div className="container">
          <header className="section-header">
            <h1 className="section-title">About me</h1>
          </header>
          <div className="section-content pure-grid">
            <div className="about-me-image pure-u-1 pure-u-md-1-3 pure-u-lg-1-4">
              <a href="//linkedin.com/in/davidemolin" target="_blank">
                <img className="cameo pure-img" title="dmolin-quarter" src="/images/me250.jpg" alt="Picture of myself" />
              </a>
              <p className="testimonial-data testimonial-name">Davide Molin</p>
              <p className="testimonial-data">Have a look at my <a className="link" target="_blank" href="https://www.linkedin.com/in/davidemolin">LinkedIn profile</a></p>
            </div>
            <div className="about-me-content pure-u-1 pure-u-md-2-3 pure-u-lg-3-4">
              <p>Hi, I’m Davide and CodingShack is the company I founded to provide professional Development services to my clients.</p>
              <p>I’m a Front End Developer (with a bit of Fullstack too), with a passion for Web Standards, Javascript programming, Front End Development in general and the World Wide Web.</p>
              <p>I've been writing code professionally since 1995, starting with C and C++, then Java Web development (in 2001), eventually falling in love with Front End development and dynamic languages (since 2004).</p>
              <p>Nowaday I specialise in Front-End and FullStack Development and offer consultancy in this space. I love technology, frameworks, design patterns and making the world a better place through the use of technology. I'm always up for learning new stuff.</p>

              <h2>technologies I've been working with</h2>
              <ul className="taglist cf">
                <li className="taglist__item">MeteorJS</li>
                <li className="taglist__item">Unit Testing</li>
                <li className="taglist__item">AngularJs</li>
                <li className="taglist__item">Backbone.js</li>
                <li className="taglist__item">Node.js</li>
                <li className="taglist__item">MongoDB</li>
                <li className="taglist__item">Browserify</li>
                <li className="taglist__item">Mocha + Chai</li>
                <li className="taglist__item">PhantomJs</li>
                <li className="taglist__item">Grunt</li>
                <li className="taglist__item">Javascript</li>
                <li className="taglist__item">Html and CSS</li>
                <li className="taglist__item">CSS Preprocessors (SASS/LESS)</li>
                <li className="taglist__item">Responsive Development</li>
              </ul>

              <h2>technologies I'm addressing at the moment</h2>
              <ul className="taglist cf">
                <li className="taglist__item">MeteorJS 1.3</li>
                <li className="taglist__item">React + Redux</li>
              </ul>
            </div>

            <SocialIcons />
          </div>
        </div>
      </section>
    )
  }
}

export default AboutMe