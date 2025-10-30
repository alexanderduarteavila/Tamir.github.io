from flask import Flask, jsonify, render_template

app = Flask(__name__, template_folder='templates', static_folder='static')

@app.route("/")
def index():
    return render_template('index.html')

@app.route("/api/status", methods=['GET'])
def get_status():
    return jsonify({
        "nombre_sistema": "TAMIR-DUARTE",
        "version": "13.1",
        "autor": "Daniel Duarte",
        "estado_nucleo": "ACTIVO",
        "metricas": {
            "total_analisis": 0,
            "eficiencia_promedio": 0.85,
            "patrones_aprendidos": 0,
            "mejoras_detectadas": 0,
            "cache_hits": 0,
            "cache_misses": 0
        }
    })

@app.route("/api/health", methods=['GET'])
def health_check():
    return jsonify({"status": "healthy"}), 200

@app.route("/api/checklist", methods=['GET'])
def get_checklist():
    return jsonify({
        "Anexo 1: Despliegue": {"completado": True, "tareas": ["Configurar servidor", "Desplegar backend"]},
        "Anexo 2: Lógica TAMIR": {"completado": False, "tareas": ["Implementar nuevos comandos", "Integrar Gemini"]}
    })

if __name__ == '__main__':
    print("🚀 Iniciando TAMIR-DUARTE Server (Versión Simplificada)")
    app.run(host='0.0.0.0', port=5000)
