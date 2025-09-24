from django.db import models

class Usuario(models.Model):
    username = models.CharField(max_length=100, unique=True)
    email = models.IntegerField()
    password = models.TextField(blank=True)
    
    def __str__(self):
        return self.nombre