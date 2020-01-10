import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {DocService} from '../../services/doc.service';
import {Doc} from '../../models/doc.model';
import {Attribute} from '../../models/attribute.model';

@Component({
  selector: 'app-viewdoc',
  templateUrl: './viewdoc.component.html',
  styleUrls: ['./viewdoc.component.css']
})
export class ViewdocComponent implements OnInit {

	idDoc;
	doc:any;
	type:any;
	titre:any;
	attributs:any;
  constructor(private route: ActivatedRoute,

  			private docService:DocService,
  			private router:Router) 
  { 


  	this.attributs=[];
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

 	 public createElement()
 	 {
 	 	console.log(this.type);
 	 	var para = document.createElement("input");
		para.setAttribute("type", this.type);
		para.setAttribute("placeholder", this.titre);
		para.setAttribute("class","form-control form-control-user");
		//para.setAttribute("[(ngModel)]","titre");
		var element = document.getElementById("att");
		element.appendChild(para);
 	 }
  ngOnInit() {
  }
  onSubmit()
  {
  	var c = document.getElementById("att").childNodes;
	  var txt = "";
	  var i;
	  for (i = 0; i < c.length; i++) {
	  	//console.log(c[i].nodeName,c[i],c[i].value,c[i].placeholder);
	    //txt = txt + c[i].nodeName + "<br>";
	    var at=new Attribute();
	    //at.doc=this.doc;
	    at.keyD=c[i]['placeholder'];
	    at.value=c[i]['value'];
	    this.attributs.push(at);


	  }
	  console.log(this.attributs);
	   this.docService.addAttribut2(this.idDoc,this.attributs).subscribe(result=>{
	    	console.log(result);
	    	this.router.navigate(['/readdocument',this.idDoc]);
	    });

	}
}
