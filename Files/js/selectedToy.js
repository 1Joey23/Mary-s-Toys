// Imports the toyObject passed into the newPage function in toyClass.js and injects data unto webpage.
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const toyDataString = urlParams.get('toyData');

if (toyDataString) {
  const decodedData = decodeURIComponent(toyDataString);
  const toyObject = JSON.parse(decodedData);

  // Extract specific content from the object
  let toyName = toyObject.strToyName;
  const toyPrice = toyObject.floatToyPrice;
  const toyDimensions = toyObject.strToyDimensions;
  const toyWeight = toyObject.floatToyWeight;
  const manufacturer = toyObject.strToyManufacturer;
  const primaryColor = toyObject.strToyPrimaryColor.strPrimaryColorName;
  const isChokingHazard = !toyObject.boolIsToyChokingHazard.boolIsChokingHazardContent; // Assuming "No" means not a choking hazard
  const toyDescription = toyObject.strToyDescription;
  const quantity = toyObject.intToyQuantity;
  const primaryMaterial = toyObject.strToyPrimaryMaterial.strPrimaryMaterialName;
  const ageCategory = toyObject.strToyAgeGroup.strAgeCategoryName;

  // Select the listed div in the body tag of `selectedToypage.html`
  const toyContainerNew = document.getElementById("toy-content");
  //const imageSource = document.

  // Build the content string with placeholders for extracted data
  const content = `
    <div class="pageContainer">
      <div class="contentContainer">
        <div class="imageContainer"><img src="${imageSourceToy}" alt="toyImage"></div>
        <div class="toyNameSelected">${toyName}</div>
        <div class="toyPriceSelected">$${toyPrice.toFixed(2)}</div>
        <div class="qtyAvaliableSelected">Quantity available: ${quantity}</div>
        <div class="toyButtonSelected">
          <button>Add to Cart</button>
        </div>
      </div>
      <div class="contentContainer">
        <div class="descriptionSelected"><h2>Description:</h2>"${toyDescription}"</div>
        <div class="manufacturerSelected"><h2>Manufacturer:</h2>"${manufacturer}"</div>
        <div class="dimensionsSelected"><h2>Dimensions:</h2>"${toyDimensions}"</div>
        <div class="weightSelected"><h2>Weight:</h2>${toyWeight} ounces</div>
        <div class="chockingHazardSelected"><h2>Choking Hazard?</h2>${isChokingHazard}</div>
        <div class="primaryColorSelected"><h2>Primary Color:</h2>${primaryColor}</div>
        <div class="primaryMaterialSelected"><h2>Primary Material:</h2>${primaryMaterial}</div>
        <div class="ageGroupSelected"><h2>Age Group:</h2>${ageCategory}</div>
      </div>
    </div>`;

  // Set the content of the `toyContainer`
  toyContainerNew.innerHTML = content;

  // Select the image container element
const imageContainer = document.querySelector('.imageContainer img');

 // A switch case statement that makes the toy's image match to the declared variable to be passed onto the next js file which will inject that image.
 switch(toyName) {
    case "Silly Wooden Snake":
      var imageSourceToy = "../media/ToyImages/Toy0_Wood_Snake.png";
      console.log(`Selected Image Source: ${imageSourceToy}`)
      break;
    case "Wool Doll - Cat":
      var imageSourceToy = "../media/ToyImages/Toy1_Wool_Doll_Cat.jpg";
      console.log(`Selected Image Source: ${imageSourceToy}`)
      break;
    case "Wool Doll - Dog":
      var imageSourceToy = "../media/ToyImages/Toy2_Wool_Doll_Dog.jpg";
      console.log(`Selected Image Source: ${imageSourceToy}`)
      break;
    case "Wool Doll - Elephant":
      var imageSourceToy = "../media/ToyImages/Toy3_Wool_Doll_Elephant.jpg";
      console.log(`Selected Image Source: ${imageSourceToy}`)
      break;
    case "Wool Doll - Person, Option A":
      console.log("The Matching toy: toy4");      
      var imageSourceToy = "../media/ToyImages/Toy4_Wool_Doll_PersonA.jpg";
      console.log(`Selected Image Source: ${imageSourceToy}`)
      break;
    case "Wool Doll - Person, Option B":
      var imageSourceToy = "../media/ToyImages/Toy5_Wool_Doll_PersonB.jpg";
      console.log(`Selected Image Source: ${imageSourceToy}`)
      break;
    case "Wooden Car - Option B":
      var imageSourceToy = "../media/ToyImages/Toy6_Wood_Car_EverydayB.png";
      console.log(`Selected Image Source: ${imageSourceToy}`)
      break;
    case "Wooden Car - Option A":
      var imageSourceToy = "../media/ToyImages/Toy7_Wood_Car_EverydayA.png";
      console.log(`Selected Image Source: ${imageSourceToy}`)
      break;
    case "Wooden Piano":
      var imageSourceToy = "../media/ToyImages/Toy8_Wood_Piano.png";
      console.log(`Selected Image Source: ${imageSourceToy}`)
      break;
    case "Wooden Blocks - Home Set":
      var imageSourceToy = "../media/ToyImages/Toy9_Wood_Blocks_House.png";
      console.log(`Selected Image Source: ${imageSourceToy}`)
      break;
    case "Teething Toy - Rabbit":
      var imageSourceToy = "../media/ToyImages/Toy10_Wood_Teether_Rabbit.JPG";
      console.log(`Selected Image Source: ${imageSourceToy}`)
      break;
    case "Wool Plushie - Cat":
      var imageSourceToy = "../media/ToyImages/Toy11_Wool_Plushie_Cat.jpg";
      console.log(`Selected Image Source: ${imageSourceToy}`)
      break;
    case "Wool Plushie - Dog":
      var imageSourceToy = "../media/ToyImages/Toy12_Wool_Plushie_Dog.jpg";
      console.log(`Selected Image Source: ${imageSourceToy}`)
      break;
    case "Wool Plushie - Bird":
      var imageSourceToy = "../media/ToyImages/Toy13_Wool_Plushie_Bird.jpg";
      console.log(`Selected Image Source: ${imageSourceToy}`)
      break;
    case "Wool Plushie - Panda":
      var imageSourceToy = "../media/ToyImages/Toy14_Wool_Plushie_Panda.jpg";
      console.log(`Selected Image Source: ${imageSourceToy}`)
      break;
    case "Wool Plushie - Octopus":
      var imageSourceToy = "../media/ToyImages/Toy15_Wool_Plushie_Octopus.jpg";
      console.log(`Selected Image Source: ${imageSourceToy}`)
      break;
    case "Wool Plushie - Rabbit":
      var imageSourceToy = "../media/ToyImages/Toy16_Wool_Plushie_Rabbit.jpg";
      console.log(`Selected Image Source: ${imageSourceToy}`)
      break;
    case "Wooden Shopping Cart":
      var imageSourceToy = "../media/ToyImages/Toy17_Wood_ShoppingCart.jpg";
      console.log(`Selected Image Source: ${imageSourceToy}`)
      break;
    case "Wooden Puzzle Cube":
      var imageSourceToy = "../media/ToyImages/Toy18_Wood_PuzzleCube.jpg";
      console.log(`Selected Image Source: ${imageSourceToy}`)
      break;
    case "Wooden Chess Board & Pieces":
      var imageSourceToy = "../media/ToyImages/Toy19_Wood_Chess.jpg";
      console.log(`Selected Image Source: ${imageSourceToy}`)
      break;
  }

// Access the image source based on the toy name using the toyDataString
const imageSource = imageSourceToy; // Assuming the object name matches toy name

// Set the image source attribute of the image element
imageContainer.src = imageSource;
}

const cssLinkNew = document.createElement("link");
cssLinkNew.rel = "stylesheet";
cssLinkNew.href = "../css/selectedToyPage.css";
document.head.appendChild(cssLinkNew);

document.addEventListener("DOMContentLoaded", function() {}); // Empty event listener, no additional actions needed

