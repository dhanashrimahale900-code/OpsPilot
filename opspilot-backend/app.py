
from flask import Flask
from flask_cors import CORS

# Import Routes
from routes.analyze import analyze_bp
from routes.agents import agents_bp

app = Flask(__name__)

# Enable CORS
CORS(app)

# Register Blueprints
app.register_blueprint(analyze_bp)
app.register_blueprint(agents_bp)


@app.route("/")
def home():
    return {
        "success": True,
        "project": "OpsPilot AI",
        "message": "Enterprise Multi-Agent Business Intelligence Platform API is running."
    }


@app.route("/health")
def health():
    return {
        "status": "healthy",
        "backend": "running"
    }


if __name__ == "__main__":
    app.run(
        host="0.0.0.0",
        port=5000,
        debug=True
    )