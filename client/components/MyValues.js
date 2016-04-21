import React from 'react';

class MyValues extends React.Component {
  render() {
    const props = this.props

    return (<section className="my-values shaded section" {...props}>
      <div className="container">
        <header className="section-header">
          <h1 className="section-title">My values</h1>
        </header>
        <div className="section-content pure-grid">
          <section className="my-values-section my-values-section--yes pure-u-1 pure-u-md-1-2">
            <h2>My "yes"</h2>

            <ul>
              <li className="my-values-item">I Love working <strong>full time</strong> on Javascript/Html/CSS</li>
              <li className="my-values-item">I live and work in Central London</li>
              <li className="my-values-item">I like balancing work and private life</li>
              <li className="my-values-item"><strong>Yes</strong> quick stand up</li>
              <li className="my-values-item"><strong>Yes</strong> SCRUM</li>
              <li className="my-values-item"><strong>Yes</strong> let's do-it approach</li>
              <li className="my-values-item"><strong>Yes</strong> problem solving</li>
              <li className="my-values-item"><strong>Yes</strong> flat/horizontal hierarchies</li>
              <li className="my-values-item"><strong>Yes</strong> chats/emails</li>
              <li className="my-values-item"><strong>Yes</strong> Unit Testing</li>
              <li className="my-values-item"><strong>Yes Apple Macs & Linux</strong></li>
              <li className="my-values-item"><strong>Yes</strong> remote working and flexi time(a <strong>BIG</strong> YES)</li>
            </ul>
          </section>
          <section className="my-values-section my-values-section--no pure-u-1 pure-u-md-1-2">
            <h2>My "no"</h2>

            <ul>
              <li className="my-values-item"><strong>No</strong> Traveling</li>
              <li className="my-values-item">I'm not interested in permanent opportunities. </li>
              <li className="my-values-item">I try to avoid more than 9 hours/day at the office (but I can continue working from home if necessary)</li>
              <li className="my-values-item">I'm not a fan of the practice of <a href="https://en.wikipedia.org/wiki/Pair_programming" target="_blank">"Agile Alliance XP pair-programming"</a> (this is not the same as 'working with a colleague".. I love that!)</li>
              <li className="my-values-item"><strong>Preferably No MS Windows</strong></li>
            </ul>
          </section>
        </div>
      </div>
    </section>)
  }
}

export default MyValues