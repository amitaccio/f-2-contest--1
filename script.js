const data = [
    { name: "john", age: 24, profession: "developer" },
    { name: "jane", age: 27, profession: "admin" },
  ];
  
  // 1. Print Developers
  function printDeveloper() {
    // john is only the developer here.

     for(let i=0;i<data.length; i++){
        if(data[i].profession === "developer"){
            console.log(data[i].name);
        }
     }

  }
  
  // 2. Add Data
  function addData() { 
    // taking input.
    let name = prompt("enter the name");
    let age = prompt("enter the age");
    let profession = prompt("enter the profession");
    
     // create an new object with prompted data.
     let newobject={
        newname : name,
        newage : age,
        newprofession : profession

     }
    // push this object to our preexisting data object.
    data.push(newobject);
    console.log(data);
  }
  
  // 3. Remove Admins
  
  function removeAdmin() {
    for(let i=0;i<data.length;i++){
      if(data[i].profession=="admin"){
        data.splice(i,1);
        i--;
      }
    }
    console.log(data);
  }
    
  
  
  // 4. Concatenate Array
  function concatenateArray() {
    let dummy =[
        {
           prop1 : "amit" , prop2 : "student" , age : 21
        },
        {
            prop1 : "ankit" , prop2 : "student" , age : 31
         }
    ]

    let concente = data.concat(dummy);
    console.log(concente);

  }
  
  // 5. Average Age
  function averageAge() {
    let sumofAge = 0;
       for(let i=0; i<data.length; i++){
          sumofAge = sumofAge + data[i].age
       }
        console.log( "Average Age : " + sumofAge/data.length);
  }
  
  // 6. Age Check
  function checkAgeAbove25() {
    let result = data.filter((value) =>{
        return (value.age>25);
    })
    console.log(result);
  }
  
  // 7. Unique Professions
  function uniqueProfessions() {

    let distinctProfessions = [];
data.forEach(obj => {
    if (!distinctProfessions.includes(obj.profession)) {
        distinctProfessions.push(obj.profession);
    }
});

distinctProfessions.forEach(profession => {
    console.log(profession);
});
  }
  
  // 8. Sort by Age
  function sortByAge() {

    data.sort((a, b) => a.age - b.age);
    console.log(data);
  }
  
  // 9. Update Profession
  function updateJohnsProfession() {
    data[0].profession = "manager";
    console.log(data);
  }
  
  // 10. Profession Count
  function getTotalProfessions() {
    let developerCount = 0;
    let adminCount = 0;
    for(let i=0; i<data.length; i++){
        if(data[i].profession === "developer"){
            developerCount++;
        }
        else if(data[i].profession === "admin"){
            adminCount++;
        }

    }
    console.log("TOTALDEVELOPERS :" +developerCount )
    console.log("TOTALADMINS :" +adminCount )
  }