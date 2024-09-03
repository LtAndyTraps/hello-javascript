/*
Clase 2 en vídeo | 17/07/2024
Tipos de datos, operadores y strings
https://www.youtube.com/live/euVbF1eatEY?si=nHS3QznAlA_C39NK&t=808
*/

// 1. Escribe un comentario en una línea

    // Esto es un comentario en una línea

// 2. Escribe un comentario en varias líneas

    /* Esto es un comentario
    en varias
    líneas
    */

// 3. Declara variables con valores asociados a todos los datos de tipo primitivos

    let myName = "Pablo" // string

    let myAge = 49 // number

    let myUndefined //undefined

    let myNull = null // null

    let isProfessor = true // boolean

    let mySymbol = Symbol("mysymbol") // symbol

    let myBigint = BigInt(1234567891223456789123456798123456789123456789) // bigint
    let myBigint2 = 120496817240691823476203948672034968273409628734864684642n // bigint

// 4. Imprime por consola el valor de todas las variables

    console.log(myName)
    console.log(myAge)
    console.log(myUndefined)
    console.log(myNull)
    console.log(isProfessor)
    console.log(mySymbol)
    console.log(myBigint)
    console.log(myBigint2)

// 5. Imprime por consola el tipo de todas las variables

    console.log(typeof myName)
    console.log(typeof myAge)
    console.log(typeof myUndefined)
    console.log(typeof myNull)
    console.log(typeof isProfessor)
    console.log(typeof mySymbol)
    console.log(typeof myBigint)
    console.log(typeof myBigint2)

// 6. A continuación, modifica los valores de las variables por otros del mismo tipo

    myName = "Pedro" // string
    myAge = 16 // number
    myUndefined // undefined
    myNull = null // null
    isProfessor = true // boolean
    mySymbol = Symbol("mysymbol2") // symbol
    myBigint = BigInt(1234567891545455646464223456789123456798123456789123456789) // bigint
    myBigint2 = 1204968172406918234762039486546546468472034968273409628734864684642n // bigint

// 7. A continuación, modifica los valores de las variables por otros de distinto tipo

    myName = false // boolean
    myAge ="cuatro" // string
    myUndefined = "defined" // string
    myNull = 6 // number
    isProfessor = Symbol("professor") // symbol
    mySymbol = null // null
    myBigint = 56 // number
    myBigint2 = true // boolean

// 8. Declara constantes con valores asociados a todos los tipos de datos primitivos

    const myNameConst = "Pablo" // string
    const myAgeConst = 49 // number
    // const myUndefinedConst // undefined Esta línea da un error porque no se puede declarar una constante que no esté definida
    const myNullConst = null // null
    const isTeacherConst = true // boolean
    const mySymbolConst = Symbol("mysymbolconst")
    const myBigIntConst = 2947526394857269345872346324623462362346n

// 9. A continuación, modifica los valores de las constantes

    // myNameConst = "Pedro"
    // myAgeConst = 45
    // myNullConst = 5
    // isTeacherConst = false
    // mySymbolConst = Symbol("othersymbol")
    // myBigIntConst = 2544687165187654165416854165416546318574n


// 10. Comenta las líneas que produzcan algún tipo de error al ejecutarse

    // Todos dan ERROR