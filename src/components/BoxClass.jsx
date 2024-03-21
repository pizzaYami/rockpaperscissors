import React, { Component } from "react";

export default class BoxClass extends Component {
  render() {
    return (
      <div className="box">
        <h2>{this.props.title}</h2>
        <img src={this.props.data.url} alt={this.props.data.name} />
        <h2 className={`${this.props.result}`}> {this.props.result}</h2>
      </div>
    );
  }
}
