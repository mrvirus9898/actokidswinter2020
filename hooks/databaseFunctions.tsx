import * as SQLite from 'expo-sqlite';

export function getDB(){
    return(SQLite.openDatabase('ActokidsDB'))
}

export function createTable(tableName: string, name: [], datatype: []){
     /*DB.transaction(tx => {
      tx.executeSql("CREATE TABLE taxonomy (id number, value varchar(20));", [], success)
    })*/
    let createTableString = "CREATE TABLE IF NOT EXISTS " + tableName + " ("
    for (let i = 0; i < name.length; i++){
        if(i == 0){
            createTableString = createTableString + name[i] + " " + datatype[i]
        }else{
            createTableString = createTableString + ", " + name[i] + " " + datatype[i]
        }
    }
    createTableString = createTableString + ")"
    return(null)
}