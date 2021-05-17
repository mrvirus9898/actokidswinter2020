import * as React from 'react';

import FilterPopUpListGenerator from "./FilterPopUpListComponents/FilterPopUpListGenerator"

export default function CompetitiveStructureFilter(props: any) {

    let optionsArray = [
        {   title: 'Self-Paced',
            key: "0",
        },
        {   title: 'Light',
            key: "1",
        },
        {   title: 'Moderate', 
            key: "2",
        },
        {   title: 'Vigorous', 
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
            PRR={props.PRR} />
      );
}
