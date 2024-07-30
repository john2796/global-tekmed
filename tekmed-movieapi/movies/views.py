from rest_framework.pagination import PageNumberPagination
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import Movie
from .serializers import MovieSerializer

class MoviePagination(PageNumberPagination):
    page_size = 8
    page_size_query_param = 'page_size'
    max_page_size = 100 


@api_view(['GET'])
def movie_list(request):
    paginator = MoviePagination()
    movies = Movie.objects.all()
    result_page = paginator.paginate_queryset(movies, request)
    serializer = MovieSerializer(result_page, many=True)
    return paginator.get_paginated_response(serializer.data)

@api_view(['GET'])
def movie_detail(request, pk):
    try:
        movie = Movie.objects.get(pk=pk)
    except Movie.DoesNotExist:
        return Response(status=404)
    serializer = MovieSerializer(movie)
    return Response(serializer.data)
