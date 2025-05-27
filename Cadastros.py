cadastro = []

while True:
    print('\n1 - Adicionar nomes\n2 - Listar nomes\n3 Sair do programa')
    print('-'*50)
    opção = int(input('Escolha uma opção: '))
    print('-'*50)

    if opção == 1:
        nome = input('Informe o nome: ')
        cadastro.append(nome) #adicionar nome a lista

    elif opção == 2:
        for nome in cadastro:
            print(nome)
    
    elif opção == 3:
        print('Saindo do programa.')
        break
print('Até mais.')
