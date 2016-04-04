import React from 'react';

import AboutMe from './AboutMe'
import Jumbotron from '../containers/Jumbotron'


const Home = ({content = () => null}) => (
  <section className="home" data-id="home">
    <Jumbotron />
    <AboutMe data-id="about-me"/>
  </section>
);

export default Home;