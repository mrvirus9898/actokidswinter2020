import * as React from 'react';

import FilterPopUpListGenerator from "./FilterPopUpListComponents/FilterPopUpListGenerator"

export default function AccessCommunicationFilter(props: any) {

    let optionsArray = [
        {   title: 'Sign Language Interpreter',
            key: "0",
        },
        {   title: 'Braille',
            key: "1",
        },
        {   title: 'Audio Materials', 
            key: "2",
        },
        {   title: 'Large-Print Materials', 
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
