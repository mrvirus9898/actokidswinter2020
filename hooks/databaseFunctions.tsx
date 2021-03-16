import * as SQLite from 'expo-sqlite';

export function getDB(){
    return(SQLite.openDatabase('ActokidsDB'))
}

export function createTable(tableName: string, name: [], datatype: []){
     /*DB.transaction(tx => {
      tx.executeSql("CREATE TABLE taxonomy (id number, value varchar(20));", [], success)
    })*/
    if(name.length == datatype.length)
    {
        let createTableString = "CREATE TABLE IF NOT EXISTS " + tableName + " ("
        for (let i = 0; i < name.length; i++){
            if(i == 0){
                createTableString += name[i] + " " + datatype[i]
            }else{
                createTableString += ", " + name[i] + " " + datatype[i]
            }
        }
        createTableString += ")"
        console.log(createTableString)
    }else{
        console.log("Name and Datatype array length does not match")
    }
    return(null)
}

export function insertTable(tableName: string, columns: [], values: []){
    let insertValuesStrings = "INSERT INTO " + tableName + " ("
    let questionMarks = "( "
    let dataToInsert = "('"
    let dataSquences = values.length / columns.length
    let dataSplit = 0

    for (let i = 0; i < columns.length; i++){
        insertValuesStrings += columns[i]
        questionMarks += "?"
        if(i != (columns.length-1)){
            insertValuesStrings += ", "
            questionMarks += ", "
        }
    }
    insertValuesStrings += ") VALUES "
    insertValuesStrings += questionMarks + ")"
    console.log(insertValuesStrings)

    for(let i = 0; i < values.length; i++){
        dataToInsert += columns[i] + "'"
        dataSplit += 1
        if(dataSplit != columns.length){
            dataToInsert += ",'"
        }else{
            if(i != (values.length-1)){
                dataToInsert += "),('"
            }else{
                dataToInsert += ")"
            }
        }
    }
    console.log(dataToInsert)
    return(null)
}