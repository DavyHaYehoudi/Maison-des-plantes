import Articles from "./Articles";
import Footer from "./Footer";
import Header from "./Header";
import Panier from "./Panier";
import '../styles/conteneur.css';

function App() {
  return (
    <div >
      <Header />
      <div className='conteneur'>
        <Panier />
        <Articles />
      </div>
      <Footer />
    </div>
  );
}

export default App;
