import { Directive, HostBinding, HostListener } from "@angular/core";

@Directive({
    selector: '[appDropdown]'
})
export class DropdownDirective{

    @HostBinding('class.open') open : boolean = false;

    @HostListener('click') 
    changeState(){
        this.open = !this.open;
    }


}