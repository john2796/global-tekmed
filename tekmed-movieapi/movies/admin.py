from django.contrib import admin

from django.contrib import admin
from .models import Movie, Cast, Genre

admin.site.register(Movie)
admin.site.register(Cast)
admin.site.register(Genre)