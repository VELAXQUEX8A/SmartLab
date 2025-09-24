from rest_framework import serializers
from usuarios.models import Usuario
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from salas.models import Reserva

class UsuarioRegistroSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)

    class Meta:
        model = Usuario
        fields = ['username', 'email', 'password']

    def create(self, validated_data):
        user = Usuario(
            username=validated_data['username'],
            email=validated_data['email']
        )
        user.set_password(validated_data['password'])
        user.save()
        return user


class CustomTokenObtainPairSerializer(TokenObtainPairSerializer):
    def validate(self, attrs):
        data = super().validate(attrs)

        data['user_id'] = self.user.id
        data['username'] = self.user.username
        data['email'] = self.user.email
        return data


class ReservaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Reserva
        fields = '__all__'  # o especifica los campos si es necesario