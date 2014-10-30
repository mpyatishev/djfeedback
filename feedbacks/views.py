# -*- coding: utf-8 -*-

from django.views.generic.edit import CreateView

from models import Feedback


class FeedbackView(CreateView):
    model = Feedback
