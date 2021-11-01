import datetime
from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

db = {
    "users": [
        # Users de teste
        {"username": "demo1", "password": "123", "friends": ["demo2"]},
        {"username": "demo2", "password": "123", "friends": ["demo1"]},
    ],
    "messages": []
}


# Rota para testes
@app.route("/")
def index_page():
    return"<h1>Welcome to Ponere Chat<h1>"


@app.route("/sign-in", methods=['POST'])
def sign_in():
    # Pega body da requisição
    req_user = request.json
    username = req_user["username"]
    password = req_user["password"]

    if not username or not password:
        return jsonify({"error": "Wrong body data"}), 400

    # Verifica se login e senha existem, e se estão corretos.
    for db_user in db["users"]:
        if db_user["username"] == username:
            if db_user["password"] == password:
                return jsonify({"login": True}), 200
            else:
                return jsonify({"login": False, "error": "wrong password"}), 401

    return jsonify({"login": False, "error": "username not exist"}), 404


@app.route("/sign-up", methods=['POST'])
def sign_up():
    # Pega body da requisição
    req_user = request.json
    username = req_user["username"]
    password = req_user["password"]

    if not username or not password:
        return jsonify({"error": "Wrong body data"}), 400

    for db_user in db["users"]:
        if db_user["username"] == username:
            return jsonify({"error": "username already exist"}), 403

    db["users"].append(
        {"username": username, "password": password, "friends": []})

    return jsonify({"message": "user create with sucess"}), 201


@app.route("/friend", methods=['POST'])
def list_friends():
    # Pega body da requisição
    req_user = request.json
    username = req_user["username"]

    if not username:
        return jsonify({"error": "Wrong body data"}), 400

    for db_user in db["users"]:
        if db_user["username"] == username:
            return jsonify({"friends": db_user["friends"]}), 200

    return jsonify({"error": "username not found"}), 404


@app.route("/friend/add", methods=['POST'])
def add_friend():
    # Pega body da requisição
    req_user = request.json
    username_destination = req_user["username_destination"]
    username_origin = req_user["username_origin"]

    if not username_origin or not username_destination:
        return jsonify({"error": "Wrong body data"}), 400

    for db_user_destination in db["users"]:
        if username_destination == db_user_destination["username"]:
            if username_origin not in db_user_destination["friends"]:
                username_destination["friends"].append(username_origin)
            else:
                return jsonify({"error": f"{username_destination} is already your friend"}), 400

            for db_user_origin in db["users"]:
                if username_origin == db_user_origin["username"]:
                    username_origin["friends"].append(username_destination)
                    return jsonify({"message": f"User {username_destination} add as a friend"}), 200


@app.route("/chat", methods=['POST'])
def get_chat():

    # Pega body da requisição
    req_user = request.json
    username_origin = req_user["username_origin"]
    username_destination = req_user["username_destination"]

    if not username_origin or not username_destination:
        return jsonify({"error": "Wrong body data"}), 400

    messages = []

    for db_message in db["messages"]:
        if (
            (db_message['origin'] == username_origin and db_message['destination']
             == username_destination)
            or
            (db_message['origin'] ==
             username_destination and db_message['destination'] == username_origin)
        ):
            messages.append(db_message)

    messages.sort(lambda x: x["datetime"], reverse=True)

    return messages


@app.route("/message", methods=['POST'])
def add_message():
    # Pega body da requisição
    req_user = request.json
    message = req_user["message"]
    username_origin = req_user["username_origin"]
    username_destination = req_user["username_destination"]

    if not message or not username_origin or not username_destination:
        return jsonify({"error": "Wrong body data"}), 400

    db["messages"].append(
        {
            "message": message,
            "origin": username_origin,
            "destination": username_destination,
            "datetime": datetime.datetime.now()
        }
    )

    return jsonify({"message": "Message created successfully"}), 201


if __name__ == '__main__':
    app.run()
