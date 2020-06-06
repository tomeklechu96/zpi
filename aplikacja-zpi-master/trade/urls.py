from django.urls import path
from . import views

urlpatterns = [

    path('', views.about, name='about'),
    path('team', views.team, name='team'),
    path('contact', views.contact, name='contact'),
    path('rejestracja', views.rejestracja, name='rejestracja'),
    path('charts', views.charts, name="wykresy"),
    path('currencyexchanger', views.currencyexchanger, name="currencyexchanger"),
]
