from django.shortcuts import render
from django.views.generic.base import TemplateView


class About(TemplateView):
    """ team page
    """
    template_name = 'pages/about.html'

    def get(self, *args, **kwargs):
        return render(self.request, self.template_name, {})


class Contact(TemplateView):
    """ team page
    """
    template_name = 'pages/contact.html'

    def get(self, *args, **kwargs):
        return render(self.request, self.template_name, {})