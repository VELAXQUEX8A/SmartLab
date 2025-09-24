from rest_framework import serializers
from salas.models import Laboratorio, Reserva

class LaboratorioSerializer(serializers.ModelSerializer):
    class Meta:
        model = Laboratorio
        fields = '__all__'
        
class ReservaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Reserva
        fields = '__all__'
        read_only_fields = ['usuario']

