# -*- coding: utf-8 -*-


from django import forms

from models import Feedback


class FeedbackForm(forms.ModelForm):
    class Meta:
        model = Feedback
        fields = ['name', 'email', 'ftype', 'subj', 'text', 'attachment']
        widgets = {
            'name': forms.TextInput(attrs={
                'class': 'form-control',
            }),
            'email': forms.EmailInput(attrs={
                'required': 'required',
                'class': 'form-control',
            }),
            'ftype': forms.Select(attrs={
                'required': 'required',
                'class': 'form-control',
            }),
            'subj': forms.TextInput(attrs={
                'autocomplete': 'off',
                'required': 'required',
                'class': 'form-control',
            }),
            'text': forms.Textarea(attrs={
                'autocomplete': 'off',
                'required': 'required',
                'class': 'form-control',
            }),
            'attachment': forms.Select(attrs={
                'autocomplete': 'off',
                'class': 'form-control',
            }),
        }
