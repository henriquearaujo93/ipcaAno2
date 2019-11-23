#include <iostream>

/* run this program using the console pauser or add your own getch, system("pause") or input loop */

int main(int argc, char** argv) {
	
	int number1, number2, number3, result;
	
	printf("Insira o primeiro numero: ");
	scanf("%d", &number1);
	
	printf("\n Insira o segundo numero: ");
	scanf("%d", &number2);
	
	printf("\n Insira o terceiro numero: ");
	scanf("%d", &number3);
	
	if(number1 > number2 && number2 > number3)
	{
		result = number2 + number3;
	}
	else if(number1 == number2 || number2 == number3)
	{
		printf("numeros iguais");
	}
	else if(number1 < number2 && number2 < number3)
	{
		result = number1 + number2;
	}
	else
	{
		result = number1 + number3;
	}
		
	printf("\n A soma dos dois menores numeros e: %d", result);
	
	return 0;
}
