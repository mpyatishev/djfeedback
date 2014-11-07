from django.db import models
from django.utils.translation import ugettext_lazy as _


class Feedback(models.Model):
    date = models.DateTimeField(_('date'), auto_now_add=True)
    name = models.CharField(_('name'), max_length=254, blank=True, null=True)
    email = models.EmailField(_('email'), max_length=254)
    ftype = models.ForeignKey('FeedbackType')
    subj = models.CharField(_('subject'), max_length=254)
    text = models.TextField(_('text'))
    attachment = models.ForeignKey('Attachment', blank=True, null=True)

    class Meta(object):
        verbose_name = _('feedback')
        verbose_name_plural = _('feedbacks')


class FeedbackType(models.Model):
    name = models.CharField(_('name'), max_length=80)

    class Meta(object):
        verbose_name = _('feedback type')
        verbose_name_plural = _('feedback type')

    def __unicode__(self):
        return self.name


class Attachment(models.Model):
    name = models.CharField(_('name'), max_length=254)
    attachment = models.FileField(_('file'))

    class Meta(object):
        verbose_name = _('attachment')
        verbose_name_plural = _('attachments')
