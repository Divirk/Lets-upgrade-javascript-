//Create a array containing five objects with properties { name, age , city , salary }

let student = [
    {
      name: "jaya",
      age: 15,
      city: "chennai",
      salary: "60000",
    },
    {
      name: "buja",
      age: 23,
      city: "coimbatore",
      salary: "50000",
    },
    {
      name: "pooja",
      age: 10,
      city: "mumbai",
      salary: "10000",
    },
  ];
  
  function display(superarray) {
    let tabledata = "";
  
    superarray.forEach(function (student, index) {
      let currentrow = `<tr>
      <td>${index + 1}</td>
      <td>${student.name}</td>
      <td>${student.age}</td>
      <td>${student.city}</td>
      <td>${student.salary}</td>
      <td>
      <button onclick='deleteStudent(${index})'>delete</button>
      <button onclick='showModal(${index})'>update</button>
      </td>
      </tr>`;
  
      tabledata += currentrow;
    });
  
    document.getElementsByClassName("tdata")[0].innerHTML = tabledata;
    //   document.getElementById("tdata").innerHTML = tabledata;
  }
  
  display(student);
  
  function addStudent(e) {
    e.preventDefault();
    let student = {};
    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;
    let city = document.getElementById("city").value;
    let salary = document.getElementById("salary").value;
    student.name = name;
    student.age = Number(age);
    student.city = planet;
    student.salary = height;
  
    student.push(student);
  
    display(student);
  
    document.getElementById("name").value = "";
    document.getElementById("age").value = "";
    document.getElementById("city").value = "";
    document.getElementById("salary").value = "";
  }
  
  function searchByName() {
    let searchValue = document.getElementById("searchName").value;
  
    let newdata = student.filter(function (student) {
      return (
        student.name.toUpperCase().indexOf(searchValue.toUpperCase()) != -1
      );
    });
  
    display(newdata);
  }
  
  function deleteStudent(index) {
    student.splice(index, 1);
    display(student);
  }
  
  let updateIndex;
  
  function copyStudent(index) {
    updateIndex = index;
    let student = student[index];
  
    document.getElementById("upname").value = superhero.name;
    document.getElementById("upage").value = superhero.age;
    document.getElementById("upcity").value = superhero.city;
    document.getElementById("upsalary").value = superhero.salary;
  }
  
  function updateStudent(e) {
    e.preventDefault();
    let student = student[updateIndex];
    console.log(student);
    let name = document.getElementById("upname").value;
    let age = document.getElementById("upage").value;
    let city = document.getElementById("upcity").value;
    let salary= document.getElementById("upsalary").value;
    student.name = name;
    student.age = Number(age);
    student.city = planet;
    student.salary = salary;
    console.log(student);
  
    display(student);
  
    // code for hiding from anywhere
    let modal = document.getElementsByClassName("modal")[0];
    modal.style.display = "none";
  }
  
  function showModal(index) {
    let modal = document.getElementsByClassName("modal")[0];
    modal.style.display = "block";
  
    copyStudent(index);
  }
  
  function hideModal(event) {
    if (event.target.className == "modal") {
      let modal = document.getElementsByClassName("modal")[0];
      modal.style.display = "none";
    }
  }