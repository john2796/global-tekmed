from rest_framework import serializers
from .models import Movie, Cast, Genre

class CastSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cast
        fields = ['name']

class GenreSerializer(serializers.ModelSerializer):
    class Meta:
        model = Genre
        fields = ['name']

class MovieSerializer(serializers.ModelSerializer):
    genres = serializers.SerializerMethodField()
    cast = serializers.SerializerMethodField()

    class Meta:
        model = Movie
        fields = ['id', 'title', 'year', 'href', 'extract', 'thumbnail', 'thumbnail_width', 'thumbnail_height', 'cast', 'genres']
    def get_genres(self, obj):
        return [genre.name for genre in obj.genres.all()]
    def get_cast(self, obj):
        return [c.name for c in obj.cast.all()]
