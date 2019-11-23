#include <iostream>
#include <math.h>

/* run this program using the console pauser or add your own getch, system("pause") or input loop */

int main(int argc, char** argv) {
	
	float x1, x2, y1, y2, distancia;
	
	printf("Insira o ponto x1: ");
	scanf("%f", &x1);
	
	printf("\n Insira o ponto x2: ");
	scanf("%f", &x2);
	
	printf("\n Insira o ponto y1: ");
	scanf("%f", &y1);
	
	printf("\n Insira o ponto y2: ");
	scanf("%f", &y2);
	
	distancia = sqrt(((x2 - x1) * (x2 - x1)) + ((y2 - y1) * (y2 - y1)));
	
	printf("Distancia: %0.2f", distancia);
	
	
	
	return 0;
}
