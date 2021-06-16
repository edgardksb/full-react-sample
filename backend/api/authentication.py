from .models import UserMobile
from django.contrib.auth.models import User
from rest_framework.authentication import BaseAuthentication
from rest_framework import exceptions


class UserMobileTokenAuthentication(BaseAuthentication):
    def authenticate(self, request):
        apiKey = False
        if 'X-API-KEY' in request.headers:
            apiKey = request.headers['X-API-KEY']
        if not apiKey:
            return None
        try:
            userMobile = UserMobile.objects.get(token=apiKey)
        except:
            raise exceptions.AuthenticationFailed('No such user')
        return (userMobile.user, None)
