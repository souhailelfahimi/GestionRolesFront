import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Folder} from '../../models/folder.model';
import {Doc} from '../../models/doc.model';
import {DocService} from '../../services/doc.service';
import {FolderService} from '../../services/folder.service';
import {AuthenticationService} from '../../services/authentication.service';

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
  private facturePath=null;
  private lettrePath=null;
  private nvDocument=true;
	private docs:any=[];
	consultation;
	ajouter;
	supprimer;
	update;
  constructor(private route: ActivatedRoute,
  				private docService:DocService,
  				private folderService:FolderService,
  				private authService:AuthenticationService)
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
  	 });

  	 	this.consultation=(this.authService.PermessionExist("consultation"))?true:false;
  	this.ajouter=(this.authService.PermessionExist("ajouter"))?true:false;
  	this.supprimer=(this.authService.PermessionExist("delete"))?true:false;
  	this.update=(this.authService.PermessionExist("modification"))?true:false;
  	console.log("role",this.authService.PermessionExist("update"));

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
  	 this.showForm=false;
  	//console.log(this.doc,this.folder);
  	console.log("Doc send",this.doc);
  	this.docService.addDoc({"id":this.idFolder,"titre":this.doc.titre}).subscribe(result=>{
  		//this.docs.push(result);
   	console.log(result);
   	 this.folderService.getFolderById(this.idFolder).subscribe(result=>
  	 {
  	 	console.log("200",result);
  	 	this.folder=result;
  	 	this.doc.setFolder(this.folder);
  	 })

   },
   error=>
   {
   	 this.folderService.getFolderById(this.idFolder).subscribe(result=>
  	 {
  	 	console.log("error",result);
  	 	this.folder=result;
  	 	this.doc.setFolder(this.folder);
  	 })
   });
  	  this.folderService.getFolderById(this.idFolder).subscribe(result=>
  	 {
  	 	console.log("getFolderById sub",result);
  	 	this.folder=result;
  	 	this.doc.setFolder(this.folder);
  	 })

  }


 deleteDoc(idToDelete)
 {
 	 this.docService.deleteDoc(idToDelete).subscribe(result=>
  	 {
  	 	console.log("Delete",result);
  	 	this.folderService.getFolderById(this.idFolder).subscribe(result=>
	  	 {

	  	 	this.folder=result;
	  	 	console.log("thisFolder",this.folder);
	  	 	this.doc.setFolder(this.folder);
	  	 })

  	 },
  	 error=>
  	 {
  	 	this.folderService.getFolderById(this.idFolder).subscribe(result=>
	  	 {

	  	 	this.folder=result;
	  	 	console.log("thisFolder ERROR",this.folder);
	  	 	this.doc.setFolder(this.folder);
	  	 })
  	 });

  	 this.folderService.getFolderById(this.idFolder).subscribe(result=>
  	 {

  	 	this.folder=result;
  	 	console.log("thisFolder 2",this.folder);
  	 	this.doc.setFolder(this.folder);
  	 })
 }

  async scanPDF(){
    console.log(this.facturePath)
    if(this.facturePath){
      await this.docService.addFacturePDF(this.idFolder,this.facturePath)
      this.folderService.getFolderById(this.idFolder).subscribe(result=>
        {
          console.log("200",result);
          this.folder=result;
          this.doc.setFolder(this.folder);
        })
    }else if(this.lettrePath){

    }

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
