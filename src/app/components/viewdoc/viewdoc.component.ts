import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-viewdoc',
  templateUrl: './viewdoc.component.html',
  styleUrls: ['./viewdoc.component.css']
})
export class ViewdocComponent implements OnInit {

	idFolder;
  constructor(private route: ActivatedRoute) { 


   this.route.params.subscribe(params => 
  	 {
	  	this.idFolder = params['id'];
	  	

	  	console.log("param",this.idFolder);
	  	});

 	 }

  ngOnInit() {
  }

}
