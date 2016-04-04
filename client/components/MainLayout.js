import React from 'react';
import Navbar from './Navbar';

const Layout = (props) => (
  <section className="layout-wrapper">
    <Navbar />
    <section className="layout-content">
      {props.children}
    </section>
  </section>
);

export default Layout;