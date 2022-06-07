import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from '../models/cliente';
import { ClienteService } from '../Service/cliente.service';

@Component({
  selector: 'app-list-clientes',
  templateUrl: './list-clientes.component.html',
  styleUrls: ['./list-clientes.component.css']
})
export class ListClientesComponent implements OnInit {

  constructor(private route: Router, private clienteService: ClienteService) { }

  cliente!: Cliente[];

  cadastrarCliente() {
    this.route.navigate(["/clientes"]);
  }

  ngOnInit(): void {
    //this.obterTodos();
  }

  obterTodos() {
    this.clienteService.ObterTodos().subscribe(
      dados => {
        this.cliente = dados;
      },
      (err) => {
        console.log(err)
      }
    );
  }

}
