
//Age Category 'enum':
class AgeCategory{

  //The name of the age category of the toy.
  strAgeCategoryName;

  // Create new instances of the same class as static attributes.
  static infant = new AgeCategory("Infant");
  static toddler = new AgeCategory("Toddler");
  static preSchoolAge = new AgeCategory("Pre-School Age");
  static schoolAge = new AgeCategory("School-Age");

  // Assigns the age category.
  constructor(toyAgeCategoryName){
      this.strAgeCategoryName = toyAgeCategoryName;
  }
}


//The 'enum' for if a toy is a choking hazard
class IsToyChokingHazard {

  //whether the toy is a choking hazard, or not
  boolIsChokingHazardContent;

  //Create new instances of the same class as static attributes.
  static True = new IsToyChokingHazard("Yes, this toy is a choking hazard. Toy is not advised for infants and children under the age of 3 without parental supervision.")

  static False = new IsToyChokingHazard("No, this toy is not a choking hazard.")

  //Assign the is choking hazard field to the toy
  constructor(isToyChokingHazard){
    this.boolIsChokingHazardContent = isToyChokingHazard;
  }
}


//The color 'enum':
class PrimaryColor{

  //The name of the primary color of the toy
  strPrimaryColorName;

  //Create instances of the same class as static attributes;
  static sageGreen = new PrimaryColor("Sage Green");
  static beige = new PrimaryColor("Beige");

  //Assigns the primary color.
  constructor(toyPrimaryColor){
    this.strPrimaryColorName = toyPrimaryColor;
  }
}


//Price Range 'enum':
class PriceRange{

  //The price range of the toy:
  strPriceRangeName;

  // Create new instances of the same class as static attributes.
  static underTwentyFiveDollars = new PriceRange("Under $25");
  static underFiftyDollars = new PriceRange("Under $50");
  static underSeventyFiveDollars = new PriceRange("Under $75");
  static underOneHundredDollars = new PriceRange("Under $100");
  static underTwoHundredFiftyDollars = new PriceRange("Under $250");
  static anyPrice = new PriceRange("Any Price");

  // Assigns the price range attribute(s) to the toy object
  constructor(toyPriceRange){
      this.strPriceRangeName = toyPriceRange;
  }
}


//Primary Material 'enum':
class PrimaryMaterial{

  //the name of the primary material of the toy.
  strPrimaryMaterialName;

  // Create new instances of the same class as static attributes.
  static bamboo = new PrimaryMaterial("Bamboo");
  static woodRecycled = new PrimaryMaterial("Recycled Wood");
  static woolSustainablyHarvested = new PrimaryMaterial("Sustainably-Harvested Wool");

  // Assigns the primary material attribute.
  constructor(nameOfMaterial){
      this.strPrimaryMaterialName = nameOfMaterial;
  }
}



///A class made to represent a toy. 
class Toy {
  //The price range field for the toy class
  strPriceRange = "";

  ///Takes the inputted values and applies them to the corresponding fields. 
  constructor(int_ToyID, str_ToyName, float_ToyPrice, str_ToyDimensions, float_ToyWeight, str_ToyManufacturer, str_ToyPrimaryColor, bool_IsToyChokingHazard, str_ToyDescription, int_ToyQuantity, str_ToyPrimaryMaterial, str_ToyAgeCategory) {

    ///The Toy ID for which the toy is identified by.
    this.intToyID = int_ToyID;
    
    ///The name of the Toy. (Example. "Caterpillar Crawler")
    this.strToyName = str_ToyName;  
    
    ///The price of the toy. (Example. "12.99")
    this.floatToyPrice = float_ToyPrice;

    //determine the price range of the toy.
    this.determinePriceRange(this.floatToyPrice);
    
    ///The values Length (L), Width (W), and Height (H), 
    ///Formatted as a string under a field named "dimensions". (Example. " 14"(L)x 11" (W) x 4" (H) ")
    this.strToyDimensions = str_ToyDimensions; 
    
    ///The Weight of the toy in metric measurements. (Example. "2.26 Kilos")
    this.floatToyWeight = float_ToyWeight;

    ///The Manufacturer of the toy.
    this.strToyManufacturer = str_ToyManufacturer;

    ///the prime color of the Toy.
    this.strToyPrimaryColor = str_ToyPrimaryColor;

    ///a bool telling use whether or not the toy is considered a choking hazard for young children.
    this.boolIsToyChokingHazard = bool_IsToyChokingHazard;

    ///A description of the toy.
    this.strToyDescription = str_ToyDescription;

    // The quantity of the toy available for purchase by customers
    this.intToyQuantity = int_ToyQuantity;
            
    ///The primary material of the toy.
    this.strToyPrimaryMaterial = str_ToyPrimaryMaterial;
    
    ///The intended age group that would play with the Toy.
    this.strToyAgeGroup = str_ToyAgeCategory;
  }

