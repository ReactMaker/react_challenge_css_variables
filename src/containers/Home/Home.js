import React, { Component } from 'react';

import './Home.less';

export default class Home extends Component {
  state = {
    spacing: 10,
    blur: 10,
    base: '#ffc600',
  }

  onChange = (key, value) => {
    this.setState({
      [key]: value,
    });
  }

  render() {
    const { spacing, blur, base } = this.state;

    const spanStyle = {
      color: base,
    };

    const imageStyle = {
      padding: `${spacing}px`,
      filter: `blur(${blur}px)`,
      background: base,
    };

    return (
      <div>
        <h2>Upload CSS Variables with
          <span style={spanStyle}>JS</span>
        </h2>
        <div className="controls">
          <label htmlFor="spacing">Spacing:</label>
          <input
            type="range"
            min="10"
            max="200"
            value={spacing}
            onChange={e => this.onChange('spacing', e.target.value)}
          />

          <label htmlFor="spacing">Blur:</label>
          <input
            type="range"
            min="0"
            max="25"
            value={blur}
            onChange={e => this.onChange('blur', e.target.value)}
          />

          <label htmlFor="base">Base Color:</label>
          <input
            type="color"
            value={base}
            onChange={e => this.onChange('base', e.target.value)}
          />
        </div>

        <img style={imageStyle} alt="Background" src="https://source.unsplash.com/7bwQXzbF6KE/800x500" />
      </div>
    );
  }
}
