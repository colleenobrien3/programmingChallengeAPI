# Keyboard Coding Challenge

## Description

Greetings! For this programming challenge, I built a tool that provides autocomplete suggestions for words. When a user types in a word fragment, the tool will use an API to search a database for potential word matches, or candidates. It will then determine each candidate's 'confidence,' or likelihood of being the user's intended word. This confidence is based on the number of times the word has been entered in the past. The tool will then present the candidates in a list ordered by confidence. To implement these functionalities, I created an API with the Django REST Framework that manages a PostgreSQL database that holds each instance of a word. The file 'autocomplete_tool.py' contains the programming for the tool, which plays out in the command line. After building the tool, I wanted to see how it would translate to a frontend application, so I built a preliminary React app.

## Planning and File Structure

**If you do not have time to view everything, the minimum viable product' challenge solution is in the file 'autocomplete_tool.py' and can be run once you follow the directions for setting up the database and API.**

First, I developed logic for the tool in the 'logic_planning.py' file. If you run this file with the command `python logic_planning.py`, then you can see a version of the tool at work. Running this planning version of the tool does not allow for an accumulation of data outside the running of the file.

For that reason, I set up the API and database, the files for which are found in the 'keyboard' and 'keyboard_django' folders. In the 'autocomplete_tool.py' file, I refactored the code from 'logic_planning.py' to work with the API so that data will be stored between uses of the new tool.

Finally, I decided to translate some of the logic to work with a frontend application. In the 'frontend' directory, I began a React application.

## Languages/Technologies

- Python
- Django REST Framework
- PostgreSQL

## Getting Started

In order to run the tool, you must first set up the PostreSQL database and get the API running on your local machine. Then, you can run the autocomplete_tool.py file to use the tool through the command line.

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

2. Enter cloned repository.

3. Run the command `pipenv install` to set up the virtual environment and install the dependencies in the Pipfile.

4. Open the virtual shell with the command `pipenv shell`.

5. To load the sql file into Postgres and create the database, run the following:

```
psql -U postgres -f settings.sql
```

6. Run `python manage.py migrate` to set up the model as a table in the database.

7. Run the command `python manage.py runserver` to set up the local server. Go to localhost:8000/candidates to view and add words to the database.

8. Now that the API is set up, run the file 'autocomplete_tool.py' with the command `python autocomplete_tool.py` to use the tool. (If you wish to see the preliminary version of the tool, run this command with the logic_planning.py file.)

## Coding Style

I installed [autopep8](https://github.com/hhatto/autopep8) for Python code format.

## Database Setup

The database is called 'keyboard,' and the user is called 'admin'. When you run migrations, the table called 'keyboard_candidate' will be created. This table represents a model that includes fields for the candidate's name and id number.

## API Paths

| Method |    Path     | Description                  |
| ------ | :---------: | ---------------------------- |
| GET    | /candidates | Retrieves all words          |
| POST   | /candidates | Adds a new word to the table |

## Next Steps

Next, I hope to set up a command line interface to make the tool more visually appealing and user-friendly. Also, I need to add functionality that disregards capitalization and punctuation for entering words into the database. Finally, I would like to set up an even more user friendly front end that shows the user the suggestions as they type in a word. Also, I hope to deploy the database so that people can use it all over.
