import { Component } from '@angular/core';

@Component({
  selector: 'jumbo-tron',
  templateUrl: `app/jumbotron/jumbotron.component.html`,
})
export class JumbotronComponent  { 
	private JbtHeading:string;
	private JbtText:string;
	private JbtBtnText:string;
	private JbtBtnUrl:string;
	constructor(){
	this.JbtHeading = "Hello World!";
	this.JbtText = "This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information";
	this.JbtBtnText = "Read More";
	this.JbtBtnUrl = "http://test.com";		
	}
 }