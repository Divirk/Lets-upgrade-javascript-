//Create a blank array and later on create a add bus functionality bus object contains {name, source,
//destination, number, passenger capacity}

window.onload = function () {
    let initialsuperheroes = [
      {
        name: "tovin",
        capacity: 3,
        source: "chennai",
        destination: "delhi",
      },
      {
        name: "boitan",
        capacity : 4,
        source: "mumbai",
        destination: "kolkatta",
      },
      {
        name: "Charles",
        capacity: 6,
        source: "goa",
        destination: "kerala",
      },
    ];
  
    if (localStorage.getItem("buspassenger") == null) {
      localStorage.setItem("buspassenger", JSON.stringify(initialbuspassenger));
    }
  };
  
  function display(superarray = undefined) {
    let tabledata = "";
    let buspassenger;
    if (superarray == undefined) {
      buspassenger = JSON.parse(localStorage.getItem("buspassenger"));
    } else {
      buspassenger = superarray;
    }
  
    buspassenger.forEach(function (buspassenger, index) {
      let currentrow = `<tr>
        <td>${index + 1}</td>
        <td>${buspassenger.name}</td>
        <td>${buspassenger.capacity}</td>
        <td>${buspassenger.source}</td>
        <td>${buspassenger.destination}</td>
        <td>
        <button onclick='deletebuspassenger(${index})'>delete</button>
        <button onclick='showModal(${index})'>update</button>
        </td>
        </tr>`;
  
      tabledata += currentrow;
    });
  
    document.getElementsByClassName("tdata")[0].innerHTML = tabledata;
    //   document.getElementById("tdata").innerHTML = tabledata;
  }
  
  display();
  
  function addbuspassenger(e) {
    e.preventDefault();
    let buspassenger = {};
    let name = document.getElementById("name").value;
    let capacity= document.getElementById("capacity").value;
    let source = document.getElementById("source").value;
    let destination = document.getElementById("destination").value;
    buspassenger.name = name;
    buspassenger.capacity = Number(capacity);
    buspassenger.source = source;
    buspassenger.destination = destination;
  
    //   buspassenger.push(buspassenger);
  
    let buspassenger = JSON.parse(localStorage.getItem("buspassenger"));
    superheroes.push(superhero);
    localStorage.setItem("buspassenger", JSON.stringify(buspassenger));
  
    display();
  
    document.getElementById("name").value = "";
    document.getElementById("capacity").value = "";
    document.getElementById("source").value = "";
    document.getElementById("destination").value = "";
  }
  
  function searchByName() {
    let searchValue = document.getElementById("searchName").value;
    let buspassenger = JSON.parse(localStorage.getItem("buspassenger"));
    let newdata = buspassenger.filter(function (buspassenger) {
      return (
        buspassenger.name.toUpperCase().indexOf(searchValue.toUpperCase()) != -1
      );
    });
  
    display(newdata);
  }
  
  function deletebuspassenger(index) {
    let buspassenger = JSON.parse(localStorage.getItem("buspassenger"));
    buspassenger.splice(index, 1);
    localStorage.setItem("buspassenger", JSON.stringify(buspassenger));
    display();
  }
  
  let updateIndex;
  
  function copybuspassenger(index) {
    let buspassenger = JSON.parse(localStorage.getItem("buspassenger"));
    updateIndex = index;
    let buspassenger= buspassenger[index];
  
    document.getElementById("upname").value = buspassenger.name;
    document.getElementById("upcapacity").value = buspassenger.capacity;
    document.getElementById("upsource").value = buspassenger.source;
    document.getElementById("updestination").value = buspassenger.destination;
  }
  
  function updatebuspassenger(e) {
    e.preventDefault();
    let buspassenger = JSON.parse(localStorage.getItem("buspassenger"));
    let buspassenger = buspassenger[updateIndex];
    console.log(buspassenger);
    let name = document.getElementById("upname").value;
    let capacity= document.getElementById("upcapacity").value;
    let source = document.getElementById("upsource").value;
    let destination = document.getElementById("updestination").value;
    buspassenger.name = name;
    buspassenger.capacity = Number(capacity);
    buspassenger.source = source;
    buspassenger.destination = destination;
  
    localStorage.setItem("buspassenger", JSON.stringify(buspassenger));
    display(buspassenger);
  
    // code for hiding from anywhere
    let modal = document.getElementsByClassName("modal")[0];
    modal.style.display = "none";
  }
  
  function showModal(index) {
    let modal = document.getElementsByClassName("modal")[0];
    modal.style.display = "block";
  
    copybuspassenger(index);
  }
  
  function hideModal(event) {
    if (event.target.className == "modal") {
      let modal = document.getElementsByClassName("modal")[0];
      modal.style.display = "none";
    }
  }