import React from 'react';

class FunFacts extends React.Component {
  render() {
    const {className = "", ...props} = this.props;
    return (
      <section className={className + " funfacts"} >
        <div className="section-content pure-grid container">
          <div className="funfact pure-u-1 pure-u-sm-1-2 pure-u-md-1-3 pure-u-lg-1-5">
            <i className="funfact-icon fa fa-briefcase"></i>
            <span className="funfact-atom funfact-value">21+</span>
            <span className="funfact-atom funfact-description title">years worked</span>
          </div>
          <div className="funfact pure-u-1 pure-u-sm-1-2 pure-u-md-1-3 pure-u-lg-1-5">
            <i className="funfact-icon fa fa-clock-o"></i>
            <span className="funfact-atom funfact-value">41580+</span>
            <span className="funfact-atom funfact-description title">hours worked</span>
          </div>
          <div className="funfact pure-u-1 pure-u-sm-1-2 pure-u-md-1-3 pure-u-lg-1-5">
            <i className="funfact-icon fa fa-mortar-board"></i>
            <span className="funfact-atom funfact-value">12600+</span>
            <span className="funfact-atom funfact-description title">hours of additional training</span>
          </div>
          <div className="funfact pure-u-1 pure-u-sm-1-2 pure-u-md-1-3 pure-u-lg-1-5">
            <i className="funfact-icon fa fa-users"></i>
            <span className="funfact-atom funfact-value">25</span>
            <span className="funfact-atom funfact-description title">clients served</span>
          </div>
          <div className="funfact pure-u-1 pure-u-sm-1-2 pure-u-md-1-3 pure-u-lg-1-5">
            <i className="funfact-icon fa fa-code-fork"></i>
            <span className="funfact-atom funfact-value">50+</span>
            <span className="funfact-atom funfact-description title">projects worked</span>
          </div>
        </div>
      </section>
    )
  }
}

export default FunFacts;