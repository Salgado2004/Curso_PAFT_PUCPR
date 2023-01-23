from flask import Flask, request
from flask_cors import CORS
import datetime

app = Flask(__name__)
cors = CORS(app, origins=["*"])

@app.route('/api/exerciciosAPI/exercicio1', methods=['POST'])
def workingDatas():
    data1 = request.form["data1"]
    data2 = request.form["data2"]
    f_data1 = data1.split("-")
    date1 = datetime.datetime(int(f_data1[0]), int(f_data1[1]), int(f_data1[2]))
    f_data2 = data2.split("-")
    date2 = datetime.datetime(int(f_data2[0]), int(f_data2[1]), int(f_data2[2]))
    
    diffDias = int(date1.strftime("%j")) - int(date2.strftime("%j"))
    if diffDias < 0: diffDias = diffDias *-1
    diffSemana = int(date1.strftime("%U")) - int(date2.strftime("%U"))
    if diffSemana < 0: diffSemana = diffSemana *-1
    diffMes = int(date1.strftime("%m")) - int(date2.strftime("%m"))
    if diffMes < 0: diffMes = diffMes *-1
    return f"<ul><li><b>A diferença de dias:</b> {diffDias}</li><li><b>A diferença de semana:</b> {diffSemana}</li><li><b>A diferença de meses:</b> {diffMes}</li></ul>"

@app.route('/api/exerciciosAPI/exercicio2', methods=['POST'])
def ordenandoNumeros():
    numeros = request.form["numeros"]
    lista = numeros.split(";")
    for x in range(len(lista)):
        try:
            lista[x] = int(lista[x])
        except ValueError:
            break
    lista.sort()
    ordem1 = lista.copy()
    lista.sort(reverse = True)
    ordem2 = lista.copy()
    def filtro(x):
        if x%2 == 0:
            return True
        else:
            return False
    numerosPares =[]
    pares = filter(filtro, lista)
    for i in pares:
        numerosPares.append(i)
    return f"<ul><li><b>Ordem crescente:</b> {ordem1}</li><li><b>Ordem decrescente:</b> {ordem2}</li><li><b>Números pares:</b> {numerosPares}</li></ul>"

@app.route('/api/exerciciosAPI/exercicio3', methods=['POST'])
def mimificator():
    texto = request.form["texto"]
    vowels = 'AEIOUaeiouÁÉÍÓÚáéíóú'
    for x in vowels: 
        texto = texto.replace(x, "i") 
    
    return f"<h2>{texto}</h2>"



if __name__ == '__main__':
    app.run(debug=True)
