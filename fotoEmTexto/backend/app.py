from flask import Flask, request, jsonify
from flask_cors import CORS
import requests

app = Flask(__name__)
CORS(app)

# Chave da sua conta do Azure
AZURE_COGNITIVE_SERVICES_KEY = "db60625ad89a4e839eae34a0eeadc112"

# URL da API de Visão Computacional da Microsoft
AZURE_VISION_API_URL = "https://projeto-orc.cognitiveservices.azure.com/vision/v3.1/ocr"


@app.route("/extract_text", methods=["POST"])
def extract_text():
    try:
        if "foto" not in request.files:
            return jsonify({"error": "Nenhuma foto enviada"}), 400

        foto = request.files["foto"]

        if foto.filename == "":
            return jsonify({"error": "Nome de arquivo vazio"}), 400

        # Configuração do cabeçalho da requisição para a API de Visão da Microsoft
        headers = {
            "Ocp-Apim-Subscription-Key": AZURE_COGNITIVE_SERVICES_KEY,
            "Content-Type": "application/octet-stream",
        }

        # Enviar a imagem para a API de Visão da Microsoft
        response = requests.post(
            AZURE_VISION_API_URL, headers=headers, files={"file": foto}
        )

        if response.status_code == 200:
            # Extrair texto da resposta da API
            text = ""
            data = response.json()
            for region in data["regions"]:
                for line in region["lines"]:
                    for word in line["words"]:
                        text += word["text"] + " "
            return jsonify({"text": text.strip()}), 200
        else:
            # Retornar uma resposta de erro com informações úteis para o cliente
            return (
                jsonify({"error": f"Erro ao processar a imagem: {response.text}"}),
                response.status_code,
            )

    except Exception as e:
        # Registre detalhes sobre o erro em logs
        app.logger.error(f"Erro durante o processamento da imagem: {str(e)}")
        # Retorne uma resposta de erro com informações úteis para o cliente
        return jsonify({"error": "Erro interno do servidor"}), 500


if __name__ == "__main__":
    app.run(debug=True)
