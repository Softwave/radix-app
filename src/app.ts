export class App {
  // Input values 
  public inputValue:number = 10; 
  public inputValueString:string = "10";
  public inputBase:number = 10; 

  public outputDecimal:number = 0;
  public outputDecimalString:string = "0";
  public outputBinary:string = "0";
  public outputHex:string = "0x0";

  dec2bin(dec:number, base:number) {
    return (dec >>> 0).toString(base);
  }

  async copyDecimal() {
    if (!navigator.clipboard) {
      return;
    }
    const clipText = this.outputDecimal.toString();
    try {
      await navigator.clipboard.writeText(clipText);
    } catch (err) {
      console.error('Failed to copy!', err);
    }
  }

  async copyBinary() {
    if (!navigator.clipboard) {
      return;
    }
    const clipText = this.outputBinary;
    try {
      await navigator.clipboard.writeText(clipText);
    } catch (err) {
      console.error('Failed to copy!', err);
    }
  }

  async copyHex() {
    if (!navigator.clipboard) {
      return;
    }
    const clipText = this.outputHex;
    try {
      await navigator.clipboard.writeText(clipText);
    } catch (err) {
      console.error('Failed to copy!', err);
    }
  }

  convert() {
    if (!isNaN(parseInt(this.inputValueString, this.inputBase))) {
      this.outputDecimal = parseInt(this.inputValueString, this.inputBase);
      this.outputBinary = this.dec2bin(this.outputDecimal, 2);
      this.outputHex = "0x" + this.dec2bin(this.outputDecimal, 16);
    } else {
      alert("You have entered an invalid input; try again.");
    }
    
  }


}
