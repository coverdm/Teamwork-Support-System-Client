import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogComponent } from 'app/util/dialog/dialog.component';
import { MaterializeModule } from 'angular2-materialize/dist/materialize-module';

@NgModule({
    declarations: [ DialogComponent ],
    imports: [ CommonModule, MaterializeModule ],
    exports: [ DialogComponent ],
    providers: [],
})
export class UtilModule {}