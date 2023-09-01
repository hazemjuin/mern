import React from 'react';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Main from './components/Main';
import SubContents from './components/SubContents';
import Advertisement from './components/Advertisement';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Navigation />
      <Main>
        <SubContents />
        <Advertisement />
      </Main>
    </div>
  );
}

export default App;