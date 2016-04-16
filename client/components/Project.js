import React from 'react'

class Project extends React.Component {
  render() {
    const {image, title, description, githubUrl, liveUrl, prodUrl, liveLabel, videoUrl, itunesUrl, preload} = this.props

    let githubLinkOrNothing
    let liveLinkOrNothing
    let prodLinkOrNothing
    let videoLinkOrNothing
    let itunesLinkOrNothing
    let imageTag

    if(preload) {
      imageTag = <img src={`/images/${image}`} className="pure-img pure-u-1 pure-u-lg-2-3 swiper-lazy"/>
    } else {
      imageTag = <img data-src={`/images/${image}`} className="pure-img pure-u-1 pure-u-lg-2-3 swiper-lazy"/>
    }

    if(githubUrl) {
      githubLinkOrNothing = <a className="pure-button button-success" target="_blank" href={githubUrl}>View on GitHub <i className="fa fa-github"></i></a>
    }
    if(liveUrl) {
      liveLinkOrNothing = <a className="pure-button pure-button-primary" target="_blank" href={liveUrl}>{liveLabel || 'Live Demo!'}</a>
    }
    if(prodUrl) {
      prodLinkOrNothing = <a className="pure-button pure-button-primary" target="_blank" href={prodUrl}>Visit</a>
    }
    if(videoUrl) {
      videoLinkOrNothing = <a className="pure-button pure-button-primary" target="_blank" href={videoUrl}>Video!</a>
    }
    if(itunesUrl) {
      itunesLinkOrNothing = <a className="pure-button pure-button-primary" target="_blank" href={itunesUrl}>View on iTunes <i className="fa fa-apple"></i></a>
    }

    return (
      <div className="project pure-u-1 __pure-u-sm-1-2 __pure-u-md-1-3 __pure-u-lg-1-4">
        {imageTag}
        <div className="swiper-lazy-preloader"></div>
        <div className="project-description pure-u-1 pure-u-lg-1-3">
          <header><h2>{title}</h2></header>

          {description.map((d,idx) => (
            <p key={idx}>{d}</p>
          ))}
          <div className="project-ctas">
            {githubLinkOrNothing}
            {liveLinkOrNothing}
            {prodLinkOrNothing}
            {videoLinkOrNothing}
            {itunesLinkOrNothing}
          </div>  
        </div>
      </div>
    )    
  }
}

export default Project