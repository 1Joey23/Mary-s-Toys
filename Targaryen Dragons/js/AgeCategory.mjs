
//Age Category 'enum':
export default class AgeCategory{

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