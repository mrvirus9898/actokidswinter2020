import React, { useState } from 'react';
import {
  Text,
  View,
  ScrollView
} from 'react-native';

import loadTaxonomyInformation from '../hooks/loadTaxonomyInformation';

import CheckBoxList from '../components/CheckBoxList';

export default function FilterPage() {

    const [taxonomy, setTaxonomy] = useState<Array<Array<any>>>([]);

    if(taxonomy.length == 0){
        
        const incomingData = loadTaxonomyInformation().then(function(result)
        {
            setTaxonomy(result);
        })
        return(null);        
    }else{
        console.log(taxonomy.Activities);
        return(
            <View>
                <ScrollView>
                    <CheckBoxList title={taxonomy.Activities}/>
                    <CheckBoxList title={taxonomy.Taxonomy}/>
                </ScrollView>
            </View>
        );
    }
}

/*
             <Text>Filter List Top Component</Text>
<CheckBoxList title={taxonomy.Activities}/>

<View>
            <ScrollView>
                <Text style={styles.headTitle}>
                    Activity Types
                </Text>
                {ShowActCheckBox()}
                <Text style={styles.textLine}>
                    _________________________________________________________
                </Text>
                <Text style={styles.headTitle}>
                    Disability Types
                </Text>
                {ShowDisCheckBox()}
            </ScrollView>
        </View>

        */

