from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='index'),
    path('contact', views.contact, name='contact'),
    path('portfolio', views.portfolio, name='portfolio'),
    path('skills', views.skills, name='skills'),    
]
