from django.urls import path

from users.views import GetUpdateUserProfile

urlpatterns = [
    path('self/', GetUpdateUserProfile.as_view()),
]
