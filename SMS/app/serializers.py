from rest_framework import serializers
from .models import *

class Student_serializers(serializers.ModelSerializer):
    class Meta:
        model=Student
        fields='__all__'