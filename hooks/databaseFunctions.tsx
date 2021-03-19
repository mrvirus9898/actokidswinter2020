import * as SQLite from 'expo-sqlite';

//Simple openDB fuction
export function openDB(){
    return(SQLite.openDatabase('ActokidsDB'))
}

//Create a table, if it does not exist, based on this criteria
export function createTable(tableName: string, name: [], datatype: []){
     /*DB.transaction(tx => {
      tx.executeSql("CREATE TABLE taxonomy (id number, value varchar(20));", [], success)
    })*/
    if(name.length == datatype.length)
    {
        let createTableString = "CREATE TABLE IF NOT EXISTS " + tableName + " (" + name[name.length-1] + " " + datatype[datatype.length-1]
        for (let i = 1; i < name.length; i++){
            createTableString += ", " + name[i] + " " + datatype[i]
        }
        createTableString += ")"
        console.log(createTableString)
    }else{
        console.log("Name and Datatype array length does not match")
    }
    return(null)
}

//Insert table function, which requires some looping and marking to form the query
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

//Simple query table function to select all
export function queryTableSelectAll(tableName: string){
    let queryGetAll = "SELECT * FROM " + tableName
    console.log(queryGetAll)
    return(null)
}

//Simple query table function to select some
export function queryTableSelectCols(tableName: string, columns: []){
    let queryGetSome = "SELECT " + columns[columns.length-1]
    for (let i = 1; i < columns.length; i++){
        queryGetSome += ", " + columns[i]
    }
    console.log(queryGetSome)
    return(null)
}
