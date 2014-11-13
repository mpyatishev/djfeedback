# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('feedbacks', '0004_auto_20141110_0841'),
    ]

    operations = [
        migrations.AlterField(
            model_name='feedback',
            name='email',
            field=models.EmailField(max_length=254, verbose_name='e-mail'),
            preserve_default=True,
        ),
        migrations.AlterField(
            model_name='feedbacktype',
            name='ftype',
            field=models.CharField(max_length=10, verbose_name='type'),
            preserve_default=True,
        ),
    ]
