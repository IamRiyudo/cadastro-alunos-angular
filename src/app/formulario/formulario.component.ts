import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AlunoService } from '../services/aluno.service'
import { ListaAlunosComponent } from '../components/lista-alunos/lista-alunos.component';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [FormsModule, ListaAlunosComponent],
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})

export class FormularioComponent {
  nome: string = '';

  constructor(private alunoService: AlunoService) {}

  salvar(): void {
    this.alunoService.adicionarAluno(this.nome);
    this.nome = '';
  }
}
