from django.db import models


class Feedback(models.Model):
    date = models.DateTimeField(auto_now_add=True)
    name = models.CharField(max_length=254, blank=True, null=True)
    email = models.EmailField(max_length=254)
    ftype = models.ForeignKey('FeedbackType')
    subj = models.CharField(max_length=254)
    text = models.TextField()
    attachment = models.ForeignKey('Attachment')


class FeedbackType(models.Model):
    name = models.CharField(max_length=80)


class Attachment(models.Model):
    name = models.CharField(max_length=254)
    attachment = models.FileField()
