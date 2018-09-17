from django.urls import path
from django.views.generic.base import TemplateView

from .views import About, Contact


urlpatterns = [
    path('', TemplateView.as_view(template_name="pages/homepage.html"), name="index"),
    path('intro/',  TemplateView.as_view(template_name="pages/intro.html"), name="intro"),
    path('process/', TemplateView.as_view(template_name="pages/process.html"), name="process"),
    path('about/', About.as_view(), name="about"),
    path('contact/', Contact.as_view(), name="contact"),
]