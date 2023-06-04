from django.urls import path, include
from . import views

app_name = 'main'

urlpatterns = [
    path('',views.index,name="index"),
    path('api/add_products/',views.add_product,name="add_products"),
    path('api/get_products/',views.get_products,name="get_products"),
    path('api/update_product/',views.products_update,name="update_products"),
    path('api/search_products/',views.search_products,name="search_products"),
    path('api/delete_product/',views.delete_product,name="delete_product"),
    
]
