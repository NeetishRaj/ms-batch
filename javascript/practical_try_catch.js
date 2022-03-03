// one common usecase of try-catch is while parsing of  json string.



// const json =`
// {
//     fullname: "john doe",
//     age: 29
// }
// `

// const json_object = JSON.parse(json);

// console.log(json_object);


// Let's fix this using try  catch

// const json =`
// {
//     fullname: "john doe",
//     age: 29
// }
// `
// try {
//     const json_object = JSON.parse(json);
//     console.log(json_object);
// } catch(e) {
//     console.log(`Errro message: ${e.message}`)
// } finally {
//     console.log("This will always execute");
// }


// We can have multiple catch blocks depending on the exception type.

const json =`
{
    fullname: "john doe",
    age: 29
}
`
try {
    // const json_object = JSON.parse(json);
    const a = 5;
    a =  10;
    console.log(json_object);
} catch(e) {
    if(e instanceof SyntaxError) {
        console.log("This is developer problem!");
    } if(e instanceof TypeError) {
        console.log("Please check your variable types")
    } else {
        console.log(`Errro message: ${e}`)
    }
} finally {
    console.log("This will always execute");
}


