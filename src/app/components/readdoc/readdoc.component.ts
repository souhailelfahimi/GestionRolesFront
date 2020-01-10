import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {DocService} from '../../services/doc.service';
import {Doc} from '../../models/doc.model';
import {Attribute} from '../../models/attribute.model';

@Component({
  selector: 'app-readdoc',
  templateUrl: './readdoc.component.html',
  styleUrls: ['./readdoc.component.css']
})
export class ReaddocComponent implements OnInit {
	idDoc;
	doc:any;
	type:any;
	titre:any;
  constructor(private route: ActivatedRoute,
  			private docService:DocService) 
  {
  	this.route.params.subscribe(params => 
  	 {
	  	this.idDoc = params['id'];
	  	

	  	console.log("param View",this.idDoc);
	 });

  	this.docService.getDocById(this.idDoc).subscribe(result=>
   			{
   				console.log("Doc",result);
   				this.doc=result;
   			});
  }

  ngOnInit() {
  }

}
