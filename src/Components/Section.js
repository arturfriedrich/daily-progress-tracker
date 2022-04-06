import React from "react"
import styled, { keyframes } from "styled-components"


const loading = keyframes`
    0% {
        width: 0%;
    }
    100% {
        width: ${({progress}) => `${progress}%`}
    }
`

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
        if ( progress <= 20 ) return "#DF362D" 
        else if ( progress > 20 && progress <= 50 ) return "#FF8300"
        else if ( progress > 50 ) return "#76B947"
        else return ""
    }};
    height: 50px;
    width: ${({progress}) => `${progress}%` || "0%"};
    animation: 3s ${loading} ease-in;
`

const TodayProgressBar = styled(ProgressBar)`
    background-color: #C197D2;
`

export default function Section({dayName, progress, day}) {
    
    let dayOfTheWeek = new Date().getDay()

    const isToday = day === dayOfTheWeek

    return (
        <StyledSection>
            {dayName === "S" ?
                <WeekendTitle>{dayName}</WeekendTitle> : <WeekdayTitle>{dayName}</WeekdayTitle>}
            <ProgressSection>
                {isToday && <TodayProgressBar progress={progress} />}
                {!isToday && <ProgressBar progress={progress} />}
            </ProgressSection>
        </StyledSection>
    )
}