import React from 'react'

import Header from '../layout/Header'
import Footer from '../layout/Footer'

import TsssT from "../Images/111.png"

const Transacciones = () => {
    return (
        <div

        
        style={{
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column'
        }}>
            <Header autenticado={true}/>

            <img src={TsssT} alt="" 
            style={{
                maxWidth: '90%',
                margin: "0 auto",
            }}
            />
            <Footer />
        </div>
    )
}

export default Transacciones
