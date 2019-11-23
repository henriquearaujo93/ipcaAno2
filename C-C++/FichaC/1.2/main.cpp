#include <iostream>

/* run this program using the console pauser or add your own getch, system("pause") or input loop */

int main(int argc, char** argv) {
	
	float number1, number2, number3;
	
	printf("Insira o primeiro numero: ");
	scanf("%f", &number1);
	
	printf("\n Insira o segundo numero: ");
	scanf("%f", &number2);
	
	printf("\n Insira o terceiro numero: ");
	scanf("%f", &number3);
	
	if(number1 > number2 && number1 > number3)
	{
		printf("O maior numero e: %0.1f", number1);
	}
	else if(number2 > number1 && number2 > number3)
	{
		printf("O maior numero e: %0.1f", number2);
	}
	else if(number3 > number1 && number3 > number2)
	{
		printf("O maior numero e: %0.1f", number3);
	}
	else
	{
		printf("Os numeros sao iguais");
	}
	

	
	return 0;
}
