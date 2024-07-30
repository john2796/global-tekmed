from django.db import models

class Movie(models.Model):
    title = models.CharField(max_length=255)
    year = models.IntegerField()
    href = models.CharField(max_length=255)
    extract = models.TextField()
    thumbnail = models.URLField()
    thumbnail_width = models.IntegerField()
    thumbnail_height = models.IntegerField()

class Cast(models.Model):
    movie = models.ForeignKey(Movie, related_name='cast', on_delete=models.CASCADE)
    name = models.CharField(max_length=255)

class Genre(models.Model):
    movie = models.ForeignKey(Movie, related_name='genres', on_delete=models.CASCADE)
    name = models.CharField(max_length=255)
