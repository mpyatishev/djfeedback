# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('feedbacks', '0002_auto_20141105_1106'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='attachment',
            options={'verbose_name': 'attachment', 'verbose_name_plural': 'attachments'},
        ),
        migrations.AlterModelOptions(
            name='feedback',
            options={'verbose_name': 'feedback', 'verbose_name_plural': 'feedbacks'},
        ),
        migrations.AlterModelOptions(
            name='feedbacktype',
            options={'verbose_name': 'feedback type', 'verbose_name_plural': 'feedback type'},
        ),
        migrations.AddField(
            model_name='feedbacktype',
            name='ftype',
            field=models.CharField(default='bug', max_length=10),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='attachment',
            name='attachment',
            field=models.FileField(upload_to=b'', verbose_name='file'),
            preserve_default=True,
        ),
        migrations.AlterField(
            model_name='attachment',
            name='name',
            field=models.CharField(max_length=254, verbose_name='name'),
            preserve_default=True,
        ),
        migrations.AlterField(
            model_name='feedback',
            name='date',
            field=models.DateTimeField(auto_now_add=True, verbose_name='date'),
            preserve_default=True,
        ),
        migrations.AlterField(
            model_name='feedback',
            name='email',
            field=models.EmailField(max_length=254, verbose_name='email'),
            preserve_default=True,
        ),
        migrations.AlterField(
            model_name='feedback',
            name='name',
            field=models.CharField(max_length=254, null=True, verbose_name='name', blank=True),
            preserve_default=True,
        ),
        migrations.AlterField(
            model_name='feedback',
            name='subj',
            field=models.CharField(max_length=254, verbose_name='subject'),
            preserve_default=True,
        ),
        migrations.AlterField(
            model_name='feedback',
            name='text',
            field=models.TextField(verbose_name='text'),
            preserve_default=True,
        ),
        migrations.AlterField(
            model_name='feedbacktype',
            name='name',
            field=models.CharField(max_length=80, verbose_name='name'),
            preserve_default=True,
        ),
    ]
