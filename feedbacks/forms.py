# -*- coding: utf-8 -*-


from django import forms
from django.utils.translation import ugettext_lazy as _

from models import Feedback


class FeedbackForm(forms.ModelForm):
    class Meta:
        model = Feedback
        fields = ['name', 'email', 'ftype', 'subj', 'text']
        widgets = {
            'name': forms.TextInput(attrs={
            }),
            'email': forms.EmailInput(attrs={
                'required': 'required',
            }),
            'ftype': forms.Select(attrs={
                'required': 'required',
            }),
            'subj': forms.TextInput(attrs={
                'autocomplete': 'off',
                'required': 'required',
            }),
            'text': forms.Textarea(attrs={
                'autocomplete': 'off',
                'required': 'required',
            }),
            'attachment': forms.Select(attrs={
                'autocomplete': 'off',
            }),
        }
        labels = {
            'ftype': _('Type')
        }
