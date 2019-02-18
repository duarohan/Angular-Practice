import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appDropDown]'
})
export class DropDownDirective {
  
  constructor() { }
  @HostBinding('class.open') isOpen:boolean = false;
  //<div class = "list-group" appDropDown> </div> which resolves to below div tag  
  //<div class = "list-group open"></div>
  @HostListener('click') toggleOpen(){
    this.isOpen = !this.isOpen;
  }

}