  /// automatically creates a toy by intaking an index from a file.
  createToys(index) {
    var TestToy = new Toy(index.int_ToyID, index.str_ToyName, index.float_ToyPrice, index.str_ToyDimensions, index.float_ToyWeight, index.str_ToyManufacturer, 
    index.str_PrimaryColor, index.bool_IsChokingHazard, index.str_ToyDescription, index.int_ToyQuantity, index.str_ToyPrimaryMaterial ,index.str_ToyAgeCategory);
    return TestToy;
  } 


  //Determine the price category/range for the toy based on the toy price
  determinePriceRange(floatToyPrice){
    if(floatToyPrice < 25)
    {
      this.strPriceRange = PriceRange.underTwentyFiveDollars;
    }

    else if((floatToyPrice >= 25) && (floatToyPrice < 50))
    {
      this.strPriceRange = PriceRange.underFiftyDollars;
    }
    
    else if((floatToyPrice >= 50) && (floatToyPrice <75))
    {
      this.strPriceRange = PriceRange.underSeventyFiveDollars;
    }

    else if((floatToyPrice >= 75) && (floatToyPrice < 100))
    {
      this.strPriceRange = PriceRange.underOneHundredDollars;
    }

    else if((floatToyPrice >= 100) && (floatToyPrice < 250))
    {
      this.strPriceRange = PriceRange.underTwoHundredFiftyDollars;
    }

    else
    {
      this.strPriceRange = PriceRange.anyPrice;
    }
  }

  ///Displays the toy within the browser console, ensures that the constructor works properly.
  displayToy(){
    console.log(`\n`);
    console.log(`ToyID: ${this.intToyID}`);
    console.log(`ProductName: ${this.strToyName}`);
    console.log(`Toy Price: $${this.floatToyPrice}`);
    console.log(`Price Category: ${this.strPriceRange.strPriceRangeName}`);
    console.log(`Toy Dimensions: ${this.strToyDimensions}`);
    console.log(`Toy Weight: ${this.floatToyWeight} ounces`);
    console.log(`Manufacturer: ${this.strToyManufacturer}`);
    console.log(`Primary Color: ${this.strToyPrimaryColor.strPrimaryColorName}`);
    console.log(`Is it a choking Hazard? ${this.boolIsToyChokingHazard.boolIsChokingHazardContent}`);
    console.log(`ToyDescription: ${this.strToyDescription}`);
    console.log(`Quantity: ${this.intToyQuantity}`);
    console.log(`Primary Material: ${this.strToyPrimaryMaterial.strPrimaryMaterialName}`);
    console.log(`Age Category: ${this.strToyAgeGroup.strAgeCategoryName}`);
  }
}

// Define array to add toy objects to.
let toyArray = [];

// Create the toy objects and add them to the toy array.
var toy0 = new Toy(100, "Silly Wooden Snake", 24.99, "12 inches long", 12, "Mary's Toys", PrimaryColor.beige, IsToyChokingHazard.False, "A fun, wooden snake with cute details.", 18, new PrimaryMaterial("Bamboo"), AgeCategory.toddler); 
toyArray.push(toy0);

var toy1 = new Toy(101, "Wool Doll - Cat", 34.99, "6 in. (H) X 3 in.(W)", 6, "Mary's Toys", PrimaryColor.beige, IsToyChokingHazard.False, "A cute, wool cat doll for imaginative play.", 38, PrimaryMaterial.woolSustainablyHarvested, AgeCategory.preSchoolAge);
toyArray.push(toy1);

var toy2 = new Toy(102, "Wool Doll - Dog", 34.99, "3x3 inches", 6, "Mary's Toys", PrimaryColor.beige, IsToyChokingHazard.False, "A cute, wool dog doll for imaginative play.", 25, PrimaryMaterial.woolSustainablyHarvested, AgeCategory.preSchoolAge);
toyArray.push(toy2);

var toy3 = new Toy(103, "Wool Doll - Elephant", 34.99, "3x3 inches", 6, "Mary's Toys", PrimaryColor.beige, IsToyChokingHazard.False, "A cute, wool elephant doll for imaginative play.", 25, PrimaryMaterial.woolSustainablyHarvested, AgeCategory.preSchoolAge);
toyArray.push(toy3);

