from rest_framework import serializers
from .models import Message


class MessageSerializer(serializers.ModelSerializer):
    """ client inquiry serializer
    """
    class Meta:
        model = Message
        fields = (
            'id',
            'name',
            'email',
            'content',
            'web',
            'design',
            'api',
            'mobile',
        )