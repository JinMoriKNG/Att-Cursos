meses = 'JANEIRO', 'FEVEREIRO', 'MARÇO', 'ABRIL', 'MAIO', 'JUNHO', 'JULHO', 'AGOSTO', 'SETEMBRO', 'OUTUBRO', 'NOVEMBRO', 'DEZEMBRO'

print('DIGITE O NÚMERO CORRESPONDENTE AO MÊS')
for i in range (len(meses)):
    print(f'{i + 1} - {meses[i]}')

resposta = int(input('Sua escolha: '))

print(f'O mês escolhido foi {meses[resposta-1]}')
