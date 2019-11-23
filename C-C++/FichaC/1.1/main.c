#include <stdio.h>
#include <stdlib.h>

/* run this program using the console pauser or add your own getch, system("pause") or input loop */

int main(int argc, char *argv[]) {
	
	int number1;
	int number2;
	
	printf("Insira o primeiro numero: ");
	scanf("%d", &number1);
	
	printf("\n Insira o segundo numero: ") ;
	scanf("%d", &number2);
	
	if(number1 > number2)
	{
		printf("O maior numero e: %d", number1);
	} 
	else if(number1 < number2)
	{
		printf("O maior numero e: %d", number2);
	}
	else
	{
		printf("os numeros sao iguais");
	}

	return 0;
}
