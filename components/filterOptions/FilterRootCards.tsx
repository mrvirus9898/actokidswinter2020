/*
NICK BENNETT
ACTOKIDS

FIlter by Root Cards for the filter options
*/

import React from 'react';

import FilterCards from './FilterCards';


export default function FilterRootCards(props: any) {

    const [optionSelect, setOptionSelect] = React.useState(8)

    return(
        <FilterCards 
            navigation={props.navigation}
            currentSelections={props.currentSelections}
            setOptionSelect={setOptionSelect}
            modifyCurrentSelections={props.modifyCurrentSelections}
            setPRR={props.setPRR}
            PRR={props.PRR}/>
    )
}

/*
<FilterCards 
                    category={item.title}
                    url={item.url}/>

            <Card>
                <Text style={styles.paragraph}>Criteria 1</Text>
            </Card>
            <Card>
                <Text style={styles.paragraph}>Criteria 2</Text>
            </Card>
            <Card>
                <Text style={styles.paragraph}>Criteria 3</Text>
            </Card>
            <Card>
                <Text style={styles.paragraph}>Criteria 4</Text>
            </Card>
            <Card>
                <Text style={styles.paragraph}>Criteria 5</Text>
            </Card>
            <Card>
                <Text style={styles.paragraph}>Criteria 6</Text>
            </Card>
            <Card>
                <Text style={styles.paragraph}>Criteria 7</Text>
            </Card>
                  // Try setting `justifyContent` to `center`.
      // Try setting `flexDirection` to `row`.
      <View style={styles.filterRootCardStyle}>
        <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
        <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
      </View>

                      <Card>
                    <Card.Title>{item.title}</Card.Title>
                </Card>
                
                */