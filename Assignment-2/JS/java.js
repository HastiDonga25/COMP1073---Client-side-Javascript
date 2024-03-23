class Smoothie {
    constructor(flavor, size, toppings, base) {
      this.flavor = flavor;
      this.size = size;
      this.toppings = toppings;
      this.base = base;
    }
    
    getDescription() {
      let description = `Smoothie: ${this.size} ${this.flavor} with ${this.base}`;
      if (this.toppings.length > 0) {
        description += ` and toppings: ${this.toppings.join(', ')}`;
      }
      return description;
    }
  }
  
  document.getElementById('smoothieForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    
    const flavor = document.getElementById('flavor').value;
    const size = document.getElementById('size').value;
    const toppings = [...document.querySelectorAll('input[name="toppings"]:checked')].map(topping => topping.value);
    const base = document.getElementById('base').value;
    
    const smoothie = new Smoothie(flavor, size, toppings, base);
    
    const smoothieOutput = document.getElementById('smoothieOutput');
    smoothieOutput.innerHTML = `<p>${smoothie.getDescription()}</p>`;
  });
  