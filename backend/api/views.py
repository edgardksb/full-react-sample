from rest_framework import viewsets

from .serializers import MedicalSpecialtySerializer, DoctorSerializer
from .models import MedicalSpecialty, Doctor


class MedicalSpecialtyViewSet(viewsets.ModelViewSet):
    queryset = MedicalSpecialty.objects.all().order_by('name')
    serializer_class = MedicalSpecialtySerializer


class DoctorViewSet(viewsets.ModelViewSet):
    queryset = Doctor.objects.all().order_by('name')
    serializer_class = DoctorSerializer
