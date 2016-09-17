import {Injectable}          from '@angular/core';

import {Tree}                from './tree';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {Observable}          from 'rxjs/Observable';
import {Http,Response}       from '@angular/http';
@Injectable()
export class TreeDataService{



  constructor(private http:Http){}

  private _url = "app/treeData.json";
  getTreeData(): Observable<Tree[]> {
    return this.http.get(this._url)
                    .map(res =>res.json())
                    .catch(this.handleError);

  }

  private handleError(error:any){
      
      let errorMsg = (error.message)?error.message:
                     error.status?`${error.status}-${error.statusText}`:'Server error';
      return Observable.throw(errorMsg);
 
  }



 }
