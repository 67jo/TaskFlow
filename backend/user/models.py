from django.db import models
from django.contrib.auth.models import AbstractUser

class User(AbstractUser):
    name = models.CharField(max_length=100,null=False,blank=False)
    email = models.EmailField(max_length=60, null=False, blank=False, unique=True)
    password = models.CharField(max_length=100,null=False,blank=False)
    status = models.CharField(max_length=100,null=False,blank=False)

    def __str__(self):
        return self.name
    
    def __repr__(self):
        return f"<UserModel: {self.name}>"


