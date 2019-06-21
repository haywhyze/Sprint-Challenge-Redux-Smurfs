import React, { Component } from 'react';
import { connect } from "react-redux";
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { fetchSmurfs, addOneSmurf } from '../actions';
import './App.css';
import Smurfs from './SmurfsList';
import SmurfForm from './SmurfForm';

const StyledNavLinks = styled(NavLink)`
  padding: 1rem 2rem;
  margin: .5rem;
  display: inline-block;
  text-decoration: none;
  color: white;
  background: rgb(161,21,29);
`;

export class App extends Component {

  componentDidMount() {
    this.props.fetchSmurfs();
  }

  render() {
    const { smurfs, fetchingSmurfs, addingSmurf, addOneSmurf } = this.props;
    return (
      <Router>
        <div style={{ textAlign: 'center' }}>
        <StyledNavLinks to='/'>Smurfs</StyledNavLinks>
        <StyledNavLinks to='/smurf-form'>Add New Smurfs</StyledNavLinks>
        <Route
          exact
          path={['/', '/smurfs']}
          render={(props => 
            <Smurfs 
              {...props} 
              smurfs={smurfs}
              fetchSmurfs={fetchingSmurfs} 
            />)
          }
        />
        <Route
          exact
          path='/smurf-form'
          render={(props => 
            <SmurfForm 
              {...props} 
              addSmurf={addOneSmurf}
              addingSmurf={addingSmurf} 
            />)
          }
        />
        </div>
      </Router>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    smurfs: state.smurfs,
    fetchingSmurfs: state.fetchingSmurfs,
    addingSmurf: state.addingSmurf,
    error: state.error,
  };
}

export default connect(
  mapStateToProps,
  {
    fetchSmurfs,
    addOneSmurf
  }
)(App);
