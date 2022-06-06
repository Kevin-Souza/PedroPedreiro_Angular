import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Cliente } from '../models/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  api: string = environment.api;

  constructor(private http: HttpClient) { }

  public ObterTodos(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(this.api + 'cliente');
  }

  public ObterPorId(id: number): Observable<Cliente> {
    return this.http.get<Cliente>(this.api + 'clientes/' + id);
  }

  public Adicionar(cliente: Cliente): Observable<number> {
    return this.http.post<number>(this.api + "clientes", cliente);
  }

  public Editar(id: number, cliente: Cliente): Observable<number> {
    return this.http.put<number>(this.api + 'clientes/' + id, cliente);
  }

  public Deletar(id: Number): Observable<number> {
    return this.http.delete<number>(this.api + 'clientes/' + id);
  }
}