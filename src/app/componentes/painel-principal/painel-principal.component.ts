import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { ProdutoService } from '../../servicos/produto.service';

@Component({
  selector: 'app-painel-principal',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './painel-principal.component.html',
  styleUrls: ['./painel-principal.component.css']
})
export class PainelPrincipalComponent implements OnInit {
  produtos: any[] = [];

  constructor(private produtoService: ProdutoService, private router: Router) {}

  ngOnInit(): void {
    this.listarProdutos();
  }

  listarProdutos(): void {
    this.produtoService.obterProdutos().subscribe((dados: any[]) => {
      this.produtos = dados;
    });
  }

  excluirProduto(id: number): void {
    if (confirm('Deseja realmente excluir este produto?')) {
      this.produtoService.deletarProduto(id).subscribe(() => {
        alert('Produto excluído com sucesso!');
        this.listarProdutos();
      });
    }
  }

  editarProduto(id: number): void {
    this.router.navigate(['/cadastro-produto', id]);
  }
}
