# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


def init_feedback_types(apps, schema_editor):
    feedback_type = apps.get_model('feedbacks', 'FeedbackType')
    feedback_type.objects.create(ftype='bug', name='Bug')
    feedback_type.objects.create(ftype='feature', name='Feature')
    feedback_type.objects.create(ftype='support', name='Support')


class Migration(migrations.Migration):

    dependencies = [
        ('feedbacks', '0003_auto_20141110_0841'),
    ]

    operations = [
        migrations.RunPython(init_feedback_types)
    ]
