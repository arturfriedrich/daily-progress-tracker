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
          <Section dayName={"M"} />
          <Section dayName={"T"} />
          <Section dayName={"W"} />
          <Section dayName={"T"} />
          <Section dayName={"F"} />
          <Section dayName={"S"} />
          <Section dayName={"S"} />
        </div>
      </>
    );
  }
}

ReactDOM.render(<Main />, document.getElementById('root'))


//TO DO:
// move Section to its own file
// make sure the WeekdayTitle is moved with it
// export Section so we can use it in our index.js file
// pass through text as a prop