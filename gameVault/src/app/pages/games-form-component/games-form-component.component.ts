import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-games-form-component',
  templateUrl: './games-form-component.component.html',
  styleUrl: './games-form-component.component.css',
})
export class GamesFormComponentComponent {
  protected formGames: FormGroup;

  public archivos: any = [];
  previsualizacion: string | null = null;
  

  constructor(
    private formBuilder: FormBuilder,
    private httpClient: HttpClient,
    private sanitizer: DomSanitizer
  ) {
    this.formGames = this.formBuilder.group({
      nombre: [null, [Validators.required]],
      descripcion: [null, [Validators.required]],
      fechaactualizacion: [null, [Validators.required]],
      idioma: [null, [Validators.required]],
      peso: [null, [Validators.required]],
      version: [null, [Validators.required]],
      imagen: [null, [Validators.required]],
      archivo: [null, [Validators.required]],
    });

  }

  saveGames() {
    console.log(this.formGames.value);

    if (this.formGames.valid) {
      this.httpClient
        .post('http://localhost:3000/api/games', this.formGames.value)
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

  capturarFile(event: any) {
    const archivoCapturado = event.target.files[0];
    this.extraerBase64(archivoCapturado).then((imagen:any) => {
   
      this.previsualizacion = imagen.base;
        console.log(imagen);
   
    });

    //this.archivos.push(archivoCapturado)
    //console.log(event.target.files)
  }

  extraerBase64 = async ($event: any) => {
    return new Promise((resolve, reject) => {
      try {
        const unsafeImg = window.URL.createObjectURL($event);
        const image = this.sanitizer.bypassSecurityTrustUrl(unsafeImg);
        const reader = new FileReader();
  
        reader.onload = () => {
          resolve({
            base: reader.result,
          });
        };
  
        reader.onerror = (_error) => {
          reject('Error al leer el archivo.');
        };
  
        reader.readAsDataURL($event);
      } catch (e) {
        reject('Error inesperado al procesar el archivo.');
      }
    });
  };
  
}
