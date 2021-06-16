from django.contrib import admin

from .models import UserMobile


class UserMobileAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'email')


admin.site.register(UserMobile, UserMobileAdmin)
