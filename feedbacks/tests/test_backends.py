# -*- coding: utf-8 -*-


from mock import patch

from django.test import TestCase  # , RequestFactory

from feedbacks import BackendAggregator
from ..models import Feedback, FeedbackType


class TestRedmineBackend(TestCase):
    @patch('feedbacks.backends.redmine_backend.Redmine')
    def test_should_post_message(self, mock):
        ftype = FeedbackType.objects.get(ftype='bug')
        message = Feedback(
            name='test',
            email='test@example.com',
            subj='test message',
            ftype=ftype
        )

        BackendAggregator().post(message)
