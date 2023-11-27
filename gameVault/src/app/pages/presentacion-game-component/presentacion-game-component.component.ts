import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
;

@Component({
  selector: 'app-presentacion-game-component',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, HttpClientModule],
  templateUrl: './presentacion-game-component.component.html',
  styleUrl: './presentacion-game-component.component.css'
})
export class PresentacionGameComponentComponent {
    protected comentForm: FormGroup;

    constructor(private formBuilder : FormBuilder){
      this.comentForm = this.formBuilder.group({
        comentario: [null, [Validators.required]],

      });
    }
}
