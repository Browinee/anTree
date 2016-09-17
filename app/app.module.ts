import { NgModule }          from '@angular/core';
import { BrowserModule }     from '@angular/platform-browser';
import {HttpModule}          from '@angular/http';
import { AppComponent }      from './app.component';
import {RenderTreeComponent} from './renderTree.component';
import {TreeDataService}	 from './treeData.service';
@NgModule({
  imports: [
    BrowserModule,
    HttpModule
  ],
  declarations: [
    AppComponent,
    RenderTreeComponent
  ],
  providers:[
     TreeDataService
  ],
 
  bootstrap: [ AppComponent ]
})
export class AppModule {
}

