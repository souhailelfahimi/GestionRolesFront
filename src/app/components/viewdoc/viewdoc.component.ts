import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {DocService} from '../../services/doc.service';
import {Doc} from '../../models/doc.model';

@Component({
  selector: 'app-viewdoc',
  templateUrl: './viewdoc.component.html',
  styleUrls: ['./viewdoc.component.css']
})
export class ViewdocComponent implements OnInit {

	idDoc;
	doc:any;
  constructor(private route: ActivatedRoute,
  			private docService:DocService) { 


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
   		{

   		}

 	 }

  ngOnInit() {
  }

}
