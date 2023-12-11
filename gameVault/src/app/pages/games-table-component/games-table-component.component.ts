import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ActivatedRoute, Router} from '@angular/router';


@Component({
  selector: 'app-games-table-component',
  standalone: true,
  imports: [CommonModule,HttpClientModule],
  templateUrl: './games-table-component.component.html',
  styleUrl: './games-table-component.component.css'
})
export class GamesTableComponentComponent {
  games:any = null;

  constructor(protected httpClient: HttpClient, private router: Router) {
    this.obtenerJuego();
  }

  obtenerJuego() {
    this.httpClient.get('http://localhost:3000/api/games').subscribe(
      (respuesta: any) => {
        this.games = respuesta;
      }
    )
  }

  eliminarJuego(id: number){
    console.log('entro a eliminar')
    this.httpClient.delete('http://localhost:3000/api/games/' + id).subscribe(
      respuesta => {
        this.obtenerJuego();
        alert('Se eliminó');
      }
    );
    console.log('procesando la eliminacion');
  }


}
