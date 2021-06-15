from django.contrib import admin

from .models import MedicalSpecialty, Doctor


class MedicalSpecialtyAdmin(admin.ModelAdmin):
    list_display = ('id', 'name')


class DoctorAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'email')


admin.site.register(MedicalSpecialty, MedicalSpecialtyAdmin)
admin.site.register(Doctor, DoctorAdmin)
