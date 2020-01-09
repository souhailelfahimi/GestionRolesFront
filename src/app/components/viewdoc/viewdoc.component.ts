import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-viewdoc',
  templateUrl: './viewdoc.component.html',
  styleUrls: ['./viewdoc.component.css']
})
export class ViewdocComponent implements OnInit {

  constructor() { 


   this.route.params.subscribe(params => 
  	 {
	  	this.idFolder = params['id'];
	  	

	  	console.log("param",`${id}`);
	  	});

 	 }

  ngOnInit() {
  }

}
