{"mockup":{"controls":{"control":[{"ID":"27","measuredH":"23","measuredW":"55","properties":{"size":"20","text":"Fones"},"typeID":"SubTitle","w":"125","x":"490","y":"208","zOrder":"0"}]},"measuredH":"231","measuredW":"615","mockupH":"23","mockupW":"125","version":"1.0"}} y#include <iostream>

/* run this program using the console pauser or add your own getch, system("pause") or input loop */

void desenha_quad(int N, char simb);

int main(int argc, char** argv) {
	
	desenha_quad(4, '*');
	
	return 0;
}

void desenha_quad(int N, char simb){
	
	int i = 0;
	int j = 0;
	
	for(i = 0; i < N; i++)
	{
		for(j = 0; j < N; j++){
			
			if(i == 0 || j == 0 || i == N - 1 || j == N - 1 )
			{
				printf("%c", simb);
			}
			else
			{
				printf(" ");
			}
		}
		printf("\n");	
	}
	
}
