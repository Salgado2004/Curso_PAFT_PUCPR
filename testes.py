import main

def test_falha_se_img_invalida():
    assert main.receber_img("img.jpg") == "Imagem inválida"

def test_falha_se_gato_teclado():
    assert main.receber_img("sldfhlajsfnal") == "Imagem inválida"

def test_sucesso_se_img_valida():
    assert main.receber_img("imgTeste.png") != "Imagem inválida"

def test_sucesso_se_aplica_gray():
    assert main.receber_img("imgTeste.png") != "A aplicação do filtro gray falhou"

def test_sucesso_se_aplica_blur():
    assert main.receber_img("imgTeste.png") != "A aplicação do filtro blur falhou"

def test_sucesso_se_aplica_canny():
    assert main.receber_img("imgTeste.png") != "A aplicação do filtro canny falhou"

def test_falha_se_0_contornos():
    assert main.imgAnalise("imgTeste.png", "1") != "Não foi possível detectar os contornos"

def test_falha_se_contornos_mto_pequenos():
    assert main.imgAnalise("imgTeste.png", "1") != "A imagem apresenta contornos muito pequenos"

def test_falha_se_n_detecta_perimetro():
    assert main.imgAnalise("imgTeste.png", "1") != "Não foi possível detectar o perimetro"

def test_sucesso_se_qtd_certa_triangulos():
    assert main.imgAnalise("imgTeste.png", "1") == "A imagem apresenta 4 triangulos"

def test_sucesso_se_qtd_certa_quadrados():
    assert main.imgAnalise("imgTeste.png", "2") == "A imagem apresenta 6 quadrilateros"

def test_sucesso_se_qtd_certa_pentagonos():
    assert main.imgAnalise("imgTeste.png", "3") == "A imagem apresenta 3 pentagonos"

def test_sucesso_se_qtd_certa_hexagonos():
    assert main.imgAnalise("imgTeste.png", "4") == "A imagem apresenta 5 hexagonos"

def test_sucesso_se_qtd_certa_estrelas():
    assert main.imgAnalise("imgTeste.png", "5") == "A imagem apresenta 4 estrelas"

def test_sucesso_se_qtd_certa_circulos():
    assert main.imgAnalise("imgTeste.png", "6") == "A imagem apresenta 5 circulos"

def test_sucesso_se_qtd_certa_tudo():
    assert main.imgAnalise("imgTeste.png",  "*") == "A imagem apresenta 27 formas"