# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('feedbacks', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='feedback',
            name='attachment',
            field=models.ForeignKey(blank=True, to='feedbacks.Attachment', null=True),
            preserve_default=True,
        ),
    ]
