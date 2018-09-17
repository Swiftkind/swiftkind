from django.db import models


class Member(models.Model):
    """ swiftkind member data
    """
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    title = models.CharField(max_length=50)

    image = models.ImageField(upload_to="team/", null=True, blank=True)
    description = models.TextField(null=True, blank=True)

    handle = models.CharField(max_length=50)
    email = models.EmailField(null=True, blank=True)

    @property
    def display_name(self):
        return f"{self.first_name} {self.last_name}"

    def __str__(self):
        return f"{self.display_name}"