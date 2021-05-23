import * as React from 'react';

import FilterPopUpListGenerator from "./FilterPopUpListComponents/FilterPopUpListGenerator"

export default function AccessEngagementFilter(props: any) {

    let optionsArray = [
        {   title: 'Chair-Based',
            key: "0",
        },
        {   title: 'Unified',
            key: "1",
        },
        {   title: 'Adaptive', 
            key: "2",
        },
        {   title: 'Paralympic Pathway', 
            key: "3",
        },
        {   title: 'Special Olympics Pathway',
            key: "4",
        },
        {   title: 'Support Person Allowed',
            key: "5",
        },
        {   title: 'Peer Inclusive', 
            key: "6",
        },
        {   title: 'Autism Friendly', 
            key: "7",
        },
        {   title: 'Other', 
            key: "8",
        },
        {   title: 'Personal Support Animials',
            key: "9",
        },
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
