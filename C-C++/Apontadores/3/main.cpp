#include <iostream>

/* run this program using the console pauser or add your own getch, system("pause") or input loop */

void quadrado(int *x);

int main(int argc, char** argv) {
	
	int x = 2;
	
	quadrado(&x);
	
	printf("%d", x);
	
	return 0;
}

void quadrado(int *x)
{	

	*x = *x * *x;
	
}
