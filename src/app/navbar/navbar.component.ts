import { Component } from '@angular/core';

@Component({
  selector: 'nav-bar',
  templateUrl: `app/navbar/navbar.component.html`,
})
export class NavbarComponent  { 
	private ProjectName:string;
	constructor(){
	this.ProjectName = "A2Website";
	}
 }
