import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import ThemeProvider from './ThemeProvider';
import MainContent from './Pages/MainContent';

import Header from './Pages/Header';
import DropDown from './Pages/Nav/DropDown';
import Characters from './Characters/Characters';
import CharacterPage from './Characters/CharacterPage';
import Comics from './Comics/Comics';
import ChatDen from './Chat/ChatDen';
import Videos from './Videos/Videos';
import VideoPlay from './Videos/VideoPlay';
import Crafts from './Crafts/Crafts';
import CraftsPage from './Crafts/CraftPage';
import Store from './Store/Store';
import Downloads from './Downloads/Downloads';
import Games from './Games/Games';
import GamePage from './Games/GamePage';
import GameTagResults from './Games/Tags/GameTagResults';
import GameTagCResults from './Games/Tags/GameTagCResults';
import Footer from './Pages/Footer';
import Home from './Pages/Home';
import Articles from './Pages/News/Articles';
import ArticlePage from './Pages/News/ArticlePage';
import Alpha from './Pages/Alpha';
import NotFound from './Pages/NotFound';
import ArrowToTop from './ArrowToTop';

import './Pages/Pages.css';

import Helmet from 'react-helmet';
import ComicStrip from './Comics/ComicStrip';

function App() {
  return (
    <ThemeProvider>
      <ArrowToTop />
      <div>
        <Helmet>
          <title>JMKit.com: Home</title>
        </Helmet>
        <div className="Main">
          <div className="contentWrap">
            <Router>
              <div className="topOver">
                <DropDown />
                <Header />
              </div>
              <div className="allPages">
                <MainContent>
                  <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/characters/" component={Characters} />
                    <Route
                      exact
                      path="/characters/:name"
                      component={CharacterPage}
                    />
                    <Route exact path="/comics/" component={Comics} />
                    <Route exact path="/comics/:name" component={ComicStrip} />
                    <Route exact path="/videos/" component={Videos} />
                    <Route exact path="/videos/:name" component={VideoPlay} />
                    <Route exact path="/crafts/" component={Crafts} />
                    <Route exact path="/crafts/:name" component={CraftsPage} />
                    <Route exact path="/store/" component={Store} />
                    <Route exact path="/downloads/" component={Downloads} />
                    <Route exact path="/games/" component={Games} />
                    <Route
                      exact
                      path="/games/tags/:name"
                      component={GameTagResults}
                    />
                    <Route
                      exact
                      path="/games/characters/:name"
                      component={GameTagCResults}
                    />
                    <Route path="/games/:name" component={GamePage} />
                    <Route exact path="/articles/" component={Articles} />
                    <Route
                      exact
                      path="/articles/:name"
                      component={ArticlePage}
                    />
                    <Route exact path="/chat/:name" component={ChatDen} />
                    <Route path="/alpha/" exact component={Alpha} />
                    <Route path="*" component={NotFound} />
                  </Switch>
                </MainContent>
              </div>
              <div className="Footer">
                <Footer />
              </div>
            </Router>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
