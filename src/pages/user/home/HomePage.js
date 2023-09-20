import React from "react";

// import components
import Bar from "../../../components/user/header/bar/Bar";
import Navigation from "../../../components/user/header/navigation/Navigation";
import About from "../../../components/user/about/About";
// import Service from "../components/Service";
import Explore from "../../../components/user/explore/Explore";
import Clients from "../../../components/user/clients/Clients";
import Booking from "../../../components/user/booking/Booking";
import Footer from "../../../components/user/footer/Footer";

// import styles
import "./HomePage.css";

function Home() {
  return (
    <div>
      {/* navigation - start */}
      <Bar />
      <Navigation />
      {/* navigation - end */}

      {/* hero - start */}
      <About />
      {/* hero - end */}

      {/* section - start */}
      {/* <Service /> */}
      <Explore />
      <Clients />
      <Booking />
      {/* section - end */}

      {/* footer - start */}
      <Footer />
      {/* footer - start */}
    </div>
  );
}

export default Home;
