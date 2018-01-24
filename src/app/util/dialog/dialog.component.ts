import { Component, OnInit, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { MaterializeAction } from 'angular2-materialize';
import { OnChanges, OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';
import { DialogProperties } from './dialog-properties.model';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnChanges {
  
  @Input() properties: DialogProperties;
  @Input() openDialog;
  @Output() closedDialog: EventEmitter<boolean> = new EventEmitter<boolean>();

  modalActions = new EventEmitter<string | MaterializeAction>();
  
  ngOnChanges(): void {
    this.openDialog ? this.openModal(): null;
  }

  openModal() {
    this.modalActions.emit({ action: 'modal', params: ['open'] });
  }

  closeModal() {
    this.modalActions.emit({ action: 'modal', params: ['close'] });
    this.closedDialog.emit(true);
  }
  
  constructor() { }
}
