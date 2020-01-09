import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Folder} from '../../models/folder.model';
import {Doc} from '../../models/doc.model';
import {DocService} from '../../services/doc.service';
import {FolderService} from '../../services/folder.service';

@Component({
  selector: 'app-doc',
  templateUrl: './doc.component.html',
  styleUrls: ['./doc.component.css']
})
export class DocComponent implements OnInit {

	public folder:any; 
	idFolder:number;
	private showForm=false;
	private doc:Doc;

	private docs:any=[];
  constructor(private route: ActivatedRoute,
  				private docService:DocService,
  				private folderService:FolderService) 
  {
  	this.doc=new Doc();
  	 this.route.params.subscribe(params => 
  	 {
  	this.idFolder = params['id'];
  	

  	console.log("param",this.idFolder);
  	});

  	 this.folderService.getFolderById(this.idFolder).subscribe(result=>
  	 {
  	 	console.log("getFolderById",result);
  	 	this.folder=result;
  	 	this.doc.setFolder(this.folder);
  	 })

   }

  ngOnInit() {
  	
  	this.docService.getDocsByFolder(this.idFolder).subscribe(result=>
  	{
  		console.log(result);
  		this.docs=result;
  	});


  }

   onSubmit(data)
  {
  	 
  	//console.log(this.doc,this.folder);
  	console.log("Doc send",this.doc);
  	this.docService.addDoc({"id":this.idFolder,"titre":this.doc.titre}).subscribe(result=>{
   	console.log(result);
   });
  }

  funcShowForm()
 {
 	if(this.showForm===false)
 	{
 		this.showForm=true;
 	}
 	else
 	{
 		this.showForm=false;
 	}
 }

}
