#include <iostream>

/* run this program using the console pauser or add your own getch, system("pause") or input loop */

int main(int argc, char** argv) {
	
	int n1, n2, n3;
	float media;
	
	printf("\n Insira a nota 1: ");
	scanf("%d", &n1);
	
	printf("\n Insira a nota 2: ");
	scanf("%d", &n2);
	
	printf("\n Insira a nota 3: ");
	scanf("%d", &n3);
	
	media = (n1 + n2 +n3) / 3;
	if(media >= 9.5)
	{
		printf("Aprovado");
	}
	else {
		printf("Reprovado");
	}
	
	return 0;
}
