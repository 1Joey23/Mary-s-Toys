
//Price Range 'enum':
export default class PriceRange{

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
  