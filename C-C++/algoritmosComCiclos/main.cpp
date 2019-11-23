#include <iostream>

/* run this program using the console pauser or add your own getch, system("pause") or input loop */

void linha(int N, char simb);

int main(int argc, char** argv) {
	
	linha(3, '*');
	
	return 0;
}

void linha(int N, char simb)
{
	int i = 0;
	
	for(i = 0; i < N; i++)
	{
		printf("%c", simb);
	}
}
