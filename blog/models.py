from django.conf import settings
from django.db import models

from wagtail.core import blocks
from wagtail.core.models import Page
from wagtail.core.fields import StreamField

from wagtail.admin.edit_handlers import FieldPanel, StreamFieldPanel

from wagtail.images.blocks import ImageChooserBlock
from wagtail.snippets.blocks import SnippetChooserBlock
from wagtail.embeds.blocks import EmbedBlock
from wagtail.documents.blocks import DocumentChooserBlock


class CodeBlock(blocks.TextBlock):
    class Meta:
        template = 'blocks/snippet.html'
        icon = 'code'
        label = 'Code Snippets'


class Blog(Page):
    """ blog post
    """
    author = models.ForeignKey(settings.AUTH_USER_MODEL,
        null=True, blank=True, on_delete=models.SET_NULL)

    date_created = models.DateTimeField(auto_now_add=True)
    date_updated = models.DateTimeField(auto_now=True)

    content = StreamField([
        ('heading', blocks.CharBlock()),
        ('paragraph', blocks.RichTextBlock()),
        ('html', blocks.RawHTMLBlock()),
        ('image', ImageChooserBlock()),
        ('snippet', CodeBlock()),
        ('embed', EmbedBlock()),
        ('document', DocumentChooserBlock()),
    ], blank=True)

    content_panels = Page.content_panels + [
        FieldPanel('author'),
        StreamFieldPanel('content'),
    ]

    def save_revision(self, user, submitted_for_moderation):
        if not self.author:
            self.author = user

        return super().save_revision(user, submitted_for_moderation)