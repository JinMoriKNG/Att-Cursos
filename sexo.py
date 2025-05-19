def verificarSexo(sexo):
    if sexo == 'F':
        print(f'Seu sexo é Feminino')
    elif sexo == 'M':
        print(f'Seu sexo é Masculino')

sexo = input('Digite o seu sexo: [F] para Feminino e [M] para o Masculino: ').upper().strip()

verificarSexo(sexo)
