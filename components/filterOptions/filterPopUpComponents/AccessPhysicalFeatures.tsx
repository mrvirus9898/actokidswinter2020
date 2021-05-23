import * as React from 'react';

import FilterPopUpListGenerator from "./FilterPopUpListComponents/FilterPopUpListGenerator"

export default function AccessPhysicalFeatures(props: any) {

    let optionsArray = [
        {   title: 'Paved Pathway',
            key: "0",
        },
        {   title: 'Mechanical Lifts',
            key: "1",
        },
        {   title: 'Family Bathroom', 
            key: "2",
        },
        {   title: 'Wheelchair Charging', 
            key: "3",
        },
        {   title: 'Ramps', 
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
            PRR={props.PRR} 
            setApplyFilter={props.setApplyFilter}
            SetFilterOverlay={props.SetFilterOverlay}/>
      );
}
