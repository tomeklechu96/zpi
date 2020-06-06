from django.shortcuts import render, redirect
from .forms import RegisterForm
from django.views.generic.edit import CreateView, UpdateView, DeleteView
from django.urls import reverse_lazy
from trade.models import Sympthoms
from django.views import generic
from django.utils import timezone
from django.http import HttpResponseRedirect
import requests
# Create your views here.

def about(request):
    url = 'https://api.nbp.pl/api/exchangerates/tables/a/?format=json'

    response = requests.get(url)
    data = response.json()
    serialize = data[0]['rates']
    return render(request, 'about.html', {'serialize': serialize})
    
def charts(request):
   return render(request, 'charts.html', {'title': 'Charts'})

def currencyexchanger(request):
    return render(request, 'currencyexchanger.html', {'title': 'currencyexchanger'})


def team(request):
    return render(request, 'team.html', {'title': 'Team'})



def rejestracja(response):
    if response.method == "POST":
        form = RegisterForm(response.POST)
        if form.is_valid():
            form.save()
            return redirect("/")
    else:
        form = RegisterForm()

    return render(response, 'rejestracja.html', {'form':form})


def login(request):
    return render(request, 'login.html', {'title': 'Login'})

def contact(request):
    return render(request, 'contact.html', {'title': 'Contact'})





