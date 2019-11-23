#include <iostream>

/* run this program using the console pauser or add your own getch, system("pause") or input loop */

int main(int argc, char** argv) {
	
	char elementos[8] = {'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'};
	
	int i;
	
	for(i = 0; i < 8; i++)
	{
		if(elementos[i] == 'e')
		{
			printf("Endereco do elemento 'e' = %d", i + elementos);
		}
	}
	
	return 0;
}
