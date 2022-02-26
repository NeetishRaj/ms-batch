const names = [
    'Manish',
    "Sneha",
    "Mirage Sawney",
    "Sukhwinder Nicolás",
    "Mara Marie",
    "Mahir Joseph",
    "Rochus Daniel",
    "Clemente Nioclás"
]

// iterate over the names and print "hi ${name}" with 1 second gap using setTimeout()

for (let i = 1; i <= names.length; i++) {

    setTimeout(() => {
        console.log(`hi ${names[i]}`);
   }, i * 1000);
    
}






