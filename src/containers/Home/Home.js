import React, { Component } from 'react';

import './Home.less';

export default class Home extends Component {
  render() {
    return (
      <div>
        <h2>Upload CSS Variables with <span>JS</span></h2>
        <div className="controls">
          <label htmlFor="spacing">Spacing:</label>
          <input type="range" name="spacing" min="10" max="200" value="10" />

          <label htmlFor="spacing">Blur:</label>
          <input type="range" name="blur" min="0" max="25" value="10" />

          <label htmlFor="base">Base Color:</label>
          <input type="color" name="base" value="#ffc600" />
        </div>

        <img alt="Background" src="https://source.unsplash.com/7bwQXzbF6KE/800x500" />
      </div>
    );
  }
}
