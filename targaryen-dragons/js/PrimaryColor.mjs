//The color 'enum':
export default class PrimaryColor{

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
  