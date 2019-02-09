import React, { Component } from 'react';
import axios from 'axios';

// our stateless component that structures the performers
const Performer = props => (
  <ul>
    <li>{props.performers.name}</li>
    <li>{props.performers.attribute}</li>
    <li>{props.performers.price}</li>
    <li>{props.performers.location}</li>
  </ul>
);

export default class Performers
  extends Component {

  constructor(props) {
    super(props);
    this.state = { performers: []};
  }

  // Using axios lets us get cross origin data
  componentDidMount() {
    axios.get('http://localhost:3001/')
      .then(res => {
        this.setState({ performers: res.data });
      })
      .catch(function(err) {
        console.log(err);
      })
  }

  renderPerformers() {
    return this.state.performers.map(function(current, i) {
      return <Performer performers={current} key={i} />;
    })
  }

  render() {
    return (
      <div>
        <h3>Performer List</h3>
        <body>
          { this.renderPerformers() }
        </body>
      </div>
    )
  }
}