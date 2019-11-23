#include <iostream>

/* run this program using the console pauser or add your own getch, system("pause") or input loop */

int main(int argc, char** argv) {
	
	float nota1, nota2, nota3, resultado;
	
	int peso1 = 2, peso2 = 3, peso3 = 5;
	
	printf("\n Insira a nota 1: ");
	scanf("%f", &nota1);
	
	printf("\n Insira a nota 2: ");
	scanf("%f", &nota2);
	
	printf("\n Insira a nota 3: ");
	scanf("%f", &nota3);
	
	resultado = ((nota1 * peso1) + (nota2 * peso2) + (nota3 * peso3)) / 3;
	
	printf("Resultado: %f", resultado);
	
	return 0;
}
