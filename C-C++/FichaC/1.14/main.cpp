#include <iostream>

/* run this program using the console pauser or add your own getch, system("pause") or input loop */

int main(int argc, char** argv) {
	
	int n1, n2;
	
	printf("\n Insira o numero1: ");
	scanf("%d", &n1);
	
	printf("\n Insira o numero2: ");
	scanf("%d", &n2);
	
		
	if (n1 > n2){
		if (n1%n2 == 0)
		{
			printf("%d e multiplo de %d", n1, n2);
		}
		else
		{
			printf("%d e %d nao sao multiplos", n1, n2);
		}
	}
	else
		if (n2%n1 == 0)
		{
			printf("%d e multiplo de %d", n2, n1);
		}
		else
		{
			printf("%d e %d nao sao multiplos", n2, n1);
		}
	
	return 0;
}
