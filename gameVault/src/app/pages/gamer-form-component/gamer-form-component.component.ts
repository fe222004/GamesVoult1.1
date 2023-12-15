import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './gamer-form-component.component.html',
  styleUrl: './gamer-form-component.component.css',
})
export class GamerFormComponentComponent {

  protected formGamers: FormGroup;
  protected editingMode!: boolean;
  private id_gamers!: number;
 
  constructor(private formBuilder: FormBuilder, private httpClient: HttpClient, private router: Router,private route: ActivatedRoute) {
    this.formGamers = this.formBuilder.group({
      nombre: [null, [Validators.required]],
      apellido: [null, [Validators.required]],
      rol: [null, [Validators.required]],
      usuario: [null, [Validators.required]],
      correo: [null, [Validators.required]],
      pasword: [null, [Validators.required]],
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
          },
          (error: any) => {
            console.error('Error al realizar la solicitud POST', error);
            // Maneja el error de manera adecuada, muestra un mensaje al usuario, etc.
          }
        );
    } else {
      console.error('Formulario no válido');
      // Realiza acciones si el formulario no es válido
    }
  }


  gamer(gamer: any) {
    this.editingMode = true; // Establecer el modo de edición como verdadero
    this.formGamers.patchValue({
      nombre: gamer.nombre,
      apellido: gamer.apellido,
      rol: gamer.rol,
      usuario: gamer.usuario,
      correo: gamer.correo,
      pasword: gamer.pasword,
    });
  }

  resetForm() {
    this.editingMode = false; // Cambiar al modo de edición falso
    this.formGamers.reset(); // Reiniciar el formulario
  }

  editarGamer(id: number) {
    const url = `http://localhost:3000/api/gamers/${id}`;
    console.log(this.formGamers.value);
  
    if (this.formGamers.valid) {
      this.httpClient.put(url, this.formGamers.value)
        .subscribe(
          (response: any) => {
            console.log('Solicitud PUT exitosa', response);
            // Realizar acciones adicionales después de una respuesta exitosa si es necesario
          },
          (error: any) => {
            console.error('Error al realizar la solicitud PUT', error);
            // Manejar el error de manera adecuada, mostrar un mensaje al usuario, etc.
          }
        );
    } else {
      console.error('Formulario no válido');
      // Realizar acciones si el formulario no es válido
    }
  }
  
}
