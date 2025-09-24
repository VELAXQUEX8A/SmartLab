from rest_framework import serializers
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import status
from django.contrib.auth.models import User
from rest_framework.permissions import IsAuthenticated
from salas.models import Reserva
from .serializers import ReservaSerializer

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['username', 'email', 'password']
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        user = User.objects.create_user(**validated_data)
        return user

class UserRegisterView(APIView):
    def post(self, request):
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({'mensaje': 'Usuario registrado exitosamente'}, status=status.HTTP_201_CREATED)
        return Response({'mensaje': 'Error al registrar usuario'}, status=status.HTTP_400_BAD_REQUEST)

from rest_framework_simplejwt.views import TokenObtainPairView
from .serializers import CustomTokenObtainPairSerializer

class CustomTokenObtainPairView(TokenObtainPairView):
    serializer_class = CustomTokenObtainPairSerializer


class PerfilUsuarioView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        usuario = request.user
        reservas = Reserva.objects.filter(usuario=usuario)
        reservas_serializadas = ReservaSerializer(reservas, many=True).data

        return Response({
            "username": usuario.username,
            "email": usuario.email,
            "reservas": reservas_serializadas
        })