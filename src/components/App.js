import Articles from "./Articles";
import Footer from "./Footer";
import Header from "./Header";
import Panier from "./Panier";
import '../styles/conteneur.css';
import { AddArticleProvider } from "../styles/context";

function App() {
  return (
    <div >
      <Header />
      <AddArticleProvider>
        <div className='conteneur'>
          <Panier />
          <Articles />
        </div>
      </AddArticleProvider>
      <Footer />
    </div>
  );
}

export default App;
