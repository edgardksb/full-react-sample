from rest_framework import viewsets, status
from rest_framework.response import Response
from .serializers import UserMobileSerializer
from .models import UserMobile


class UserMobileViewSet(viewsets.ModelViewSet):
    queryset = UserMobile.objects.all().order_by('name')
    serializer_class = UserMobileSerializer

    def get_queryset(self):
        if self.request.user.is_superuser:
            return UserMobile.objects.all()
        return UserMobile.objects.filter(user=self.request.user)

    def check_permissions(self, request):
        if (request.user.is_authenticated):
            return True
        publicAccess = False
        if (request.method == "POST"):
            publicAccess = True
        if not publicAccess:
            self.permission_denied(
                request,
                message='Permission denied',
                code=401
            )
        return True
