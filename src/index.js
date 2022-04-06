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
          <Section dayName={"M"} progress={100} />
          <Section dayName={"T"} progress={80} />
          <Section dayName={"W"} progress={70} />
          <Section dayName={"T"} progress={60} />
          <Section dayName={"F"} progress={40} />
          <Section dayName={"S"} progress={20} />
          <Section dayName={"S"} progress={10} />
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