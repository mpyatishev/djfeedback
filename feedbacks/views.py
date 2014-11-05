# -*- coding: utf-8 -*-

import json

from django.http import HttpResponse
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

    def form_invalid(self, form):
        if self.request.is_ajax():
            return self.render_to_json_response(form.errors)
        return super(FeedbackView, self).form_invalid(form)

    def form_valid(self, form):
        if self.request.is_ajax():
            form.save()
            return self.render_to_json_response('OK')
        return super(FeedbackView, self).form_valid(form)

    def render_to_json_response(self, context, **kwargs):
        data = json.dumps(context)
        kwargs['content_type'] = 'application/json'
        return HttpResponse(data, **kwargs)
