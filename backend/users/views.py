from django.contrib.auth import get_user_model
from rest_framework.generics import RetrieveUpdateAPIView
from users.serializers import UserSerializer


User = get_user_model()


class GetUpdateUserProfile(RetrieveUpdateAPIView):
    # GET: Get the users profile.
    # PATCH: Update the users profile.

    queryset = User.objects.all()
    serializer_class = UserSerializer

    def get_object(self):
        return self.request.user
