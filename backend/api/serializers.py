from rest_framework import serializers

from .models import MedicalSpecialty, Doctor


class MedicalSpecialtySerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = MedicalSpecialty
        fields = ('id', 'name')


class DoctorSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Doctor
        fields = ('id', 'name', 'email', 'phone', 'medicalspecialty')
