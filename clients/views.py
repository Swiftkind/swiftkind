from rest_framework.viewsets import ViewSet
from rest_framework.response import Response

from .serializers import MessageSerializer


class Message(ViewSet):
    """ client inquiry
    """
    serializer_class = MessageSerializer

    def post(self, *args, **kwargs):
        serializer = self.serializer_class(data=self.request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()

        return Response(serializer.data, status=200)
