import React, { Component } from 'react';
import styled from 'styled-components';

const StyledForm = styled.form`
  max-width: 30rem;
  margin: 0 auto;
  text-align: center;
`

const StyledInput = styled.input`
  display: block;
  margin: .5rem auto;
  padding: .5rem 1rem;
  border: none;
  border-bottom: 2px solid rgba(0, 49, 116, .5);
  width: 15rem;
  box-shadow: 0 0 20px rgba(0,0,0, .1);

  &:focus, &:active {
    outline: none;
    border-bottom: 2px solid rgba(0, 49, 116, .9);
  }
`

export const StyledButton = styled.button`
  padding: .75rem 1.5rem;
  background: rgb(161, 21, 29);
  color: white;
  cursor: pointer;
  box-shadow: 0 0 20px rgba(0,0,0, .1);
  border-radius: .4rem;
`

class SmurfForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      height: ''
    };
  }

  addSmurf = event => {
    event.preventDefault();
    const {name, age, height} = this.state;
    if(!name || !age || !height) return;
    console.log(this.state, this.props)
    this.props.addSmurf(this.state);

    this.setState({
      name: '',
      age: '',
      height: ''
    })
    this.props.history.push('/')
  }

  handleChange = input => event => {
    this.setState({
      [input]: event.target.value 
    })
  }


  render() {
    return (
      <div>
        
        <StyledForm onSubmit={this.addSmurf}>
        <h1>Add New Smurf</h1>
          <StyledInput 
            type='text' 
            value={this.state.name} 
            onChange={this.handleChange('name')} 
            placeholder='Name'
          />
          <StyledInput 
            type='number' 
            value={this.state.age} 
            onChange={this.handleChange('age')} 
            placeholder='Age'
          />
          <StyledInput 
            type='text' 
            value={this.state.height} 
            onChange={this.handleChange('height')} 
            placeholder='Height'
          />
          <StyledButton onClick={this.addSmurf}>
            Add New Smurf
          </StyledButton>
        </StyledForm>
      </div>
    );
  }
}

export default SmurfForm;
