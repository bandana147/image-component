import React, { Component } from 'react';
import ImageComponent from 'components/ImageComponent';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to Image Display</h1>
        </header>
        <div className="app-body">
          <div  className="app-cont">
            <ImageComponent
              height="350"
              imageUrl="https://cdn.allwallpaper.in/wallpapers/960x640/2840/blue-skies-flowers-nature-white-960x640-wallpaper.jpg"
              placeholderImageUrl="https://assets.hongkiat.com/uploads/ww-flower-wallpapers/roundflower.jpg"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
