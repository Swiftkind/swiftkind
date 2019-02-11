from wagtail.contrib.modeladmin.options import (
    ModelAdmin,
    modeladmin_register,
)
from .models import Message


class MessageAdmin(ModelAdmin):
    model = Message
    list_display = ('name', 'email', 'web', 'design', 'api', 'mobile', 'date_created')
    


modeladmin_register(MessageAdmin)