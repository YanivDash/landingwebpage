import './App.css';
import { Fragment, useEffect } from 'react';
import Header from './component/layout/Header/Header';
import Banner from './component/layout/Banner/Banner.js';
import WebFont from 'webfontloader';
import Cards from './component/layout/Card/Card';
import VariableWidth from './component/layout/BSeller/Gallery';
import Topper from './component/layout/Toppers/Topper';
import Footer from './component/layout/Footer/Footer';

function App() {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Roboto', 'Droid Sans', 'Chilanka'],
      },
    });
  }, []);

  return (
    <Fragment>
      <Header />
      <Banner />
      <Cards />
      <VariableWidth />
      <Topper />
      <Footer />
    </Fragment>
  );
}

export default App;
