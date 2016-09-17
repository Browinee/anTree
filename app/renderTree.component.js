"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
// import {Observable}            from  'rxjs/Observable';
var RenderTreeComponent = (function () {
    function RenderTreeComponent() {
    }
    RenderTreeComponent.prototype.onClick = function (tdata) {
        tdata.checked = !tdata.checked;
        this.checkRecursive(tdata.data, tdata.checked);
    };
    RenderTreeComponent.prototype.checkRecursive = function (subdata, state) {
        var _this = this;
        subdata.forEach(function (sdata) {
            sdata.checked = state;
            if (sdata.data) {
                if (sdata.data.length > 0) {
                    _this.checkRecursive(sdata.data, state);
                }
            }
        });
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], RenderTreeComponent.prototype, "varTreeData", void 0);
    RenderTreeComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'render-tree',
            template: "\n\n\t    \n\n          <ul>\n\n              <li *ngFor=\"let tData of varTreeData\">\n               <span   class=\"iconButton\" *ngIf=\"tData.data && tData.name !=='\u672C\u6A5F\u78C1\u789F (D:)'\" [ngClass]=\"{'has-child':tData.data}\"(click)=\"tData.toggle=!tData.toggle\" class=\"toggle\">{{!!tData.toggle ? '-' : '+' }}</span>\n               <input type=\"checkbox\"  [checked]=\"tData.checked\" (click)=\"onClick(tData)\"/>{{tData.name}}\n\t\t\t\t\n\t\t\t\t <div *ngIf=\"tData.toggle\">\n\t\t\t\t    <render-tree [varTreeData]=\"tData.data\"></render-tree>\n\t\t\t\t\t\n\t\t\t\t </div>\n          \t  </li>\n\n          </ul>\n   ",
        }), 
        __metadata('design:paramtypes', [])
    ], RenderTreeComponent);
    return RenderTreeComponent;
}());
exports.RenderTreeComponent = RenderTreeComponent;
//# sourceMappingURL=renderTree.component.js.map