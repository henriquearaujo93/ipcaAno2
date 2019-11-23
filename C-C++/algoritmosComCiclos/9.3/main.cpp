#include <iostream>

/* run this program using the console pauser or add your own getch, system("pause") or input loop */

void desenha_quad(int N, char simb);

int main(int argc, char** argv) {
	
	desenha_quad(3, '*');
	
	return 0;
}

void desenha_quad(int N, char simb){
	
	int i = 0;
	int j = 0;
	
	for(i = 0; i < N; i++)
	{
		for(j = 0; j < N; j++)
		{
			printf("%c", simb);
		}
		printf("\n");
	}
}
