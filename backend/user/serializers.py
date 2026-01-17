from rest_framework import serializers
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from .models import User


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'

class LoginWhithEmailSerializer(TokenObtainPairSerializer):
    username_field = "email"
    def validate(self, attrs):
        email = attrs.get("email")
        password = attrs.get("password")

        if not email or not password:
            raise serializers.ValidationError("Email e senha são obrigatórios")
        user = User.objects.filter(email=email).first()

        if not user:
            raise serializers.ValidationError("Usuário não encontrado")
        
        if user.check_password(password):
            raise serializers.ValidationError("Senha inválida")
        
        if not user.is_active:
            raise serializers.ValidationError("Usuário inativo")
        
        data = super().validate({
            "username":user.name,
            "password":password
        })

        return data