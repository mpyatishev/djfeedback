# -*- coding: utf-8 -*-

from django import template

from ..forms import FeedbackForm

register = template.Library()


@register.inclusion_tag('feedback.html')
def feedback():
    return {
        'feedback_form': FeedbackForm(),
    }
