import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-user',
  templateUrl: './gamer-form-component.component.html',
  styleUrl: './gamer-form-component.component.css',
})
export class GamerFormComponentComponent {
  protected form: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      nombre: [null, [Validators.required]],
      apellido: [null, [Validators.required]],
      genero: [null, [Validators.required]],
      usuario: [null, [Validators.required]],
      correo: [null, [Validators.required]],
      contraseña: [null, [Validators.required]],
    });
  }

   save(){
    if(this.form.status==='VALID'){
      alert('Valido');
    }else{
      this.form.markAllAsTouched();
    }
   }
}
