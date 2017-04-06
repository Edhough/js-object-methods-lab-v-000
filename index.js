class President {
  constructor(name, politicalParty, yearsInOffice, homeState) {
    this.name = name;
    this.politicalParty = politicalParty;
    this.yearsInOffice = yearsInOffice;
    this.homeState = homeState
  }

  veto() {
    return "NO!"
  }
  passBill() {
    return "You can do that!"
  }
  doCharity() {
    return "I like to help people."
  }
  conductPressInterview() {
    return "I am proud to be an American."
  }
  sayHi() {
    return `Hi, my name is ${this.name}. I am from ${this.homeState}. I represent the ${this. politicalParty}s, and was in office ${this.yearsInOffice}.`
  }
}

var gw = new President ("George Washington", 'Liberal', '40', 'Washington')
var al = new President ("Abraham Lincolm", 'Conservative', '2', 'Alabama')
var rn = new President ('Richard Nixon', 'Democrat', '0', 'New York')
var jc = new President ('Jimmy Carter', 'Liberal', '3', 'Kansas')
