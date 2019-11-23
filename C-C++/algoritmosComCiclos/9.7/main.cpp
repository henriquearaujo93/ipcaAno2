#include <iostream>

/* run this program using the console pauser or add your own getch, system("pause") or input loop */

void desenha_arvore(int N, char simb);

int main(int argc, char** argv) {
	
	desenha_arvore(10, '*');
	
	return 0;
}

void desenha_arvore(int N, char simb){
	
	int x = 0;
	int y = 0;
	
	for(y = 0; y < N; y++)
	{
		for(x = 0; x < N + (N-1); x++)
		{
			if(x < ((N-1)-y) || x > ((N-1) + y))
			{
				printf(" ");
			}
			else
			{
				printf("%c", simb);
			}
		}
		printf("\n");
	}
}
