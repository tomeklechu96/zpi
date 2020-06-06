from django.db import models
from datetime import date
from django.urls import reverse
from django.contrib.auth.models import User 
# Create your models here.


    # ... other fields
class Sympthoms(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE,null=True)
    
    data = models.DateTimeField(null=True, blank=True)
    temperatura = models.DecimalField(max_digits=3,decimal_places=1 ,null=True, blank=True)

    BREATH_CHOICES= (
        ('t','Tak'),
        ('l','Lekkie'),
        ('n','Nie'),
        )
    dusznosci = models.CharField(
        max_length=1,
        choices=BREATH_CHOICES,
        blank=True,
        default='n',
        help_text='Czy wystepują duszności ?',
        )
    COUGH= (
        ('mocny', 'Mocny'),
        ('lekki','Lekki'),
        ('brak','Brak'),
        )
    kaszel = models.CharField(
        max_length=5,
        choices=COUGH,
        blank=True,
        default='b',
        help_text='Czy wystepuje kaszel  ?',
        )
    inne_objawy = models.CharField(max_length=200,help_text='Podaj inne zauważone objawy')
    def get_absolute_url(self):
        return reverse('post-detail',args=[str(self.id)])
    def __str__(self):
        return f'{self.data}'
