import React from 'react'
import ReactDOM from 'react-dom'
import styled from "styled-components"

import Section from "./Components/Section" 

import "./styles.css"


const Title = styled.h1`
    color: #b19cd9;
`

class Main extends React.Component {
  render() {
    return (
      <>
        <Title>Progress Tracker</Title>
        <div>
          <Section dayName={"M"} progress={30} day={1} />
          <Section dayName={"T"} progress={70} day={2} />
          <Section dayName={"W"} progress={100} day={3} />
          <Section dayName={"T"} progress={80} day={4} />
          <Section dayName={"F"} progress={10} day={5} />
          <Section dayName={"S"} progress={0} day={6} />
          <Section dayName={"S"} progress={20} day={7} />
        </div>
      </>
    );
  }
}

ReactDOM.render(<Main />, document.getElementById('root'))

// TO DO:
// make a ProgressBar component
// pass through a progress value
// make width dependant on progress value
// make color dependant on progress value