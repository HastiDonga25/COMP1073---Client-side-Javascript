// getElementById
const createCarButton = document.getElementById("createCarButton")
// adding eventListener
createCarButton.addEventListener("click", );

function ToyCar(color, brand, model, year, price, isElectric, isRemoteControlled, speed, numDoors, numWheels) {
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