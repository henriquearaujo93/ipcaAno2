#include <iostream>

/* run this program using the console pauser or add your own getch, system("pause") or input loop */

void nl(int linhas);

int main(int argc, char** argv) {
	
	printf("linha1");
	nl(5);
	printf("linha6");
	
	return 0;
}

void nl(int linhas){
	
	int i = 0;
	do
	{
		printf("\n");
		i++;		
	}while (i < linhas);
	
}
