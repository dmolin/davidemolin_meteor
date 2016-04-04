import React from 'react'
import Project from './Project.jsx'

class LatestWorks extends React.Component {
  componentDidMount() {
    var mySwiper = new Swiper ('.latest-works .swiper-container', {
      pagination: '.swiper-pagination',
      nextButton: '.swiper-button-next',
      prevButton: '.swiper-button-prev',
      lazyLoading: true,
      preloadImages: false,
      lazyLoadingInPrevNext: true,
      observer:true
    })
  }

  render() {
    const {projects, ...props} = this.props;
    
    return (
      <section className="latest-works section container" {...props}>
        <div className="">
          <header className="section-header">
            <h1 className="section-title">latest works</h1>

            <p>Here is a brief selection of some of the projects I’ve been working on recently. <br />More can be found in my <a className="link" href="https://github.com/dmolin?tab=repositories" target="_blank">GitHub Repositories</a>...</p>
          </header>
          <div className="swiper-container">
            <div className="swiper-pagination"></div>
            <div className="swiper-button-prev"></div>
            <div className="swiper-button-next"></div>

            <ul className="projects swiper-wrapper">
              {projects.map((p, index) => {
                const preload = index === 0;
                return (
                  <div className="section-content swiper-slide pure-grid" key={p._id}>
                      <Project preload={preload} {...p} />
                  </div>
                )
              })}
            </ul>
          </div>
        </div>
      </section>
    )
  }
}

export default LatestWorks;