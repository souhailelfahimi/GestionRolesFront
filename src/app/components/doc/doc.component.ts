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

	folder:Folder;
	idFolder:number;
	private showForm=false;
	private doc:Doc;
	private docs:Doc[]=[];
  constructor(private route: ActivatedRoute,
  				private docService:DocService,
  				private folderService:FolderService) 
  {
  	this.doc=new Doc();
  	 this.route.params.subscribe(params => 
  	 {
  	this.idFolder = params['id'];
  	

  	console.log("param",`${id}`);
  	});
  	 this.folderService.getFolderById(this.idFolder).subscribe(result=>
  	 {
  	 	console.log("getFolderById",result);
  	 	this.folder=result;
  	 	this.doc.folder=this.folder;
  	 })

   }

  ngOnInit() {
  }

   onSubmit(data)
  {
  	 
  	console.log(this.doc,this.folder);

  	this.docService.addDoc(this.doc).subscribe(result=>{
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
