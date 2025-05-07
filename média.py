cont = 1
total = média = 0

while True:
    num = int(input(f'Digite o {cont}° número: '))
    escolha = ' '
    while escolha not in 'SN':
        escolha = input('Quer continuar? [S/N]: ').strip().upper()
    cont += 1
    total += num

    menor = num
    maior = num
    
    if num < menor:
        num = menor
    
    if num > maior:
        num = maior

    média = total / cont

    if escolha in 'N':
        break
print(f'O Menor número informado foi o {menor}')
print(f'O Maior número informado foi o {maior}')
print(f'A Média dos números é de {média}')
