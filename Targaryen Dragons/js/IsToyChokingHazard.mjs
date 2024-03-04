
//The 'enum' for if a toy is a choking hazard
export default class IsToyChokingHazard {

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
