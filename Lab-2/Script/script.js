// getElementById
const createCarButton = document.getElementById("createCarButton");
const car_container = document.getElementById("car_container");

// adding eventListener
createCarButton.addEventListener("click", createCar);

function ToyCar(color, brand, model, year, price, Electric, RemoteControlled, speed, Doors, Wheels) {
    // creating car properties
    this.color = color;
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.price = price;
    this.Electric = Electric;
    this.RemoteControlled = RemoteControlled;
    this.speed = speed;
    this.Doors = Doors;
    this.Wheels = Wheels;
}

function createCar() {
    // getting input values inserted by the user
    var color = document.getElementById("color").value;
    var brand = document.getElementById("brand").value;
    var model = document.getElementById("model").value;
    var year = document.getElementById("year").value;
    var price = document.getElementById("price").value;
    var Electric = document.getElementById("electric").checked;
    var RemoteControlled = document.getElementById("remote").checked;
    var speed = document.getElementById("speed").value;
    var Doors = document.getElementById("doors").value;
    var Wheels = document.getElementById("wheels").value;

    // Object created of name car
    var car = new ToyCar(color, brand, model, year, price, Electric, RemoteControlled, speed, Doors, Wheels);

    // displaying the output
    car_container.textContent =`Your car color is: ${car.color}, brand is: ${car.brand}, model is: ${car.model}, of year: ${car.year}, price: ${car.price} Electric: ${car.Electric}, Remote controlled: ${car.RemoteControlled}, speed: ${car.speed}, numberDoors: ${car.Doors}, and numWheels: ${car.Wheels}`;
}
