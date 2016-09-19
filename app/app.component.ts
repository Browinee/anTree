import {Component}             from '@angular/core';
import {RenderTreeComponent}   from './renderTree.component';
import {TreeDataService}       from './treeData.service';
import {Observable}            from  'rxjs/Observable';
import {Tree}                  from './tree';
@Component({
  moduleId:module.id,
	selector:'app-root',
	templateUrl:'app.component.html',
  styleUrls:['app.component.css'],
  directives:[RenderTreeComponent],
  providers:[TreeDataService]

})

export class AppComponent{




    private treeData: Tree[];
    private _errorMessage:string;
    constructor(private tds:TreeDataService){}
    
   ngOnInit(){

     this.getTree();
     
   }
   getTree(){
     this.tds.getTreeData()
          .subscribe(
                    treeDatas => this.treeData      = treeDatas,
                    error     => this._errorMessage = error

                );

   }
}