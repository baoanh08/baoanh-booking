import City from "../Component/City";
import Type from "../Component/Type";
import Hotel from "../Component/Hotel";
import Header from "../Component/Header";
import Navbar from "../Component/Navbar";
import React from "react";
import FormDK from "../Component/FormDK";
import Footer from "../Component/Footer";
const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <City />
      <div>
        <h1>Browse by property type</h1>
        <Type />
      </div>
      <div>
        <h1>Homes guests love</h1>
        <Hotel />
      </div>
      <div>
        <h1>Homes guests love</h1>
        <Hotel />
      </div>
      <FormDK />
      <Footer />
    </div>
  );
};

export default Home;
