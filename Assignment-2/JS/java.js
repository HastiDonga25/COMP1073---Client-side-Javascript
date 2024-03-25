class Smoothie {

  constructor(flavor, size, toppings, base) {
    // Initialize smoothie properties
    this.flavor = flavor;
    this.size = size;
    this.toppings = toppings;
    this.base = base;
  }
  // Method to get description of the smoothie
  getDescription() {
    let description = `You have ordered ${this.flavor} Smoothie of ${this.size} size with  ${this.base} base`;
    if (this.toppings.length > 0) {
      description += ` and toppings: ${this.toppings.join(', ')}`;
    }
    return description;
  }
  // Method to calculate the total bill for the smoothie
  getBill() {
    let totalPrice = 0;
    // Define prices for ingredients
    const prices = {
      'Strawberry': 2,
      'Banana': 1.5,
      'Mango': 2.5,
      'Pineapple': 2,
      'Kiwi': 3.5,
      'Small': 2,
      'Medium': 2.5,
      'Large': 3.5,
      'Nuts': 0.5,
      'Berries': 1,
      'Chocolate-chips': 1,
      'Mango-jelly': 0.5,
      'Milk': 1,
      'Almond-milk': 1,
      'Yogurt': 1.5,
      'Coconut water': 2
    };
     // Add price of flavor and base
    totalPrice += prices[this.flavor];
    totalPrice += prices[this.base];
    this.toppings.forEach(topping => {
      totalPrice += prices[topping];
    });
    // Return total price formatted to 2 decimal places
    return totalPrice.toFixed(2);
  }
}
// Event listener for form submission
document.getElementById('smoothieForm').addEventListener('submit', function(event) {
  event.preventDefault();
  
  // Get values from the form
  const flavor = document.getElementById('flavor').value;
  const size = document.getElementById('size').value;
  const toppings = [...document.querySelectorAll('input[name="toppings"]:checked')].map(topping => topping.value);
  const base = document.getElementById('base').value;
  
  // Create a new smoothie object
  const smoothie = new Smoothie(flavor, size, toppings, base);
  
   // Update the HTML to display smoothie description
  const smoothieOutput = document.getElementById('smoothieOutput');
  smoothieOutput.innerHTML = `<p>${smoothie.getDescription()}</p>`;
  
  // Update the HTML to display total bill
  const billOutput = document.getElementById('billOutput');
  billOutput.innerHTML = `<p>Total Bill: $${smoothie.getBill()}</p>`;
  
  // Update the HTML to display total bill
  const smoothieImage = document.getElementById('smoothieImage');
  smoothieImage.innerHTML = `<img src="./IMG/${flavor}.jpg" alt="${flavor} Smoothie" style="max-width: 200px;">`;
});
