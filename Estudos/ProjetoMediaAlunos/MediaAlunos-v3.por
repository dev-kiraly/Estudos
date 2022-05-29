programa
{
	inteiro qtdAlunosSala = 1
	inteiro nAlunoAtual = 1
	inteiro media = 0
	real boletim[5][100]
	funcao descubraQuantosAlunos()
	{
		escreva("Oi, seja bem vindo ao meu primeiro projeto!\n")
		escreva("Vamos salvar as notas dos seus Alunos em um Boletim,\ne Saber se eles foram Aprovados ou Reprovados.\n\n")
		escreva("Quantos alunos voce tem em sua sala?\n")
		leia(qtdAlunosSala)
		enquanto(qtdAlunosSala>=100)
		{		
			escreva("\nSó é Permitido até 100 alunos por sala, insira um número abaixo de 100 alunos para prosseguir:\n")
			leia(qtdAlunosSala)
		}
		escreva("\nOk!")
	}
	
	funcao md(real n1, real n2)
	{
		media = (n1+n2)/2
	}
	funcao quaisAprovados()
	{
		inteiro l = 2
		inteiro p = 1
		para(p=1;p<=100;p++)
		{
			p --
			se(boletim[l][p] > 0)
			{
				se(boletim[l][p] < 7)
				{
					p++
					escreva("\nAluno " + p + " está Reprovado.")					
				}
				senao
				{
					p++
					escreva("\nAluno " + p + " está Aprovado.")	
				}					
			}
			senao
			{
			}			
		}
	}
	
	funcao aprovado()
		{
			escreva("Gostaria de Saber se quais Alunos foram aprovados?\nSim(1) ou N(2)?\n")
			inteiro respostaAprovado = 0
			leia(respostaAprovado)
			enquanto(respostaAprovado >= 3)
			{
				escreva("\nDesculpe, não entendi!\nPor Favor digite 1 para Sim e 2 para Não:\n")
				leia(respostaAprovado)
			}
				se(respostaAprovado == 1)
				{
					escreva("\nSituação dos Alunos:")
					quaisAprovados()
				}
				senao
				{
					se(respostaAprovado == 2)
					{
						escreva("\nOk, Obrigado por usar esse Programa!")
					}
					senao
					{
						
					}
				}	
			}
	
	
	
	
	
	
	
	funcao inicio ()
	{
		descubraQuantosAlunos()
		
		enquanto(nAlunoAtual <= qtdAlunosSala)
		{
			real nota1
			real nota2
			escreva("\nInsira a Primeira nota do Aluno " + nAlunoAtual + ":\n")
			leia(nota1)
			escreva("Insira a Segunda nota do Aluno " + nAlunoAtual + ":\n")
			leia(nota2)
			md(nota1, nota2)
			
			nAlunoAtual --
			boletim[0][nAlunoAtual] = nAlunoAtual + 1
			boletim[1][nAlunoAtual] = nota1
			boletim[2][nAlunoAtual] = nota2
			boletim[3][nAlunoAtual] = media
			
			nAlunoAtual ++
			escreva("Notas Salvas no Boletin do Aluno " + nAlunoAtual + "!\n\n")
			nAlunoAtual ++
		}
		escreva("Todas as Medias foram Calculadas e Armazenadas com Sucesso!\n")
		aprovado()
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 585; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */