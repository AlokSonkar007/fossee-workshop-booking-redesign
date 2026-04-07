# Getting Started

Follow these steps to run the site locally.

## Setup

> Use Python 3.

1. Clone the repository:
    > git clone https://github.com/FOSSEE/workshop_booking.git

2. Create a virtual environment and install dependencies:
    > pip install -r requirements.txt

3. Make migrations and migrate:
    > python manage.py makemigrations
    > python manage.py migrate

4. Create a superuser:
    > python manage.py createsuperuser

5. Start the development server:
    > python manage.py runserver

6. Open the admin page and log in with the superuser account:
    > http://localhost:8000/admin

7. Create a group named __instructor__ and grant it the required permissions.

8. After registration, a user is assigned the coordinator role by default. Use the admin panel to change a user's profile to instructor and add them to the instructor group.

9. Make sure the required email variables are set in `settings.py` before using email features.

## Instructor steps

1. Instructors can create workshops from the Create Workshop tab.
2. They can view monthly counts, upcoming workshops, and statistics.
3. They can also comment on coordinator profiles from Profile Statistics or Workshop Status.

## Coordinator steps

1. Coordinators can propose a workshop date under Workshops > Propose a Workshop.

