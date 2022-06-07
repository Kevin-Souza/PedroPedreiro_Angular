import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Cliente } from '../models/cliente';
import { ClienteService } from '../Service/cliente.service';

@Component({
  selector: 'app-form-cliente',
  templateUrl: './form-cliente.component.html',
  styleUrls: ['./form-cliente.component.css']
})

export class FormClienteComponent implements OnInit {

  constructor(
    private router: Router,
    private clienteService: ClienteService,
    private route: ActivatedRoute
  ) { }

  model: Cliente = new Cliente;

  voltarParaLista() {
    this.router.navigate(["/clientes"]);
  }

  OnSubmit(): void {
    var id: number = this.route.snapshot.params['id'];

    if (id > 0) {
      this.clienteService.Editar(id, this.cliente).subscribe((data) => {
        if (data > 0) {
          alert('Cliente alterado com sucesso!');
          this.voltarParaLista();
        }
      });
    }
    else {
      this.clienteService.Adicionar(this.cliente).subscribe((data) => {
        if (data > 0) {
          alert('Cliente alterado com sucesso!');
          this.voltarParaLista();
        }
      });
    }
  }

  ngOnInit(): void {
  }

  obterPorId() {
    var id: number = this.route.snapshot.params['id'];

    this.clienteService.ObterPorId(id).subscribe(

      dados => {
        this.cliente = dados;
      },
      (err) => {
        console.log(err)
      }
    );
  }

}
