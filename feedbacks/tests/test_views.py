# -*- coding: utf-8 -*-


from mock import patch

from django.core.urlresolvers import reverse
from django.test import TestCase, RequestFactory

from ..models import FeedbackType
from ..views import FeedbackView


class TestRedmineBackend(TestCase):
    def setUp(self):
        self.rf = RequestFactory()

    @patch('feedbacks.backends.redmine_backend.Redmine')
    def test_should_post_message(self, mock):
        ftype = FeedbackType.objects.create(name='bugs')

        request = self.rf.post(
            reverse('feedback-post'),
            {
                'name': 'test',
                'email': 'test@example.com',
                'subj': 'test message',
                'ftype': ftype,
            },
            HTTP_X_REQUESTED_WITH='XMLHttpRequest'
        )

        response = FeedbackView.as_view()(request)
