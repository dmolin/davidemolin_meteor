import React from 'react';

class MyValues extends React.Component {
  render() {
    const props = this.props

    return (<section className="my-values shaded section" {...props}>
      <div className="container">
        <header className="section-header">
          <h1 className="section-title">My values</h1>
          <p>Here is a brief selection of some of the things that make me happy and I look for and some of those that make this developer a sad puppy! :( </p>
        </header>
        <div className="section-content pure-grid">
          <section className="my-values-section my-values-section--yes pure-u-1 pure-u-md-1-2">
            <h2>Happy days!</h2>

            <ul>
              <li className="my-values-item">Working in Central London</li>
              <li className="my-values-item">Having the time to balance work and private life</li>
              <li className="my-values-item">SCRUM/Kanban</li>
              <li className="my-values-item">Let's do-it approach</li>
              <li className="my-values-item">Problem solving attitudes</li>
              <li className="my-values-item">Flat/horizontal hierarchies</li>
              <li className="my-values-item">Unit Testing</li>
              <li className="my-values-item">Apple Macs & Linux</li>
              <li className="my-values-item">Remote working and flexi time(a <strong>VERY HAPPY</strong> puppy!)</li>
            </ul>
          </section>
          <section className="my-values-section my-values-section--no pure-u-1 pure-u-md-1-2">
            <h2>Sad face</h2>

            <ul>
              <li className="my-values-item">Traveling (please don't!)</li>
              <li className="my-values-item">Working more than 9 hours/day at the office (I can, but I prefer continuing working from home if necessary)</li>
              <li className="my-values-item">The practice of <a className="link" href="https://en.wikipedia.org/wiki/Pair_programming" target="_blank">"Agile Alliance XP pair-programming"</a> (this is not the same as 'working with a colleague".. I love that!)</li>
              <li className="my-values-item">The use of MS Windows</li>
            </ul>
          </section>
        </div>
      </div>
    </section>)
  }
}

export default MyValues