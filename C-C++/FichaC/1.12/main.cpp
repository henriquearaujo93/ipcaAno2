#include <iostream>

/* run this program using the console pauser or add your own getch, system("pause") or input loop */

int main(int argc, char** argv) {
	
	float distribuidor = 0.28, imposto = 0.45, custoFabrica, custoConsumidor;
	
	printf("\n Insira o custo de fabrica: ");
	scanf("%f", &custoFabrica);
	
	custoConsumidor = ((custoFabrica * distribuidor) + (custoFabrica * imposto)) + custoFabrica;
	
	printf("Custo consumidor: %0.3f", custoConsumidor);
	
	return 0;
}
