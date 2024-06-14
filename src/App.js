import Header from "./components/js/Header";
import Section1 from "./components/js/section1";
import ShopCollections from "./components/js/ShopCollection";
import HotCategories from "./components/js/HotCategories";
import TopProducts from "./components/js/TopProducts";
import SalesUp from "./components/js/SalesUp";
import ClientReview from "./components/js/ClientReview";
import FirstOrder from "./components/js/FirstOrder";
import FollowUs from "./components/js/FollowUs";
import Footer from "./components/js/Footer";

function App() {
  return (
    <div className="App">
   

    <Header/>
    <Section1/>
    <ShopCollections/>
    <HotCategories/>
    <TopProducts/>
    <SalesUp/>
    <ClientReview/>
    <FirstOrder/>
    <FollowUs/>
    <Footer/>
    

   
    </div>
  );
}

export default App;
