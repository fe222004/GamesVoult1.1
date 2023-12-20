import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navegate-admi-component',
  templateUrl: './navegate-admi-component.component.html',
  styleUrl: './navegate-admi-component.component.css'
})
export class NavegateAdmiComponentComponent {

  constructor(protected httpClient: HttpClient, private router: Router) {
    
  }

  gamerForm() {
    this.router.navigate(['/registro/:id']); 
  }

  gamerTable() {
    this.router.navigate(['/gamers-table']); 
  }
}
