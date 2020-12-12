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

  

  copyDecimal() {
    let clip = new Clippy();
    clip.copy(this.outputDecimal.toString(), "#outputDecimal");
  }

  copyBinary() {
    let clip = new Clippy();
    clip.copy(this.outputBinary, "#outputBinary");
  }

  copyHex() {
    let clip = new Clippy();
    clip.copy(this.outputHex, "#outputHex");
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

class Clippy {
  copy(inputText:string, elementID:string) {
    try {
      if ((navigator as any).clipboard) {
        (navigator as any).clipboard.writeText(inputText);
      } else if ((window as any).clipboardData) {  // IE
        (window as any).clipboardData.setData('text', inputText);
      } else {  // other browsers, iOS, Mac OS
        let element = document.querySelector(elementID) as HTMLInputElement;
        this.copyToClipboard(element);
      }
      //this.tooltipText = 'Copied to Clipboard.';  // copy succeed.
    } catch (e) {
     // this.tooltipText = 'Please copy coupon manually.';  // copy failed.
    }
  }

  private copyToClipboard(el: HTMLInputElement) {
    const oldContentEditable = el.contentEditable;
    const oldReadOnly = el.readOnly;

    try {
      el.contentEditable = 'true';  // specific to iOS
      el.readOnly = false;
      this.copyNodeContentsToClipboard(el);
    } finally {
      el.contentEditable = oldContentEditable;
      el.readOnly = oldReadOnly;
    }
  }

  private copyNodeContentsToClipboard(el: HTMLInputElement) {
    const range = document.createRange();
    const selection = window.getSelection();
    range.selectNodeContents(el);
    selection.removeAllRanges();

    selection.addRange(range);
    el.setSelectionRange(0, 999999);

    document.execCommand('copy');
  }
}


