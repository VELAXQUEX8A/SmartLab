from django.contrib.auth.models import User
from django.db import models

class Laboratorio(models.Model):
    nombre = models.CharField(max_length=100, unique=True)
    capacidad = models.IntegerField()
    descripcion = models.TextField(blank=True)
    
    def __str__(self):
        return self.nombre

class Reserva(models.Model):
    usuario = models.ForeignKey(User, on_delete=models.CASCADE)
    laboratorio = models.ForeignKey(Laboratorio, on_delete=models.CASCADE)
    fecha = models.DateField()
    hora_inicio = models.TimeField()
    hora_fin = models.TimeField()
    estado = models.CharField(max_length=20, choices=[('Pendiente', 'Pendiente'), ('Aprobada', 'Aprobada'), ('Rechazada', 'Rechazada')], default='Pendiente')

    def __str__(self):
        return f"{self.usuario.username} - {self.laboratorio.nombre} ({self.fecha})"
