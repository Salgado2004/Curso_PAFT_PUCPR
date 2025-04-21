import sqlite3
from flask import Flask, jsonify, request, render_template
app = Flask(__name__)

def get_db_connection():
    conn = sqlite3.connect('database.db')
    conn.row_factory = sqlite3.Row
    return conn

# GET request to retrieve all contacts
@app.route('/contacts', methods=['GET'])
def get_contacts():
    conn = get_db_connection()
    contacts = conn.execute('SELECT * FROM contacts').fetchall()
    conn.close()
    contact_list = []
    for contact in contacts:
        contact_list.append( {'id': contact['id'], 'name': contact['name_contact'], 'phone': contact['phone']})
    return {'contacts': contact_list}, 200

# GET request to retrieve one contacts
@app.route('/contacts/<int:id>', methods=['get'])
def get_contact(id):
    conn = get_db_connection()
    contacts = conn.execute('SELECT * FROM contacts').fetchall()
    conn.close()
    for contact in contacts:
        if contact['id'] == id:
            return {'contact': {'id': contact['id'], 'name': contact['name_contact'], 'phone': contact['phone']}}, 200
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

                conn = get_db_connection()
                cur = conn.cursor()
                cur.execute("INSERT INTO contacts (name_contact, phone) VALUES (?, ?)",
                (name, tel)
                )
                conn.commit()
                contact = conn.execute('SELECT * FROM contacts ORDER BY id DESC LIMIT 1').fetchall()
                conn.close()
                print(contact[0]['id'])

                return {'contact': {'id': contact[0]['id'], 'name': contact[0]['name_contact'], 'phone': contact[0]['phone']}}, 201
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
            name = request.json['name']
            tel = request.json['tel']
            conn = get_db_connection()
            cur = conn.cursor()
            cur.execute(f"UPDATE contacts SET name_contact = '{name}', phone = '{tel}' WHERE id = {id}")
            conn.commit()
            conn.close()    
            return {'message': 'Contato editado'}, 200
                
    else:
        return {'message': 'Method not allowed'}, 405

# DELETE request to delete a contact
@app.route('/contacts/<int:id>', methods=['DELETE'])
def delete_contact(id):
    conn = get_db_connection()
    cur = conn.cursor()
    cur.execute(f"DELETE FROM contacts WHERE id == {id}")
    conn.commit()
    conn.close()
    return {'message': 'Contato apagado'}, 200

@app.route('/', methods=['POST', 'GET'])
def entry_page():
    return render_template("index.html")


app.run(debug=True)
