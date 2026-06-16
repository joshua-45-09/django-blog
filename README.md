# Django Blog Project

A simple Django blog application with user authentication, post creation, and article listing.

## Project structure

- `myproject/` - Django project and applications
- `myproject/blog/` - blog application templates, views, and models
- `myproject/users/` - user management app for registration, login, and profile
- `myproject/staticfiles/` - collected static assets
- `media/` - uploaded media files

## Setup

1. Create and activate the virtual environment:

```powershell
cd myproject
.\..\envi\Scripts\Activate.ps1
```

2. Install dependencies:

```powershell
pip install -r requirements.txt
```

3. Configure environment values for `SECRET_KEY` and `DEBUG` if using `python-decouple`.

4. Apply database migrations:

```powershell
python manage.py migrate
```

5. Run the development server:

```powershell
python manage.py runserver
```

6. Open the site at `http://127.0.0.1:8000/`.

## Notes

- Static files are served in development using Django static files.
- CSS and JS asset references were removed from templates, so the site uses plain HTML styling.
- The repository is configured for GitHub push to `https://github.com/joshua-45-09/django-blog.git`.
