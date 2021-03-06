import {Route, Routes } from 'react-router-dom';
import './App.css';
import MoviesPage from "./components/pages/MoviesPage"
import React, { Component } from 'react'
import { Container} from 'semantic-ui-react'
import Footer from './components/Footer';
import Header from './components/Header';
import NewMoviePage from './components/pages/NewMoviePage';
import HomePage from './components/pages/HomePage';

export default class App extends Component {
   handleOverlayRef = (c) => {
    const { overlayRect } = this.state
 }
  render() {
    return (
      <div>
        <Header/>
        <Container text>
          <hr />
          <Routes>
            <Route path='/' element={<HomePage/>} />
            <Route path='/movies' element={<MoviesPage />} />
            <Route path="/movies/new" element={<NewMoviePage/>} />
            <Route path="/movies/new/:id" element={<NewMoviePage/>} />
          </Routes>
        </Container>
        <Footer />
      </div>
    )
  }
}