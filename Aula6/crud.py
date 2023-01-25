from flask import Flask, jsonify, request, render_template
app = Flask(__name__)

contacts = [{'id': 1, 'name': 'John Doe', 
'phone': '555-555-5555'},{'id': 2, 'name': 'Steve Tyler', 
'phone': '888-888-8888'}]

# GET request to retrieve all contacts
@app.route('/contacts', methods=['GET'])
def get_contacts():
    return {'contacts': contacts}, 200

# GET request to retrieve one contacts
@app.route('/contacts/<int:id>', methods=['get'])
def get_contact(id):
    for contact in contacts:
        if contact['id'] == id:
            return {'contact': contact}, 200
    return {'message': 'Contato não encontrado'}, 404

# POST request to add a new contact with data of the new contact on a json file
@app.route('/contacts', methods=['POST'])
def add_contact():
    if request.method == 'POST':
        if not request.is_json:
            return {'message': 'Media type not supported'}, 415
        else:
            try:
                name = request.json['name']
                tel = request.json['tel']
                idContact = contacts[-1]['id']+1
                contacts.append({'id': idContact, 'name': name, 'phone': tel})
                return {'contact': contacts[idContact-1]}, 201
            except KeyError:
                return {'message': 'Bad request'}, 400
    else:
        return {'message': 'Method not allowed'}, 405

# PUT request to update a contact
@app.route('/contacts/<int:id>', methods=['PUT'])
def update_contact(id):
    if request.method == 'PUT':
        if not request.is_json:
            return {'message': 'Media type not supported'}, 415
        else:
            try:
                name = request.json['name']
                tel = request.json['tel']
                for contact in contacts:
                    if contact['id'] == id:
                        contact['name'] = name
                        contact['tel'] = tel
                        return {'message': 'Contato editado'}, 200
                return {'message': 'Contato não encontrado'}, 404
            except KeyError:
                return {'message': 'Bad request'}, 400
    else:
        return {'message': 'Method not allowed'}, 405

# DELETE request to delete a contact
@app.route('/contacts/<int:id>', methods=['DELETE'])
def delete_contact(id):
    for contact in contacts:
        if contact['id'] == id:
            f_id = contacts.index(contact)
            contacts.remove(f_id)
            return {'message': 'Contato apagado'}, 200
    return {'message': 'Contato não encontrado'}, 404

@app.route('/', methods=['POST', 'GET'])
def entry_page():
    return render_template("index.html")


app.run(debug=True)
