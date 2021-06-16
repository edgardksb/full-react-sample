from rest_framework import serializers

from .models import UserMobile


class UserMobileSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = UserMobile
        fields = ('id', 'name', 'email', 'phone', 'token')
