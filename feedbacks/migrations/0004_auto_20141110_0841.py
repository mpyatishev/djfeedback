# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations
from django.utils.translation import ugettext_lazy as _


def init_feedback_types(apps, schema_editor):
    feedback_type = apps.get_model('feedbacks', 'FeedbackType')
    feedback_type.objects.create(ftype='bug', name=_('Bug'))
    feedback_type.objects.create(ftype='feature', name=_('Feature'))
    feedback_type.objects.create(ftype='support', name=_('Support'))


class Migration(migrations.Migration):

    dependencies = [
        ('feedbacks', '0003_auto_20141110_0841'),
    ]

    operations = [
        migrations.RunPython(init_feedback_types)
    ]
