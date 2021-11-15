import React from 'react';
import "./TabOptions.css";


const tabs=[
    {
        id:1,
        name:"Delivery",
        active_image:"https://b.zmtcdn.com/data/o2_assets/c0bb85d3a6347b2ec070a8db694588261616149578.png?output-format=webp",
        inactive_image:"https://b.zmtcdn.com/data/o2_assets/246bbd71fbba420d5996452be3024d351616150055.png",
        color:"rgb(252, 238, 192)"
    },
    {
        id:2,
        name:"Dining Out",
        active_image:"https://b.zmtcdn.com/data/o2_assets/30fa0a844f3ba82073e5f78c65c18b371616149662.png",
        inactive_image:"https://b.zmtcdn.com/data/o2_assets/78d25215ff4c1299578ed36eefd5f39d1616149985.png",
        color:"rgb(229, 243, 243)"   
    },
    {
        id:3,
        name:"NightLife",
        active_image:"https://b.zmtcdn.com/data/o2_assets/855687dc64a5e06d737dae45b7f6a13b1616149818.png",
        inactive_image:"https://b.zmtcdn.com/data/o2_assets/01040767e4943c398e38e3592bb1ba8a1616150142.png",
        color:"rgb(237, 244, 255)"
    },

]
function TabOptions({active,setAct}) {

    
    return (
        <div className='tab-options'>
            {/* <button onClick={()=>{props.setAct("NightLife")}}>on clic</button> */}
            {/* <h1>{active}</h1>  */}
            {/* this is tab options */}

            <div className='option-wrapper max-width' >
                {tabs.map((tab)=>{
                    return (
                            <div onClick={()=>setAct(tab.name)}
                            className={`tab-item abs-cen cur-po 
                            ${active===tab.name && "active-tab"}`}>

                                <div className='tab-image-contain abs-cen'
                                style={{backgroundColor:`${active===tab.name ? tab.color :""}`}}
                                >
                                    <img className='tab-image'
                                    alt={tab.name}
                                    src={
                                        active===tab.name ? tab.active_image : tab.inactive_image
                                    }
                                    />
                                    
                                    
                                </div>
                                <div className='tab-name abs-cen'>
                                    {tab.name}

                                </div>
                            


                            </div>
                    );
                })}

            </div>
        </div>
    )
}

export default TabOptions;
