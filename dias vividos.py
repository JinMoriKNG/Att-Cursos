def resultado_dias(b):
    return(b * 365)

nome = input('Digite seu nome: ')
idade = int(input('Informe sua idade: '))

dias_vividos = resultado_dias(idade)

print(f'Seu nome é {nome}, Seus dias vividos somam {dias_vividos}')
