#include <iostream>

/* run this program using the console pauser or add your own getch, system("pause") or input loop */

int main(int argc, char** argv) {
	
	int n1, n2, n3, n4;
	
	printf("Insira o primeiro numero: ");
	scanf("%d", &n1);
	
	printf("\n Insira o segundo numero: ");
	scanf("%d", &n2);
	
	printf("\n Insira o terceiro numero: ");
	scanf("%d", &n3);
	
	printf("\n Insira o quarto numero: ");
	scanf("%d", &n4);
	
	if (n1 > n2 && n1 > n3 && n1 > n4)
	{
		printf("%d", n1);
	}else if (n2 > n1 && n2 > n3 && n2 > n4)
	{
		printf("%d", n2);
	}else if (n3 > n1 && n3 > n2 && n3 > n4)
	{
		printf("%d", n3);
	}else
	{
		printf("%d", n4);
	}
	
	return 0;
}
