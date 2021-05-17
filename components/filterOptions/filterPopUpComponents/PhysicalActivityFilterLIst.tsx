import * as React from 'react';

import FilterPopUpListGenerator from "./FilterPopUpListComponents/FilterPopUpListGenerator"

export default function PhysicalActivityFilterList(props: any) {
    
    let optionsArray = [
        {   title: 'Movement Based Play',
            key: "0",
        },
        {   title: 'Exercise & Fitness',
            key: "1",
        },
        {   title: 'Team Sport', 
            key: "2",
        },
        {   title: 'Individual Sport', 
            key: "3",
        },
        {   title: 'Nature Based', 
            key: "4",
        }
    ];

     return (
        <FilterPopUpListGenerator 
            optionsArray={optionsArray}
            setOptionSelect={props.setOptionSelect} 
            currentSelections={props.currentSelections}
            modifyCurrentSelections={props.modifyCurrentSelections}
            setPRR={props.setPRR}
            PRR={props.PRR} />
      );
}
