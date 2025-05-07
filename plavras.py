import random

entrada = input('Digite as palavras separadas por espaço: ').split

if entrada:
    palavra = random.choice(entrada)
    print(f'A palavras aleatoria é {palavra}')
else:
    print('Nenhuma palavra foi digitada.')
