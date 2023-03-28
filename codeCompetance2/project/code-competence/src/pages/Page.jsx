import "../styles/Page.css";
import Navbar from "../components/Navbar";
import Jumbotron from "../components/Jumbotron";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import About from "../components/About";

function Page() {
  return (
    <>
      <Navbar />
      <Jumbotron />
      <Contact />
      <About />
      <Footer />
    </>
  );
}

export default Page;
