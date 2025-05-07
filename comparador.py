num1 = int(input('Primeiro número: '))
num2 = int(input('Segundo número: '))
num3 = int(input('Terceiro número: '))

menor = num1
maior = num1
média = (num1+num2+num3) / 3

if num2 < menor:
    menor = num2
elif num3 < menor:
    menor = num3

if num2 > maior:
    maior = num2
elif num3 > maior:
    maior = num3

print(f'O Menor número informado foi o {menor}')
print(f'O Maior número informado foi o {maior}')
print(f'A Média dos números é de {média:.2f}')
