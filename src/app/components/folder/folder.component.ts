import { Component, OnInit } from '@angular/core';
import {Folder} from '../../models/folder.model';
import {Doc} from '../../models/doc.model';
import {FolderService} from '../../services/folder.service';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.component.html',
  styleUrls: ['./folder.component.css']
})
export class FolderComponent implements OnInit {

private folder:Folder;
private showForm=false;
private folders:any=[]; 
  constructor(private folderService:FolderService) 
  {
  	this.folder=new Folder();
  }

  ngOnInit()
  {
  	this.folderService.getAllFolders().subscribe(result=>
  	{
  		console.log(result);
  		this.folders=result;
  	});
  }

  onSubmit(data)
  {

  	this.showForm=false;
  	this.folderService.addFolder(this.folder).subscribe(
  		result=>
  		{
  		this.folders.push(result);
  		this.showForm=false;
   	console.log(result);
   		},
   		error=>
   		{
   			this.folderService.getAllFolders().subscribe(result=>
			  	{
			  		console.log(result);
			  		this.folders=result;
			  	});
   		});
  	this.folderService.getAllFolders().subscribe(result=>
  	{
  		console.log(result);
  		this.folders=result;
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
