import React, { Component } from 'react';
import './App.css';
import Header from './Header'
import Article from './Article'
import Ad from './Ad'
import Footer from './Footer'
import ArticleLink from './ArticleLink'
import OtherArticle from './OtherArticle'

class App extends Component {
  render() {
    return (
      <div className="App">
            
            <Header />
        
        <main className="expanded row">
           
            <Article />
            
            <ArticleLink />
            
            <Ad />

            <OtherArticle />
          
        </main>

            <Footer />
            
      </div>
    );
  }
}

export default App;
