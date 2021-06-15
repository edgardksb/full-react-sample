from django.db import models


class MedicalSpecialty(models.Model):
    name = models.CharField(max_length=255)

    def __str__(self):
        return self.name


class Doctor(models.Model):
    name = models.CharField(max_length=255)
    email = models.EmailField()
    phone = models.CharField(max_length=40)
    medicalspecialty = models.ForeignKey(
        MedicalSpecialty, on_delete=models.RESTRICT)

    def __str__(self):
        return f'{self.name} is a {self.medicalspecialty.name}'
