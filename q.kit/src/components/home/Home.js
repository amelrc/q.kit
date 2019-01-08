
import React from 'react'
import Foods from "./Foods"

const Home = () => {
    
return (
    <div className="a container-fluid">
        <div className="row">
        <div className="column float-left">
            <h1 className="a logo">LOGO</h1>
            <h1 className="a about">about</h1>
        </div>
        {/* este tiene que estar en el medio */}
        <div className="b column">
            <h1 className="a qkit">Q<span>.kit</span></h1>
            <Foods />
            <img className="a frying" src="./img/frying_pan.png" alt="frying_pan"/>
        </div>
        <div className="c float-right">
            <h1 className="a">menu</h1>
        </div>
        </div>
    </div>
)

}

export default Home
