import './App.css';
import Fullbanner from './components/FullBanner/Fullbanner';
import QuemSomos from './components/QuemSomos/QuemSomos'
import Condus from './components/Condus/Condus';
import Noticias from './components/Noticias/Noticias';
import Duvida from './components/Duvida/Duvida';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Fullbanner />
      <QuemSomos />
      <Condus />
      <Noticias />
      <Duvida />
      <Footer />
    </div>
  );
}

export default App;
