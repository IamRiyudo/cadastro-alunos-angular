import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlunoService } from '../../services/aluno.service';

@Component({
  selector: 'app-lista-alunos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lista-alunos.component.html',
  styleUrls: ['./lista-alunos.component.css']
})
export class ListaAlunosComponent {
  constructor(public alunoService: AlunoService) {}
}