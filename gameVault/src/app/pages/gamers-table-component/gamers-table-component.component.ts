import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-gamers-table-component',
  templateUrl: './gamers-table-component.component.html',
  styleUrl: './gamers-table-component.component.css'
})
export class GamersTableComponentComponent {

  gamers:any = null;

  constructor(protected httpClient: HttpClient, private router: Router) {
    this.obtenerGamers();
  }


  editarGamer(id: number) {
    // Supongamos que tienes una ruta '/editar-gamer' asociada al formulario de edición
    this.router.navigate(['/gamer-registro', id]); // Redirecciona con el ID del jugador
  }

  obtenerGamers() {
    this.httpClient.get('http://localhost:3000/api/gamers').subscribe(
      (respuesta: any) => {
        this.gamers = respuesta;
      }
    )
  }

  eliminarGamer(id: number){
    console.log('entro a eliminar')
    this.httpClient.delete('http://localhost:3000/api/gamers/' + id).subscribe(
      respuesta => {
        this.obtenerGamers();
        alert('Se eliminó');
      }
    );
    console.log('procesando la eliminacion');
  }

}
