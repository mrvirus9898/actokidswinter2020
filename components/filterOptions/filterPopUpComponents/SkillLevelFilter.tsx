import * as React from 'react';

import FilterPopUpListGenerator from "./FilterPopUpListComponents/FilterPopUpListGenerator"

export default function SkillLevelFilter(props: any) {

    let optionsArray = [
        {   title: 'Beginner',
            key: "0",
        },
        {   title: 'Intermediate',
            key: "1",
        },
        {   title: 'Advanced', 
            key: "2",
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
