import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-doc',
  templateUrl: './doc.component.html',
  styleUrls: ['./doc.component.css']
})
export class DocComponent implements OnInit {

  constructor(private route: ActivatedRoute) 
  {

  	 this.route.params.subscribe(params => 
  	 {
  	let id = params['id'];
  	

  	console.log("param",`${id}`);
  	});

   }

  ngOnInit() {
  }

}