var toy4 = new Toy(104, "Wool Doll - Person, Option A", 34.99, "3x3 inches", 6, "Mary's Toys", PrimaryColor.beige, IsToyChokingHazard.False, "A cute, wool doll featuring a person wearing a sage-green one-piece outfit.", 33, PrimaryMaterial.woolSustainablyHarvested, AgeCategory.preSchoolAge);
toyArray.push(toy4);

var toy5 = new Toy(105, "Wool Doll - Person, Option B", 34.99, "3x3 inches", 6, "Mary's Toys", PrimaryColor.beige, IsToyChokingHazard.False, "A cute, wool doll featuring a person wearing a sage-green two-piece outfit with a hat.", 30, PrimaryMaterial.woolSustainablyHarvested, AgeCategory.preSchoolAge);
toyArray.push(toy5);

var toy6 = new Toy(106, "Wooden Car - Option B", 19.99, "6(L)x4(W)x3(D) inches", 15, "Mary's Toys", PrimaryColor.sageGreen, IsToyChokingHazard.False, "A fun, wooden car featuring an everyday car design.", 12, PrimaryMaterial.woodRecycled, AgeCategory.toddler);
toyArray.push(toy6);

var toy7 = new Toy(107, "Wooden Car - Option A", 24.99, "6(H)x4(W)x3(D) inches", 15, "Mary's Toys", PrimaryColor.sageGreen, IsToyChokingHazard.False, "A fun, wooden car that features an everyday car for imaginative play.", 25, PrimaryMaterial.woodRecycled, AgeCategory.toddler);
toyArray.push(toy7);

var toy8 = new Toy(108, "Wooden Piano", 174.99, "4ft(H) x 3ft(W) x 1ft (D)", 100, "Mary's Toys", PrimaryColor.sageGreen, IsToyChokingHazard.False, "A fun, interactive wooden piano for your growing musician.", 4, PrimaryMaterial.woodRecycled, AgeCategory.schoolAge);
toyArray.push(toy8);

var toy9 = new Toy(109, "Wooden Blocks - Home Set", 64.99, "Varies", 50, "Mary's Toys", PrimaryColor.sageGreen, IsToyChokingHazard.False, "A fun set of wooden blocks designed to build a home for imaginative play.", 50, PrimaryMaterial.woodRecycled, AgeCategory.preSchoolAge);
toyArray.push(toy9);

var toy10 = new Toy(110, "Teething Toy - Rabbit", 14.99, "4 inches(L) x 3 inches(W) x 0.5 inches(D)", 5, "Mary's Toys", PrimaryColor.sageGreen, IsToyChokingHazard.False, "A cute teething toy for your little bunny.", 35, PrimaryMaterial.bamboo, AgeCategory.infant);
toyArray.push(toy10);

var toy11 = new Toy(111, "Wool Plushie - Cat", 29.99, "1ft(H) x 6in(W)", 12, "Mary's Toys", PrimaryColor.beige, IsToyChokingHazard.False, "A cute, wool plushie for imaginative play and restful naps.", 25, PrimaryMaterial.woolSustainablyHarvested, AgeCategory.infant);
toyArray.push(toy11);

var toy12 = new Toy(112, "Wool Plushie - Dog", 29.99, "1ft(H) x 6in(W)", 12, "Mary's Toys", PrimaryColor.beige, IsToyChokingHazard.False, "A cute, wool plushie for imaginative play and restful naps.", 25, PrimaryMaterial.woolSustainablyHarvested, AgeCategory.infant);
toyArray.push(toy12);

var toy13 = new Toy(113, "Wool Plushie - Bird", 29.99, "1ft(H) x 6in(W)", 12, "Mary's Toys", PrimaryColor.beige, IsToyChokingHazard.False, "A cute, wool plushie for imaginative play and restful naps.", 25, PrimaryMaterial.woolSustainablyHarvested, AgeCategory.infant);
toyArray.push(toy13);

var toy14 = new Toy(114, "Wool Plushie - Panda", 29.99, "1ft(H) x 6in(W)", 12, "Mary's Toys", PrimaryColor.beige, IsToyChokingHazard.False, "A cute, wool plushie for imaginative play and restful naps.", 25, PrimaryMaterial.woolSustainablyHarvested, AgeCategory.infant);
toyArray.push(toy14);

var toy15 = new Toy(115, "Wool Plushie - Octopus", 29.99, "1ft(H) x 6in(W)", 12, "Mary's Toys", PrimaryColor.beige, IsToyChokingHazard.False, "A cute, wool plushie for imaginative play and restful naps.", 25, PrimaryMaterial.woolSustainablyHarvested, AgeCategory.infant);
toyArray.push(toy15);

