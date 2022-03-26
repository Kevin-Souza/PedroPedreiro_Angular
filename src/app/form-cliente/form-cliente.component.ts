import { Component, OnInit } from '@angular/core';
import { Cliente } from '../models/cliente';

@Component({
  selector: 'app-form-cliente',
  templateUrl: './form-cliente.component.html',
  styleUrls: ['./form-cliente.component.css']
})
export class FormClienteComponent implements OnInit {

  constructor() { }

  model: Cliente = new Cliente();

  ngOnInit(): void {
  }

  onConfirmar(){
    console.log(this.model);
  }

}
