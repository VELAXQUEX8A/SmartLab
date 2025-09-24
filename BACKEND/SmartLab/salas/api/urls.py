from rest_framework.routers import DefaultRouter
from .views import LaboratorioViewSet, ReservaViewSet
from django.urls import path, include
from .views import ReservaCreateView
from .views import MisReservasView

router = DefaultRouter()
router.register(r'laboratorios', LaboratorioViewSet)
router.register(r'reservas', ReservaViewSet, basename='reservas')

urlpatterns = [
    path('', include(router.urls)),
    path('crear-reserva/', ReservaCreateView.as_view(), name='crear-reserva'),
    path('mis-reservas/', MisReservasView.as_view(), name='mis-reservas'),
]