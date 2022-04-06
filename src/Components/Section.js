import React from "react"
import styled from "styled-components"


const StyledSection = styled.div`
    background-color: #ffffff;
    border: solid 3px grey;
    margin: 4px;
    width: 300px;
    height: 50px;
    border-radius: 10px;
    display: flex;
    justify-content: left;
    font-size: 40px;
    color: #ff6961;
`

const WeekdayTitle = styled.div`
    display: flex;
    justify-content: center;
    min-width: 50px;
    border-right: solid 3px lightgrey;
`

const WeekendTitle = styled(WeekdayTitle)`
    background-color: lightgrey;
    border-radius: 7px 0 0 7px;
`

const ProgressSection = styled.div`
    width: 250px;
`

const ProgressBar = styled.div`
    background-color: ${({progress}) => {
        if ( progress <= 20 ) return "#76B947" 
        else if ( progress > 20 && progress <= 50 ) return "#FF8300"
        else return "#DF362D"
    }};
    height: 50px;
    width: ${({progress}) => `${progress}%` || "0%"};
`

export default function Section({dayName, progress}) {
    return (
        <StyledSection>
            {dayName === "S" ?
                <WeekendTitle>{dayName}</WeekendTitle> : <WeekdayTitle>{dayName}</WeekdayTitle>}
            <ProgressSection>
                <ProgressBar progress={progress} />
            </ProgressSection>
        </StyledSection>
    )
}