import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-nav-component',
  templateUrl: './nav-component.component.html',
  styleUrl: './nav-component.component.css'
})
export class NavComponentComponent implements OnInit {

  @Output() sideNavToggled = new EventEmitter <boolean>();
menuStatus:boolean = false;
  constructor(){}

  ngOnInit():void{}
    
  SideNavToggled(){
    this.menuStatus = !this.menuStatus;
    this.sideNavToggled.emit(this.menuStatus)
  }

}
