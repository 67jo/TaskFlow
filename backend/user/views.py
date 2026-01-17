from rest_framework.viewsets import ModelViewSet
from rest_framework_simplejwt.views import TokenObtainPairView
from .serializers import UserSerializer,LoginWhithEmailSerializer
from .models import User
from rest_framework.permissions import AllowAny

class UserModelViewSet(ModelViewSet):
    permission_classes = [AllowAny]
    queryset = User.objects.all()
    serializer_class = UserSerializer

class LoginWhithEmailView(TokenObtainPairView):
    permission_classes = [AllowAny]
    serializer_class = LoginWhithEmailSerializer
