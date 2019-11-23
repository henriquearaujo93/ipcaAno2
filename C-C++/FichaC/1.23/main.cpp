#include <iostream>
#include <math.h>

/* run this program using the console pauser or add your own getch, system("pause") or input loop */

int main(int argc, char** argv) {
	
	float a, b, c;
	char triangulo;
	
	printf("Insira o lado a:");
	scanf("%f", &a);	
	
	printf("Insira o lado b:");
	scanf("%f", &b);
	
	printf("Insira o lado c:");
	scanf("%f", &c);
	
	//Verificar se forma triangulo
	if(a < (b + c) && b < (a + c) && c < (a + b))
	{
		printf("Formou um Triangulo");
		triangulo = 't';
	}
	else
	{
		triangulo = 'f';
		printf("Nao formou um triangulo");
		printf("\n lado a : %0.0f", a);
		printf("\n lado b : %0.0f", b);
		printf("\n lado c : %0.0f", c);
	}
	
	//Descobrir altura (Formula de heron)
	float p = (a + b + c) / 2;
	
	float area = sqrt(p*(p-a)*(p-b)*(p-c));
	
	//Mostrar resultados
	
	if(triangulo == 't')
	{
		printf("\n A area do triangulo e: %0.1f", area);
	}
	
	return 0;
}
