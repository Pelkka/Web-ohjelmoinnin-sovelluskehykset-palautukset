import React from 'react'
import './App.css';
import Header from './components/otsikko';
import Diamond from './components/timantit';
import Most from './components/luetuimmat';
import NEWS from './components/uutiset';

function App() {
 
  return (
    <div className='back'>
<Header />
<Diamond fat='PÄIVÄN TIMANTTI' slim=' Tutkija kertoo: Näin sota vaikuttaa meihin vieläkin' />
<Diamond fat='PÄIVÄN TIMANTTI' slim=' aaaaa'/>
<Diamond fat='PÄIVÄN TIMANTTI' slim=' bbbbb' />
<div className='row'>
<Most O='PÄIVITETTY SEURANTA' U='STM: Parasetamolia tai deksametasonia sisältävien lääkkeiden myyntiä rajoitetaan'/>
<div className='column'>
<div className='article'>Luetuimmat</div>
<NEWS abc='1' fat='Rikosepäilyt |' slim=' EIT-huijaus: kuolleeksi väitetyn irakilaismiehen tytär valehteli perheen taustoista jo turvapaikkahakemuksessa'/>
<NEWS abc='2' fat='HS Vantaa |' slim=' Vantaalla nousi vankilan näköinen päiväkoti, jota pilkataan nyt surutta verkossa.'/>
<NEWS abc='3' fat='Päivittyvä seuranta |' slim='STM: Parasetamolia tai deksametasonia sisältävien lääkkeiden myyntiä rajoitetaan'/>
<NEWS abc='4' fat='Rikosepäilyt |' slim=' bbbbbbbbbbbb'/>
</div>
</div>
    </div>
  );
}

export default App;
