from rest_framework import viewsets
from salas.models import Laboratorio, Reserva
from .serializers import LaboratorioSerializer, ReservaSerializer
from rest_framework.permissions import IsAuthenticated
from rest_framework.authentication import TokenAuthentication
from rest_framework_simplejwt.authentication import JWTAuthentication
from rest_framework import generics
from rest_framework.response import Response
from rest_framework import status
from datetime import datetime
from rest_framework.views import APIView
from rest_framework import permissions
from rest_framework.permissions import AllowAny

class LaboratorioViewSet(viewsets.ModelViewSet):
    queryset = Laboratorio.objects.all()
    serializer_class = LaboratorioSerializer
    permission_classes = [AllowAny]
class ReservaViewSet(viewsets.ModelViewSet):
    queryset = Reserva.objects.all()
    serializer_class = ReservaSerializer
    authentication_classes = [JWTAuthentication]
    permission_classes = [IsAuthenticated]

    def perform_create(self, serializer):
        serializer.save(usuario=self.request.user)

class ReservaCreateView(generics.CreateAPIView):
    queryset = Reserva.objects.all()
    serializer_class = ReservaSerializer
    authentication_classes = [JWTAuthentication]
    permission_classes = [IsAuthenticated]

    def create(self, request, *args, **kwargs):
        laboratorio = request.data.get("laboratorio")
        fecha = request.data.get("fecha")
        hora_inicio = request.data.get("hora_inicio")
        hora_fin = request.data.get("hora_fin")

        reservas_existentes = Reserva.objects.filter(
            laboratorio_id=laboratorio,
            fecha=fecha,
            hora_inicio__lt=hora_fin,
            hora_fin__gt=hora_inicio,
            estado__in=["Pendiente", "Aprobada"]
        )

        if reservas_existentes.exists():
            return Response({"error": "Sala no disponible"}, status=status.HTTP_400_BAD_REQUEST)

        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save(usuario=self.request.user)

        return Response(serializer.data, status=status.HTTP_201_CREATED)
    

class MisReservasView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        reservas = Reserva.objects.filter(usuario=request.user)
        serializer = ReservaSerializer(reservas, many=True)
        return Response(serializer.data)