import * as React from 'react';

import FilterPopUpListGenerator from "./FilterPopUpListComponents/FilterPopUpListGenerator"

export default function AccessCommunicationFilter(props: any) {

    let optionsArray = [
        {   title: 'Any Cost',
            key: "0",
        },
        {   title: 'Free',
            key: "1",
        },
        {   title: 'Equipment Fees', 
            key: "2",
        },
        {   title: 'Travel Fees', 
            key: "3",
        },
        {   title: 'Other Costs', 
            key: "4",
        },
        {   title: 'Any Payment Method',
            key: "5",
        },
        {   title: 'Pay As You Go',
            key: "6",
        },
        {   title: 'Sliding Scale', 
            key: "7",
        },
        {   title: 'Scholarships Available', 
            key: "8",
        },
        {   title: 'WA Apple Health (Medicaid)', 
            key: "9",
        },
        {   title: 'Private Health Insurance', 
            key: "10",
        },
        {   title: 'WA State Foster Program', 
            key: "11",
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
