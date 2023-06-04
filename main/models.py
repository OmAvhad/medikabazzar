from django.db import models

# Create your models here.

class productDetails(models.Model):
    name = models.CharField(max_length=255,blank=True, null=True)
    price = models.IntegerField(max_length=255,blank=True,null=True)
    quantity = models.IntegerField(max_length=1000,blank=True,null=True)
    