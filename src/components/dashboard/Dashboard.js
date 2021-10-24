import React, {Fragment} from 'react'

//import de layouts
import DHero from "./DHero"
import DVentas from "./DVentas"
import DEmpresa from "./DEmpresa"
import DCard from "./DCard"

import styled from 'styled-components'

const HeroContainer = styled.div`
    width: 90vw;
    margin: 30px auto;
    display: flex;
    flex-direction: column;
    justify-content: center;

`

const Dashboard = () => {
    return (
        <HeroContainer>
            <DHero></DHero>
            <DCard></DCard>
            <DVentas></DVentas>
            <DEmpresa></DEmpresa>

        </HeroContainer>
    )
}

export default Dashboard
