from rest_framework import routers
from .views import UserModelViewSet


app_name = "user"
router = routers.DefaultRouter()
router.register(r"user", UserModelViewSet, basename="user")
urlpatterns = router.urls