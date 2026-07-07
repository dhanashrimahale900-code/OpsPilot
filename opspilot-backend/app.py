
from flask import Flask
from flask_cors import CORS

# Import Routes
from routes.analyze import analyze_bp
from routes.agents import agents_bp

app = Flask(__name__)

# Enable CORS
CORS(
    app,
    resources={
        r"/*": {
            "origins": [
                "https://business-ai-opspilot.vercel.app",
                "http://localhost:3000"
            ]
        }
    }
)

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


import os

if __name__ == "__main__":
    app.run(
        host="0.0.0.0",
        port=int(os.getenv("PORT", 5000)),
        debug=os.getenv("FLASK_ENV") == "development"
    )

@app.route("/health")
def health():
    return {
        "status": "healthy",
        "service": "OpsPilot AI",
        "version": "1.0.0",
        "ai": "Gemini 2.5 Flash"
    }