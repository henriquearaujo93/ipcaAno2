#include <iostream>

/* run this program using the console pauser or add your own getch, system("pause") or input loop */

void swap(int *x, int *y);

int main(int argc, char** argv) {
	
	int x = 2;
	int y = 4;
	
	swap(&x, &y);
	
	printf("valor de x = %d", x);
	printf("\nvalor de y = %d", y);
	
	return 0;
}

void swap(int *x, int *y){
	
	int z = *x;
	
	*x = *y;
	*y = z;
	
}
