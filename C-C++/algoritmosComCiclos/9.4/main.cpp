#include <iostream>

/* run this program using the console pauser or add your own getch, system("pause") or input loop */

void desenha_tri(int N, char simb);

int main(int argc, char** argv) {
	
	desenha_tri(5, '*');
	
	return 0;
}

void desenha_tri(int N, char simb){
	
	int i = 0;
	int j = 0;
	
	for(i = N; i > 0 ; i--)
	{
		for(j = N; j > 0; j--)
		{
			printf("%c", simb);
		}
		printf("\n");
		N--;
	}
	

		
}
