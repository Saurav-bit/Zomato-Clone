import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Common/Footer'
import Header from './Common/Header'
import TabOptions from './Common/TabOptions'
import Delivery from './Pages/Delivery';
import DiningOut from './Pages/DiningOut';
import NightLife from './Pages/NightLife';
 

export default function App() {

    const [Active,setActive]=useState("Delivery");
    return (
        <div>
           <Header />
           <TabOptions active={Active} setAct={setActive}/>

           {/* {content vary} */}

           {getContent(Active)}
           {/* <h1>{Active}</h1> */}
           <Footer />
        </div>
    )
};

const getContent=(tab)=>{
    switch(tab){
        case "Delivery" :
            return (<Delivery/>);

        case "NightLife" :
                return (<NightLife/>);

        case "Dining Out" :
            return  (<DiningOut/>) ;

        default:
            return  (<Delivery/>);
    }

}
