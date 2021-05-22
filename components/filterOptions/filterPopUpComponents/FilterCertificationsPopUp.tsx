import * as React from 'react';

import FilterPopUpListGenerator from "./FilterPopUpListComponents/FilterPopUpListGenerator"

export default function FilterCertificationsPopUp(props: any) {

    let optionsArray = [
        {   title: 'First Aid/CPR',
            key: "0",
        },
        {   title: 'Concussion Protocols',
            key: "1",
        },
        {   title: 'Safe Sport', 
            key: "2",
        },
        {   title: 'Adaptive Sport', 
            key: "3",
        },
        {   title: 'Social Emotional Learning', 
            key: "4",
        },
        {   title: 'Youth w/ Disabilities', 
            key: "5",
        },
        {   title: 'Paid Coaches', 
            key: "6",
        },
        {   title: 'Volunteer Coaches', 
            key: "7",
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
