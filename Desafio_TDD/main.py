import cv2
import numpy as np

def receber_img(arg):
    img = cv2.imread(arg)
    tipo = str(type(img))
    if tipo == "<class 'NoneType'>":
        return "Imagem inválida"
    else:
        imgGray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
        if imgGray.all() == None:
            return "A aplicação do filtro gray falhou"
        else:
            imgBlur = cv2.GaussianBlur(imgGray, (7, 7), 1)
            if imgBlur.all() == None:
                return "A aplicação do filtro blur falhou"
            else:
                imgCanny = cv2.Canny(img, 50, 50)
                if imgCanny.all() == None:
                    return "A aplicação do filtro canny falhou"
                else:
                    return imgCanny


def imgAnalise(arg, arg2):
    img = receber_img(arg)
    acao = arg2
    if str(type(img)) != "<class 'str'>":
        contours, hierarchy = cv2.findContours(img, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_NONE)
        if len(contours) == 0:
            return "Não foi possível detectar os contornos"
        else:
            myDict = {"triangulos": 0, "quadrilateros": 0, "pentagonos": 0, "hexagonos": 0, "estrelas": 0,"circulos": 0}
            for i in contours:
                area = cv2.contourArea(i)
                if area > 200:
                    peri = cv2.arcLength(i, True)
                    approx = cv2.approxPolyDP(i, 0.02 * peri, True)
                    objCor = len(approx)
                    if objCor <= 0:
                        return "Não foi possível detectar o perimetro"
                    else:
                        if objCor == 3:
                            myDict["triangulos"] += 1
                        if objCor == 4:
                            myDict["quadrilateros"] += 1
                        if objCor == 5:
                            myDict["pentagonos"] += 1
                        if objCor == 6:
                            myDict["hexagonos"] += 1
                        if objCor > 6 and objCor < 10:
                            myDict["circulos"] += 1
                        if objCor == 10:
                            myDict["estrelas"] += 1
                else:
                    return "A imagem apresenta contornos muito pequenos"
            if acao == "1":
                triangulos = myDict["triangulos"]
                return f"A imagem apresenta {triangulos} triangulos"
            elif acao == "2":
                quadrados = myDict["quadrilateros"]
                return f"A imagem apresenta {quadrados} quadrilateros"
            elif acao == "3":
                pentagonos = myDict["pentagonos"]
                return f"A imagem apresenta {pentagonos} pentagonos"
            elif acao == "4":
                hexagonos = myDict["hexagonos"]
                return f"A imagem apresenta {hexagonos} hexagonos"
            elif acao == "5":
                estrelas = myDict["estrelas"]
                return f"A imagem apresenta {estrelas} estrelas"
            elif acao == "6":
                circulos = myDict["circulos"]
                return f"A imagem apresenta {circulos} circulos"
            elif acao == "*":
                total = myDict["circulos"]+myDict["estrelas"]+myDict["hexagonos"]+myDict["pentagonos"]+myDict["quadrilateros"]+myDict["triangulos"]
                return f"A imagem apresenta {total} formas"

# img = input("insira a imagem para analisar: ")
# acao = input("""Insira a ação para analizar a imagem\n
#                1 = Qtd de triangulos\n
#                2 = Qtd de quadrilateros\n
#                3 = Qtd de pentagonos\n
#                4 = Qtd de hexagonos\n
#                5 = Qtd de estrelas\n
#                6 = Qtd de circulos\n
#                * = Qtd total\n: """)
# result = imgAnalise(img, acao)
# print(result)