import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Route, Router } from '@angular/router';


@Component({
  selector: 'app-user',
  templateUrl: './gamer-form-component.component.html',
  styleUrl: './gamer-form-component.component.css',
})
export class GamerFormComponentComponent {
  
  protected formGamers: FormGroup;
  protected editingMode!: boolean;
  idUser = this.route.snapshot.params['id']
  user:any = {}

 
  constructor(private formBuilder: FormBuilder, private httpClient: HttpClient, private router: Router,private route: ActivatedRoute) {
    if(this.idUser == 0){} if(this.idUser != 0 ){this.getUser()}
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


  resetForm() {
    this.editingMode = false; // Cambiar al modo de edición falso
    this.formGamers.reset(); // Reiniciar el formulario
  }

  editarGamer() {
    const url = `http://localhost:3000/api/gamers/${this.idUser}`;
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

  getUser (){
    this.httpClient.get('http://localhost:3000/api/gamers/'+this.idUser).subscribe(
      (respuesta: any) => {
        //this.user = respuesta;
        console.log(respuesta)
        this.formGamers.patchValue(respuesta)
      }
    )
  }
  
}







