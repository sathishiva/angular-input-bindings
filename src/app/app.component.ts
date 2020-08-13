import { Component, VERSION, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  ip1 = '';
  output2 = '';
  output3 = '';
  output4 = '';
  @ViewChild('ip2', {static: true}) ip2: ElementRef;
  ngOnInit() {
    this.ip2.nativeElement.value = "initial";
  }
  showOp2() {    
    this.output2 = this.ip2.nativeElement.value;
  }
  onKeyupInput(e) {
    this.output3 = e.target.value;
  }
  onKeyupInputRef(val) {
    this.output4 = val;
  }
}
