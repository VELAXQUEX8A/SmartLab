from django.urls import path
from .views import UserRegisterView
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView
from .views import CustomTokenObtainPairView
from .views import PerfilUsuarioView

urlpatterns = [
    path('api/usuarios/', UserRegisterView.as_view(), name='register'),
    path('login/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('refresh/', TokenRefreshView.as_view(), name='token_refresh'),
     path('login/', CustomTokenObtainPairView.as_view(), name='token_obtain_pair'),
     path('perfil/', PerfilUsuarioView.as_view(), name='perfil-usuario'),
]
