import React from 'react'
import Footer from './Footer'

const NotFound = ({content = () => null}) => (
  <section className="home" data-id="home">
    <p className="section section-header">this is not the page you were looking for...</p>
    <Footer />
  </section>
)

export default NotFound