import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Component/Navbar";
import Header from "./Component/Header";
import About from "./Component/About";
import Blog from "./Component/Blog";
import Contact from "./Component/Contact";
import Helo from "./Component/Helo";

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Header />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/help" element={<Helo/>}/>
        </Routes>
      </div>
    );
  }
}
