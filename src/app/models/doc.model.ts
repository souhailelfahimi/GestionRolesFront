import {Attribute} from './attribute.model';
import {Folder} from './folder.model';
export class Doc {
public id:number;
public titre:string;
public folder:Folder;
public attribute:[];

public setFolder(f:Folder)
{
	this.folder=f;
}
}
