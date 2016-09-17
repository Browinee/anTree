import { Component,Input}      from  '@angular/core';
import {Tree}                  from  './tree';
import {TreeDataService}       from  './treeData.service';
// import {Observable}            from  'rxjs/Observable';
@Component({
  moduleId:module.id,
  selector:'render-tree',
  template:`

	    

          <ul>

              <li *ngFor="let tData of varTreeData">
               <span   class="iconButton" *ngIf="tData.data && tData.name !=='本機磁碟 (D:)'" [ngClass]="{'has-child':tData.data}"(click)="tData.toggle=!tData.toggle" class="toggle">{{!!tData.toggle ? '-' : '+' }}</span>
               <input type="checkbox"  [checked]="tData.checked" (click)="onClick(tData)"/>{{tData.name}}
				
				 <div *ngIf="tData.toggle">
				    <render-tree [varTreeData]="tData.data"></render-tree>
					
				 </div>
          	  </li>

          </ul>
   `,







})
export class RenderTreeComponent{

	
	@Input ()
	private varTreeData;
                  

    onClick(tdata){
        tdata.checked = !tdata.checked;
        
           this.checkRecursive(tdata.data,tdata.checked);
        	
       
	  		
       
        

    }

    checkRecursive(subdata,state){
    	   subdata.forEach(sdata=>{
        	                 sdata.checked = state;
        	                 if(sdata.data){
        	                    if(sdata.data.length>0){
        	                	this.checkRecursive(sdata.data,state);
        	                    }


        	            

        	              


                    });
       
        
      	
    }
  
}



