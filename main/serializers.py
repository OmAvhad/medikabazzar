from asyncio import tasks
from dataclasses import field, fields
from msilib.schema import Class
from pyexpat import model
from rest_framework import serializers
from .models import productDetails

class productDetailsSerializer(serializers.ModelSerializer):
    class Meta:
        model = productDetails
        fields = '__all__'