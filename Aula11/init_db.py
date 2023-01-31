import sqlite3

connection = sqlite3.connect('database.db')


with open('Aula11/squema.sql') as f:
    connection.executescript(f.read())

cur = connection.cursor()

cur.execute("INSERT INTO contacts (name_contact, phone) VALUES (?, ?)",
            ('John Doe', '555-555-5555')
            )

cur.execute("INSERT INTO contacts (name_contact, phone) VALUES (?, ?)",
            ('Steve Tyler', '888-888-8888')
            )

connection.commit()
connection.close()