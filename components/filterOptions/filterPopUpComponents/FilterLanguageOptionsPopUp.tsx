import * as React from 'react';

import FilterPopUpListGenerator from "./FilterPopUpListComponents/FilterPopUpListGenerator"

export default function FilterLanguageOptionsPopUp(props: any) {

    let optionsArray = [
        {   title: 'Interpreter Services',
            key: "0",
        },
        {   title: 'Multiliqual Materials',
            key: "1",
        },
        {   title: 'English', 
            key: "2",
        },
        {   title: 'Spanish', 
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
