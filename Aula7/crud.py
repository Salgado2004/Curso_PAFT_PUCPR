from flask import Flask, jsonify, request, render_template
app = Flask(__name__)

contacts = [{'id': 1, 'name': 'John Doe', 
'phone': '555-555-5555'},{'id': 2, 'name': 'Steve Tyler', 
'phone': '888-888-8888'}]

# GET request to retrieve all contacts
@app.route('/contacts', methods=['GET'])
def get_contacts():
    return {'contacts': contacts}

# GET request to retrieve one contacts
@app.route('/contacts/<int:id>', methods=['get'])
def get_contact(id):
    return {'contact': contacts[id-1]}

# POST request to add a new contact with data of the new contact on a json file
@app.route('/contacts', methods=['POST'])
def add_contact():
    if request.method == 'POST':
        name = request.json['name']
        tel = request.json['tel']
        idContact = len(contacts)+1
        contacts.append({'id': idContact, 'name': name, 'phone': tel})
    return {'contact': contacts[idContact-1]}

# PUT request to update a contact
@app.route('/contacts/<int:id>', methods=['PUT'])
def update_contact(id):
    return {'contact': ''}

# DELETE request to delete a contact
@app.route('/contacts/<int:id>', methods=['DELETE'])
def delete_contact(id):
    return {'message': ''}

@app.route('/', methods=['POST', 'GET'])
def entry_page():
    return render_template("index.html")


app.run(debug=True)
