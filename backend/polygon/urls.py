from django.urls import path
from polygon.views import ViewPolygons, NewCoordinatesPolygons

urlpatterns = [
    path('', ViewPolygons.as_view()),
    path('new/', NewCoordinatesPolygons.as_view()),
]
