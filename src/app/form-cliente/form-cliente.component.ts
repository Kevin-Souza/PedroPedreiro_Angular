import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Cliente } from '../models/cliente';
import { ClienteService } from '../Service/cliente.service';

@Component({
  selector: 'app-form-cliente',
  templateUrl: './form-cliente.component.html',
  styleUrls: ['./form-cliente.component.css']
})
export class FormClienteComponent implements OnInit {

  constructor(private cliente: ClienteService, private router: Router) { }

  model: Cliente = new Cliente();

  ngOnInit(): void {
  }

  onConfirmar(){
    console.log(this.model);
  }

  OnSubmit(): void {
    this.cliente.Adicionar(this.model).subscribe({
      next: result => {
        console.log(result)
        this.router.navigate(['/clientes']);

      }
    })
  }

}
