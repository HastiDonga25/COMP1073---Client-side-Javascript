// getElementById
const createCarButton = document.getElementById("createCarButton")
// adding eventListener
createCarButton.addEventListener("click", createCar());

function ToyCar(color, brand, model, year, price, isElectric, isRemoteControlled, speed, numDoors, numWheels) {
    // creating car properties
    this.color = color;
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.price = price;
    this.isElectric = isElectric;
    this.isRemoteControlled = isRemoteControlled;
    this.speed = speed;
    this.numDoors = numDoors;
    this.numWheels = numWheels;
}

function createCar() {
    // getting input values inserted by the user
    var color = document.getElementById("color").value;
    var brand = document.getElementById("brand").value;
    var model = document.getElementById("model").value;
    var year = document.getElementById("year").value;
    var price = document.getElementById("price").value;
    var isElectric = document.getElementById("electric").checked;
    var isRemoteControlled = document.getElementById("remote").checked;
    var speed = document.getElementById("speed").value;
    var numDoors = document.getElementById("doors").value;
    var numWheels = document.getElementById("wheels").value;

    // Object created of name car
    var car = new ToyCar(color, brand, model, year, price, isElectric, isRemoteControlled, speed, numDoors, numWheels);

    // passing the object to display car function to display output
    displayCar(car);
  }

  function displayCar(car) {
    var carContainer = document.getElementById("car-container");
    var carElement = document.createElement("div");
    carElement.classList.add("car");
    carElement.style.backgroundColor = car.color;

    var leftWheel = document.createElement("div");
    leftWheel.classList.add("wheel", "left-wheel");

    var rightWheel = document.createElement("div");
    rightWheel.classList.add("wheel", "right-wheel");

    carElement.appendChild(leftWheel);
    carElement.appendChild(rightWheel);

    carContainer.appendChild(carElement);
  }