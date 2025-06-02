número_inicial = int(input('Digite o número inicial: '))
número_final = int(input('Digite o número final: '))

if número_inicial < número_final:
    for número in range(número_inicial, número_final + 1):
        print(número)
else:
    print('Valo invalido')
