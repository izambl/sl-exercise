import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import './index.scss';

class Control extends Component {
  constructor(props) {
    super(props);

    this.state = { counts: {} };

    this.generateCount = this.generateCount.bind(this);
    this.renderCounts = this.renderCounts.bind(this);
  }

  /**
   * Generates a new count of people's email unique characters
   *
   * @TODO This function could take too long if a lot of peole are loaded
   *       Refactor to use webworkers
   */
  generateCount() {
    const { people } = this.props;
    const counts = {};

    people.forEach((person) => {
      const email = [...person.email_address];

      email.forEach((character) => {
        // Add 1 to character counts, if it doesn't exists then starts with 0
        counts[character] = (counts[character] || 0) + 1;
      });
    });

    this.setState({ counts });
  }

  renderCounts() {
    const { counts } = this.state;
    const characters = Object.keys(counts); // Gets all unique characters

    characters.sort((a, b) => (counts[b] - counts[a])); // Sorts characters based on their frequency

    return characters.map(character => (
      <div className="character-frequency" key={character}>
        <span className="character">{character}</span>
        <span className="frequency">{counts[character]}</span>
      </div>
    ));
  }

  render() {
    return (
      <section className="control">
        <header><h1>Control panel</h1></header>
        <button type="button" onClick={this.generateCount}>Frequency count </button>
        <hr />
        {this.renderCounts()}
      </section>
    );
  }
}

Control.propTypes = {
  people: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = state => ({ people: state.people.people });

export default connect(mapStateToProps)(Control);
