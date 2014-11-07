# -*- coding: utf-8 -*-


# import mock

from django.test import TestCase  # , RequestFactory

from feedbacks import BackendAggregator
from ..models import Feedback, FeedbackType


class TestRedmineBackend(TestCase):
    def test_should_post_message(self):
        ftype = FeedbackType()
        message = Feedback(
            name='test',
            email='test@example.com',
            subj='test message',
            ftype=ftype
        )

        BackendAggregator().post(message)
