import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {DocService} from '../../services/doc.service';
import {Doc} from '../../models/doc.model';
import {Attribute} from '../../models/attribute.model';

@Component({
  selector: 'app-udatedoc',
  templateUrl: './udatedoc.component.html',
  styleUrls: ['./udatedoc.component.css']
})
export class UdatedocComponent implements OnInit 
{
	idDoc;
	doc:Doc;
	type:any;
	titre:any;
	attributs:any;
  constructor(
  			private route: ActivatedRoute,
  			private docService:DocService,
  			private router:Router) 
  			{ 
  				this.route.params.subscribe(params => 
			  	 {
				  	this.idDoc = params['id'];
				  	console.log("param View",this.idDoc);

				  	this.docService.getDocById(this.idDoc).subscribe(result=>
		   			{ 
		   				this.doc=result;
		   			});
				 });

  				

this.createElement();
  			}

  ngOnInit() 
  {
  	
  }

  public createElement()
 { 
 	
 	this.route.params.subscribe(params => 
			  	 {
				  	this.idDoc = params['id'];
				  	console.log("param View",this.idDoc);

				  	this.docService.getDocById(this.idDoc).subscribe(result=>
		   			{ 
		   				this.doc=result;
		   			});
				 });
 	this.docService.getDocById(this.idDoc).subscribe(result=>
	{ 
		this.doc=result;
		result.attributes.forEach(function(item)
			{
				var para = document.createElement("input");
				para.setAttribute("placeholder", item.keyD);
				para.setAttribute("value", item.value);
				para.setAttribute("class","form-control form-control-user");
				var element = document.getElementById("att");
				element.appendChild(para);
			});
		console.log("result",result);
	});

 	console.log("function create ",this.doc,this.idDoc);
 	
	
}
onSubmit()
{
	var c = document.getElementById("att").childNodes;
	  var txt = "";
	  var i;
	  this.attributs=[];
	  console.log("Attribut",this.doc);
	  for (i = 0; i < c.length; i++) {
	  	//console.log(c[i].nodeName,c[i],c[i].value,c[i].placeholder);
	    //txt = txt + c[i].nodeName + "<br>";
	    var at=new Attribute();
	    at.id=this.doc.attributes[i].id;
	    //at.doc=this.doc;
	    at.keyD=c[i]['placeholder'];
	    at.value=c[i]['value'];
	    this.attributs.push(at);
	    console.log(this.attributs);
	}

	this.docService.modAttribut(this.attributs).subscribe(result=>{
	    	console.log(result);
	    	this.router.navigate(['/readdocument',this.idDoc]);
	    });

}

}
