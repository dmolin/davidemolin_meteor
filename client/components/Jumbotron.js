import React from 'react';


class Jumbotron extends React.Component {
  componentDidMount() {
    let {projects, slideTo, highestIndex} = this.props;

    var mySwiper = new Swiper ('.jumbotron .swiper-container', {
      pagination: '.swiper-pagination',
      nextButton: '.swiper-button-next',
      prevButton: '.swiper-button-prev',
      grabCursor: true,
      observer:true,
      onTransitionStart: (swiper) => {
        let project = projects[swiper.activeIndex]
        slideTo(swiper.activeIndex);
      }
    })
  }

  render() {
    let {className = "", projects, activeIndex = 0, highestIndex = 0, ...props} = this.props;
    let currentItem = (projects.length && projects[activeIndex]) || {};
    let backColor = currentItem.bgColor || (projects.length ? projects[0].bgColor || '#000' : '#000');

    return (
      <section className={className + " jumbotron"} style={{backgroundColor: backColor}}>
        <div className="swiper-container jumbotron-container" >
          <div className="swiper-pagination"></div>
          <div className="swiper-button-prev"></div>
          <div className="swiper-button-next"></div>
          <div className="swiper-wrapper">
            {projects.map((project,index) => {
              //let bgStyleValue = "url(/images/projects/bgtile.jpg) center top repeat";
              let bgStyleValue = "none";
              if(index <= highestIndex+1 ) {
                bgStyleValue = "url(/images/projects/" + project.imageBg + ") center top no-repeat";
              }
              const fgImageBg = "url(/images/projects/" + project.imageFg + ") bottom center no-repeat";
              const fgSize = project.fgSize || 'auto 50%';
              return (
                <article className="jumbotron-item swiper-slide" key={project._id} style={{background: bgStyleValue}}>
                  <div className="jumbotron-image" style={{background: fgImageBg, backgroundSize: fgSize }} />
                </article>
              );
            })}
          </div>
        </div>
      </section>
    );
  }

}

const { arrayOf, object } = React.PropTypes

Jumbotron.propTypes = {
  projects: arrayOf(object).isRequired
};

export default Jumbotron;