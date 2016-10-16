import React from 'react';

import AboutMe from './AboutMe'
import Jumbotron from '../containers/Jumbotron'
import Testimonials from '../containers/Testimonials'
import FunFacts from '../components/FunFacts'
import LatestWorks from '../containers/LatestWorks'
import MyValues from '../components/MyValues'
import GetInTouch from '../components/GetInTouch'
import Footer from '../components/Footer'

const Home = ({content = () => null}) => (
  <section className="home" data-id="home">
    <div className="jumbotron-wrapper"><Jumbotron /></div>
    <AboutMe data-id="about-me"/>
    <Testimonials data-id="testimonials" />
    <FunFacts />
    <LatestWorks data-id="works" />
    <MyValues data-id="values" />
    <GetInTouch data-id="contact" />
    <Footer />
  </section>
);

export default Home;
