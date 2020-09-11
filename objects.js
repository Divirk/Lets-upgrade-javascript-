// Assignment Day4
// 3.Create an array of objects with objects having the following properties

let properties=[
    {
        name:"Dv",
        Age :9,
        address:{
        country:"India",
        city:"chennai",
        },
        hobbies:["Reading","writing","net surfing"],

    
    },
    {
      name:"pri",
      Age : 34,
      address:{
      country:"australia",
      city:"tomo",
      },
      hobbies:["chess","photography","watching webseries"],

    },
]

 console.log(properties);
//  4.Display objects having age less than 30 $ having country India

properties.forEach(function(properties){
    console.log(properties.Age<30);       //display true or false in console to compare the age
    
    console.log(properties.address.country);
    
});


