import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-reset',
  template:`<ion-row>
    <ion-col>
    <button ion-button
    color="danger"
    small
    block
    (click)="onReset('all')">Reset Todos</button>
    </ion-col>

    <ion-col>
    <button ion-button
    color="danger"
    small
    block
    (click)="onReset('tap')">Reset toques</button>
    </ion-col>

    <ion-col>
    <button ion-button
    color="danger"
    small
    block
    (click)="onReset('press')">Reset Pressione</button>
    </ion-col>
  </ion-row>`
})

export class ResetComponent implements OnInit {

  @Output() didReset = new EventEmitter<string>();
  constructor() { }

  ngOnInit() { }

  onReset(type: string){
    this.didReset.emit(type);

  }
}
