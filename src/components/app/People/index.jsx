import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { loadPeople as loadPeopleAction } from '../../../redux/actions/peopleActions';

import Person from '../Person';

import './index.scss';

export class People extends Component {
  static renderLoading() {
    return <p>Loading people...</p>;
  }

  componentDidMount() {
    const { people, loading, loadPeople } = this.props;

    if (!loading && people.length === 0) {
      loadPeople();
    }
  }

  renderError() {
    const { lastError } = this.props;

    return (
      <p>
        An error ocurred:
        {lastError}
      </p>
    );
  }

  render() {
    const { people, lastError, loading } = this.props;

    if (loading) {
      return People.renderLoading();
    }

    if (!loading && lastError) {
      return this.renderError();
    }

    return (
      <section className="people">
        <header>People list</header>
        <ul>
          {people.map(person => <li key={person.id}><Person {...person} /></li>)}
        </ul>
      </section>
    );
  }
}

People.propTypes = {
  people: PropTypes.arrayOf(PropTypes.object).isRequired,
  loading: PropTypes.bool.isRequired,
  lastError: PropTypes.string,
  loadPeople: PropTypes.func.isRequired,
};

People.defaultProps = {
  lastError: null,
};

const mapStateToProps = ({ people: { people, lastError, loading } }) => ({
  people,
  lastError,
  loading,
});

export default connect(mapStateToProps, { loadPeople: loadPeopleAction })(People);
