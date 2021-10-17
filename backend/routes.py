from backend import app

@app.route("/sign-in", methods=['POST'])
def sign_in():
    # Logic for sign_in
    return "Login realizado com sucesso!", 200

@app.route("/sign-up", methods=['POST'])
def sign_up():
    # Logic for sign_up
    return "Cadastro realizado com sucesso!", 201

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
