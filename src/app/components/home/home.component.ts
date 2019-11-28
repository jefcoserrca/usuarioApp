import { Component, OnInit } from '@angular/core';
import { ConexionService } from '../../conexion.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  {
data: any ;
paginas: any [] = [];
pagina: number = 1;
body:any;
  constructor(private conexion: ConexionService) {

    this.conexion.getUsers(this.pagina).subscribe( (data: any)=> { this.data = data.data;
console.log(this.data);
for(let i = 1; i<=data.total; i++){
  this.paginas.push(i);
}

    });

   }



buttonDelete(id:any) {
console.log(id);
this.conexion.delete(id);
$('#delete').modal('hide');
}

editButton(body:any){
this.conexion.update(body.id, body).subscribe((data)=> {console.log(data);
 $('#edit').modal('hide')
});
}

buttonPageMas(){
  if(this.pagina >= 1 && this.pagina<=2){
    this.pagina = this.pagina + 1;
    this.conexion.getUsers(this.pagina).subscribe( (data: any)=> { this.data = data.data;
     console.log(data);
    });
  }
}
buttonPageMenos(){
  if(this.pagina > 1 ){
    this.pagina = this.pagina - 1;
    this.conexion.getUsers(this.pagina).subscribe( (data: any)=> { this.data = data.data;
     console.log(data);
    });
  }
}
}
