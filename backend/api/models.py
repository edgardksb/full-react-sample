from django.db import models
import uuid
from django.contrib.auth.models import User


class UserMobile(models.Model):
    name = models.CharField(max_length=255)
    email = models.EmailField()
    phone = models.CharField(max_length=40)
    token = models.UUIDField(default=uuid.uuid4, editable=False)
    user = models.ForeignKey(
        User, on_delete=models.RESTRICT)

    def save(self, *args, **kwargs):
        user = User.objects.create_user(username=self.email,
                                        email=self.email)
        self.user = user
        super(UserMobile, self).save(*args, **kwargs)

    def __str__(self):
        return self.name
