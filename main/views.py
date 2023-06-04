from email import message
from sre_constants import SUCCESS
from urllib import request, response
from django.shortcuts import render
from django.http import JsonResponse
from numpy import product
from django.views.decorators.csrf import csrf_protect,csrf_exempt
from main.models import productDetails
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import productDetailsSerializer
from rest_framework import status

from rest_framework import serializers
# Create your views here.

def index(request,template_name='main/index.html'):
    return render (request,template_name)

# @csrf_exempt
# def add_product(request):
#     message= ""
#     data = ""
#     if request.method == "POST":
#         postdata = request.POST
#         name = postdata['name']
#         price = postdata['price']
#         quantity = postdata['quantity']
#         try:
#             productDetails.objects.create(name=name,price=price,quantity=quantity)
#             message = "Product Added Sccussfully."
#             response = {'status':'success','status_code':'200','message':message,'data':data}
#         except Exception as e:
#             message = e
#             response = {'status':'error','status_code':'400','message':message,'data':data}
            
#     response = JsonResponse(response)
#     return response

@csrf_exempt
@api_view(['POST'])
def add_product(request):
    serializer = productDetailsSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data)
    return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)
    

@csrf_exempt
@api_view(['GET'])
def get_products(request):
    products = productDetails.objects.all().order_by('-id')
    response = productDetailsSerializer(products, many=True)
    return Response(response.data)

@csrf_exempt
@api_view(['POST'])
def products_update(request):
    postdata = request.POST
    pname = postdata['pname']
    try:
        product = productDetails.objects.get(name=pname)
    except:
        product = None
    if product:
        serializer = productDetailsSerializer(product,data={'name':postdata['name'],'price':postdata['price'],'quantity':postdata['quantity']})
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
    return Response({"status":"400" ,"message":"Product not found"})

@csrf_exempt
@api_view(['POST'])
def search_products(request):
    name = request.POST['name']
    try:
        product = productDetails.objects.filter(name__startswith=name)
    except:
        product = None
    if product:
        serializer = productDetailsSerializer(product,many=True)
        return Response(serializer.data)
    else:
        return Response({'status':'400','message':'Product not found'})
    
@csrf_exempt
@api_view(['POST'])
def delete_product(request):
    postdata = request.POST
    pname = postdata['pname']
    try:
        product = productDetails.objects.get(name=pname)
    except:
        product = None
    if product:
        product.delete()
        return Response({'status':'200'})
    return Response({"status":"400" ,"message":"Product not found"})