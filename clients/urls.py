from django.conf.urls import url
from .views import Message


urlpatterns = [
    url(r'^send/', Message.as_view({
        'post': 'post',
    }), name="message_send"),
    
]