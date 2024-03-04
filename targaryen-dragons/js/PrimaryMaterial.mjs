//Primary Material 'enum':
export default class PrimaryMaterial{

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