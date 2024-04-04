import Services from "../Services/Services";
import Banner from "./Banner/Banner";
import Donation from "./Donation";
import Review from "./Review";

const Home = () => {
  return (
    <div >
      <Banner></Banner>
      <Services></Services>
      <Donation></Donation>
      <Review></Review>
    </div>
  );
};

export default Home;