var toy16 = new Toy(116, "Wool Plushie - Rabbit", 29.99, "1ft(H) x 6in(W)", 12, "Mary's Toys", PrimaryColor.beige, IsToyChokingHazard.False, "A cute, wool plushie for imaginative play and restful naps.", 25, PrimaryMaterial.woolSustainablyHarvested, AgeCategory.infant);
toyArray.push(toy16);

var toy17 = new Toy(117, "Wooden Shopping Cart", 49.99, "2ft(H) x 1.5ft(L) x 6 inches (D)", 50, "Mary's Toys", PrimaryColor.beige, IsToyChokingHazard.False, "A cute, wooden shopping cart for imaginative play.", 25, PrimaryMaterial.woodRecycled, AgeCategory.preSchoolAge);
toyArray.push(toy17);

var toy18 = new Toy(118, "Wooden Puzzle Cube", 19.99, "6x6x6 inches", 12, "Mary's Toys", PrimaryColor.beige, IsToyChokingHazard.False, "A fun, challenging puzzle cube to help evoke complex thinking and problem-solving skills.", 25, PrimaryMaterial.woodRecycled, AgeCategory.schoolAge);
toyArray.push(toy18);

var toy19 = new Toy(119, "Wooden Chess Board & Pieces", 29.99, "1ft(L) x 1ft(W)", 80, "Mary's Toys", PrimaryColor.beige, IsToyChokingHazard.False, "A fun, challenging game of chess that can help evoke complex thinking and problem-solving skills.", 25, PrimaryMaterial.woodRecycled, AgeCategory.schoolAge);
toyArray.push(toy19);
// console.table([toy0, toy1, toy2, toy3, toy4, toy5, toy6, toy7, toy8, toy9, toy10, toy11, toy12, toy13, toy14, toy15, toy16, toy17, toy18, toy19]);

// Select the toy container divs.
var toyContainer = document.querySelector('.toyContainer');

toyArray.forEach((toy, index) => {
  // Select each toyContainer div by index number starting from 0.
  const toyContainer = document.querySelector(`.toyContainer[dataIndex="${index}"]`);

  // Error handling for a null container.
  if (!toyContainer) {
    console.error(`Toy container not found for index ${index}.`);
    return; // Skip to next iteration if container not found
  }

  // Select the toyName and toyPrice div in the toyContainer div and add values.
  var toyName = toyContainer.querySelector(".toyName > #click");
  var toyPrice = toyContainer.querySelector('.toyPrice');

  // Add placeholders for better user experience
  toyName.textContent = "Toy Name (Loading)";
  toyPrice.textContent = "Toy Price (Loading)";

  // Update toy information using the appropriate properties from the Toy object
  toyName.textContent = toy.strToyName;
  toyPrice.textContent = `$${toy.floatToyPrice}`;

});

// Show the array in the console.
console.log(toyArray);

// Function newPage takes the argument given in the onClick function of toyPage.html and uses that toy object to inject its data into the selectedToypage.html file.
function newPage(toy){
  let toyObject = toy
  // Inject the object into the new created webpage.
  location.assign("../html/selectedToypage.html?toyData=" + encodeURIComponent(JSON.stringify(toyObject)));
  console.log("New page has been opened! Injecting the toy data...")
  console.log(toyObject);
} 

// ///grabs the file path and attaches it to a const.
// const jsonFilePath = '../json/toyData.json';

// ///looks for the file via the file path, if found, it continues, otherwise, it throws an error in the console.
// fetch(jsonFilePath)
//   .then(response => {
//     if (!response.ok) {
//       throw new Error('Couldn\'t find the json file in question.');
//     }
//     ///returns the found file, is changed to the name "Data" in the .then method.
//     return response.json();
//   })
//   .then(data => {
//    // A counter for the index.
//     counter = 0;
//     // Iterates through the array.
//     data.toys.forEach(obj => {
//       ///gets the the current index by using the counter + Json file.
//       var index = data.toys[counter];
//       ///Creates a new toy through the added "createToys" method.
//       var toy = new Toy;
//       toy = toy.createToys(index);
//       //+1 to counter and the new toy is logged, we can add the toy to an array with a unique name, but for now, it's here.
//       counter++;
//       console.log(toy);
//     });
//   })
//   ///Catches any errors thrown.
//   .catch(error => {
//     console.error('There was a problem fetching the JSON file:', error);
//   });