# -*- coding: utf-8 -*-

from django.views.generic.edit import CreateView

from forms import FeedbackForm
from models import Feedback


class FeedbackView(CreateView):
    template_name = 'feedback.html'
    model = Feedback
    form_class = FeedbackForm

    def get_context_data(self, *args, **kwargs):
        context = super(FeedbackView, self).get_context_data(*args, **kwargs)
        context['feedback_form'] = context['form']
        return context
