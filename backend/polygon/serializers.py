from rest_framework import serializers
from polygon.models import Polygon


class PolygonSerializer(serializers.ModelSerializer):
    class Meta:
        model = Polygon
        fields = ['id', 'created', 'updated', 'coordinates', 'data']
