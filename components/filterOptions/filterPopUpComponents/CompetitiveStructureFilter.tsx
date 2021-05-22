import * as React from 'react';

import FilterPopUpListGenerator from "./FilterPopUpListComponents/FilterPopUpListGenerator"

export default function CompetitiveStructureFilter(props: any) {

    let optionsArray = [
        {   title: 'Competitive (No Cuts)',
            key: "0",
        },
        {   title: 'Non- Competitive',
            key: "1",
        },
        {   title: 'Competitive (Cuts)', 
            key: "2",
        },
        {   title: 'Sports-Based Youth Development', 
            key: "3",
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
            setApplyFilter={props.setApplyFilter}/>
      );
}
