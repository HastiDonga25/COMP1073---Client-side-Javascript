// getElementById
const createCarButton = document.getElementById("createCarButton");
const car_container = document.getElementById("car_container");

// adding eventListener
createCarButton.addEventListener("click", createCar);

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

    // displaying the output
    car_container.textContent =`Your car color is: ${car.color}, brand is: ${car.brand}, model is: ${car.model}, of year: ${car.year}, price: ${car.price} Electric: ${car.isElectric}, Remotecontrole: ${car.isRemoteControlled}, speed: ${car.speed}, numberDoors: ${car.numDoors}, and numWheels: ${car.numWheels}`;
}
