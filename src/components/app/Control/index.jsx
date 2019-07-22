import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { isPossibleDuplicate } from '../../../tools/strings';

import './index.scss';

class Control extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counts: {},
      duplicates: {},
    };

    this.generateCount = this.generateCount.bind(this);
    this.renderCounts = this.renderCounts.bind(this);
    this.renderDuplicates = this.renderDuplicates.bind(this);
    this.findDuplicates = this.findDuplicates.bind(this);
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

  findDuplicates() {
    const { people } = this.props;
    const duplicates = {};

    for (let i = 0; i < people.length; i += 1) {
      for (let j = i + 1; j < people.length; j += 1) {
        if (isPossibleDuplicate(people[i].email_address, people[j].email_address)) {
          duplicates[people[i].email_address] = people[j].email_address;
        }
      }
    }

    this.setState({ duplicates });
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

  renderDuplicates() {
    const { duplicates } = this.state;

    return Object.keys(duplicates).map(duplicate => (
      <div key={duplicate} className="duplicate">
        <div>{duplicate}</div>
        may be a duplicate of
        <div>{duplicates[duplicate]}</div>
      </div>
    ));
  }

  render() {
    return (
      <section className="control">
        <header>Control panel</header>
        <button type="button" onClick={this.generateCount}>Frequency count</button>
        <button type="button" onClick={this.findDuplicates}>Find duplicates</button>
        <hr />
        {this.renderCounts()}
        <div className="duplicates">
          {this.renderDuplicates()}
        </div>
      </section>
    );
  }
}

Control.propTypes = {
  people: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = state => ({ people: state.people.people });

export default connect(mapStateToProps)(Control);
