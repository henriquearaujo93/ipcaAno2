#include <iostream>

/* run this program using the console pauser or add your own getch, system("pause") or input loop */

int main(int argc, char** argv) {
	
	int horas, minutos, segundos, secRecebido;
	
	secRecebido = 2400;
	
	horas = secRecebido / 3600;
	
	secRecebido = secRecebido - (horas * 3600);
	
	minutos = secRecebido / 60;
	
	segundos = secRecebido - (minutos * 60);
	
	printf("%dH: %dM: %dS", horas, minutos, segundos);
	
	return 0;
}
