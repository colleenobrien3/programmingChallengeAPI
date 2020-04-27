# Keyboard Coding Challenge

## Description

Greetings! For this programming challenge, I built a tool that provides autocomplete suggestions for words. When a user types in a word fragment, the tool will search the database for potential word matches, or candidates. It will then determine each candidate's 'confidence,' or likelihood for being the user's intended word. This confidence is based on the number of times the word has been entered in the past. The tool will then present the candidates in a list ordered by confidence. To implement these functionalities, I created an API with the Django REST Framework that manages a PostgreSQL database that holds each instance of a word.

## Languages/Technologies

- Python
- Django REST Framework
- PostgreSQL

## Getting Started

In order to run the tool, you must first set up the PostreSQL database and get the API running on your local machine. Then, you can run the keyboard.py file to use the tool through the command line.

## Dependencies

In order to setup the API and database locally, you will need the following installed on your machine:

- ['python'](https://www.python.org/downloads/)
- ['pipenv'](https://github.com/pypa/pipenv)
- ['postgresql'](https://www.postgresql.org/docs/9.3/tutorial-install.html)

## Setup and Installation

1. Clone this repository.

In your command line, enter:

```
git clone https://github.com/colleenobrien3/programmingChallengeAPI.git
```

2. Run the command `pipenv install` to set up the virtual environment and install the dependencies in the Pipfile.

3. Open the virtual shell with the command `pipenv shell`.

4. To load the sql file into Postgres and create the database, run the following:

```
psql -U postgres -f settings.sql
```

5. Run `python manage.py migrate` to set up the model as a table in the database.

6. Run the command `python manage.py runserver` to set up the local server. Go to localhost:8000/candidates to view and add words to the database.

## Coding Style

I installed [autopep8](https://github.com/hhatto/autopep8) for Python code format.

## Database Setup

The database is called 'keyboard,' and the user is called 'admin'. When you run migrations, the table called 'candidates' will be created. This table represents a model that includes fields for the candidate's name and id number.

## API Paths

| Method |    Path     | Description                  |
| ------ | :---------: | ---------------------------- |
| GET    | /candidates | Retrieves all words          |
| POST   | /candidates | Adds a new word to the table |

## Next Steps

Next, I hope to set up a command line interface to make the tool more visually appealing and user-friendly. Also, I need to add functionality that disregards capitalization and punctuation for entering words into the database. Finally, I would like to set up an even more user friendly front end that shows the user the suggestions as they type in a word. Also, I hope to deploy the database so that people can use it all over.
