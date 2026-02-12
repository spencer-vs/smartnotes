from django.db import models
from django.contrib.auth.models import AbstractUser
class CustomUser(AbstractUser):
    city = models.CharField(max_length=100, null=True, blank=True)
    state = models.CharField(max_length=100, null=True, blank=True)
    phone = models.CharField(max_length=11, null=True, blank=True)
    address = models.TextField(max_length=150, null=True, blank=True)
    def __str__(self):
        return self.username










# from django.db import models
# from django.contrib.auth.models import AbstractUser, Group, UserManager


# # Create your models here.

# class CustomUser(AbstractUser):
#     objects = UserManager()
    
#     city = models.CharField(max_length=100, null=True, blank=True)
#     state = models.CharField(max_length=100, null=True, blank=True)
#     phone = models.CharField(max_length=11, null=True, blank=True)
#     address = models.TextField(max_length=150, null=True, blank=True)
    
#     groups = models.ManyToManyField(
#         'auth.Group',  # Correct reference to auth.Group
#         verbose_name='custom_user_groups',
#         blank=True,
#         help_text='The groups the user belongs to. A user will get all permissions granted to each of their groups.',
#         related_name='customuser_groups',
#     )
#     user_permissions = models.ManyToManyField(
#         'auth.Permission',  # Correct reference to auth.Permission
#         verbose_name='custom_user_permissions',
#         blank=True,
#         help_text='Specific permissions for this user.',
#         related_name='customuser_permissions',
#     )
    
    
#     def __str__(self):
#         return self.username


#     def save(self, *args, **kwargs):
#         if self.pk is None:                    # ← NEW: only on create
#             self.is_active = True
#         super().save(*args, **kwargs)
        
        
        
        
        
        

#     # "username": "Isaac",
#     # "password": "StrongPassword123",
#     # "phone": "08071861441",
#     # "email": "testing@email.com"