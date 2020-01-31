import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';

import { Header } from './components/header';
import { Home } from './components/home.component/home';
import { Projects } from './components/projects.component/projects';
import { AboutMe } from './components/aboutMe.component/aboutMe';
import { Contacts } from './components/contacts.component/contacts';
import { Footer } from './components/footer/footer';

export const App = () => {
  return (
    <BrowserRouter>
      <div className='wrap'>
        <div className='container'>
          <Header />
          <div className='content_box'>
            <Switch>
              <Route exact path='/portfolio/' component={Home} />
              <Route exact path='/portfolio/projects' component={Projects} />
              <Route exact path='/portfolio/about_me' component={AboutMe} />
              <Route exact path='/portfolio/contacts' component={Contacts} />
              <Route path='/' render={() => <div>Error 404</div>} />
            </Switch>
          </div>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}