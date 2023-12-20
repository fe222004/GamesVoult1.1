import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-registro-component',
  templateUrl: './registro-component.component.html',
  styleUrl: './registro-component.component.css'
})
export class RegistroComponentComponent {

  protected formGamers: FormGroup;
  protected editingMode!: boolean;
  idUser = this.route.snapshot.params['id']
  user:any = {}

 
  constructor(private formBuilder: FormBuilder, private httpClient: HttpClient, private router: Router,private route: ActivatedRoute) {
    this.formGamers = this.formBuilder.group({
      nombre: ['',[Validators.required, Validators.pattern('[a-zA-Z]+$')]],
      apellido: ['', [Validators.required,Validators.pattern('[a-zA-Z]+$')]],
      rol: ['', [Validators.required]],
      usuario: ['', [Validators.required,Validators.maxLength(9)]],
      correo: ['', [Validators.required, Validators.email]],
      pasword: ['', [Validators.required,Validators.minLength(8)]],
    });
  }


  save() {
    
    const url = 'http://localhost:3000/api/gamers';
    console.log(this.formGamers.value) 

    if (this.formGamers.valid) {
      this.httpClient.post('http://localhost:3000/api/gamers', this.formGamers.value)
        .subscribe(
          (response: any) => {
            console.log('Solicitud POST exitosa', response);
            // Realiza acciones adicionales después de una respuesta exitosa si es necesario
            alert('Bienvenido a Gamer Vault, ahora ingresa nuevamente')
          },
          (error: any) => {
            console.error('Error al realizar la solicitud POST', error);
            // Maneja el error de manera adecuada, muestra un mensaje al usuario, etc.
            alert('"Lo sentimos, no cumples con los requisitos. Verifica si completaste bien los campos."')
          }
        );
    } else {
      console.error('Formulario no válido');
      // Realiza acciones si el formulario no es válido
      alert('"Lo sentimos, no cumples con los requisitos. Verifica si completaste bien los campos."')
    }
  }


  resetForm() {
    this.editingMode = false; // Cambiar al modo de edición falso
    this.formGamers.reset(); // Reiniciar el formulario
  }

  

}
