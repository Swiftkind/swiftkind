from django.db import models


class Message(models.Model):
    """ inquiry messages
    """
    name = models.CharField(max_length=250)
    email = models.EmailField(max_length=500)
    content = models.TextField()

    web = models.BooleanField(default=False)
    design = models.BooleanField(default=False)
    api = models.BooleanField(default=False)
    mobile = models.BooleanField(default=False)

    date_created = models.DateTimeField(auto_now_add=True)
    date_updated = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"({self.email}) {self.name}"