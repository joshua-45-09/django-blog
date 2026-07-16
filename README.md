# Blog Project

A Django blog application with user accounts, posts, categories, tags, and profile image support.

## Project structure

- `envi/` - Python virtual environment
- `myproject/` - Django project folder
  - `blog/` - Blog application
  - `users/` - User and authentication related app
  - `media/` - Uploaded media files (profile pictures, etc.)

## Setup

1. Activate the virtual environment:
   - Windows (PowerShell): `.\envi\Scripts\Activate.ps1`
   - Windows (cmd): `.\envi\Scripts\activate.bat`

2. Install dependencies if needed (inside the virtual environment):
   ```powershell
   pip install -r requirements.txt
   ```

   If `requirements.txt` is not available, install Django and any other dependencies manually:
   ```powershell
   pip install django psycopg2-binary pillow python-decouple
   ```

3. Apply database migrations:
   ```powershell
   python myproject\manage.py migrate
   ```

4. Create a superuser:
   ```powershell
   python myproject\manage.py createsuperuser
   ```

## Running the project

From the repository root:

```powershell
python myproject\manage.py runserver
```

Then open `http://127.0.0.1:8000/` in your browser.

## Notes

- The project uses SQLite by default (`db.sqlite3`).
- Uploaded profile images are stored in `myproject/media/profile_pics/`.
- Templates and static files are organized inside the app folders.

## Recommended next steps

- Add a `requirements.txt` file if one is not present.
- Confirm `myproject/settings.py` contains correct `MEDIA_ROOT` and `MEDIA_URL` settings.
- Update README with any custom deployment or environment configuration.
