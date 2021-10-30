from flask import Flask, jsonify, request
app = Flask(__name__)


db = {
    "users": [{"username": "demo", "password": "123"}]
}


@app.route("/sign-in", methods=['POST'])
def sign_in():
    # Logic for sign_in
    req_user = request.json

    for db_user in db["users"]:
        if db_user["username"] == req_user["username"]:
            if db_user["password"] == req_user["password"]:
                return jsonify({"login": True}), 200
            else:
                return jsonify({"login": False, "error": "wrong password"}), 401

    return jsonify({"login": False, "error": "username not exist"}), 404


@app.route("/sign-out", methods=['POST'])
def sign_out():
    # Logic for sign_out
    return "Você foi deslogado com sucesso!", 200


@app.route("/sign-up", methods=['POST'])
def sign_up():
    # Logic for sign_up
    req_user = request.json

    for db_user in db["users"]:
        if db_user["username"] == req_user["username"]:
            return jsonify({"error": "username already exist"}), 403

    db["users"].append(
        {"username": req_user["username"], "password": req_user["password"]})

    return jsonify({"message": "user create with sucess"}), 201


@app.route("/friend", methods=['GET'])
def list_friends():
    # Logic for get_friends
    return ({
        "friends": [
            "Ruy",
            "Igor",
            "Camilla",
            "Goya"
        ]
    }, 200)


@app.route("/friend", methods=['POST'])
def add_friend():
    # Logic for add_friend
    return "Amigo adicionado com sucesso!", 201


@app.route("/friend/<friend_name>", methods=['GET'])
def get_friend(friend_name):
    # Logic for get_friend
    return ({
        "chat": [
            {
                "message": "Oi Ruy.",
                "origin": "Caio",
                "destination": "Ruy",
                "date": "15/10/2021",
                "time": "22:00"
            },
            {
                "message": "Oi Caio.",
                "origin": "Ruy",
                "destination": "Caio",
                "date": "15/10/2021",
                "time": "22:00"
            },
            {
                "message": "Tudo bem?",
                "origin": "Caio",
                "destination": "Ruy",
                "date": "15/10/2021",
                "time": "22:00"
            },
            {
                "message": "Tudo sim, e você?",
                "origin": "Ruy",
                "destination": "Caio",
                "date": "15/10/2021",
                "time": "22:00"
            },
            {
                "message": "Estou bem também!",
                "origin": "Caio",
                "destination": "Ruy",
                "date": "15/10/2021",
                "time": "22:00"
            }
        ]
    }, 200)


@app.route("/message", methods=['POST'])
def add_message():
    # Logic for add_message
    return "Mensagem cadastrada com sucesso!", 201


if __name__ == '__main__':
    app.run()
