import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlunoService {
  private alunos: string[] = [];

  getListaAlunos(): string[] {
    return this.alunos;
  }

  adicionarAluno(nome: string): void {
    if (nome.trim()) {
      this.alunos.push(nome);
    }
  }
}