import React from 'react';

class MessageOverlay extends React.Component {
  displayMessage() {
    let {message, tagline} = this.props;

    if(message || tagline) {
      $('.message-overlay').addClass('message-overlay--visible');
    }
  }

  render() {
    const {message, tagline} = this.props

    if(message || tagline) {
      setTimeout(this.displayMessage.bind(this), 1000);
    }

    return (
      <div className="message-overlay">
        {message ? <p className="message title">{message}</p> : ''}
        {tagline ? <p className="tagline title">{tagline}</p> : ''}
      </div>
    )
  }
}

export default MessageOverlay;