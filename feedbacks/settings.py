# -*- coding: utf-8 -*-

from django.conf import settings


DJFEEDBACK_BACKENDS = getattr(
    settings, 'DJFEEDBACK_BACKENDS',
    ('feedbacks.backends.RedmineBackend',)
)

DJFEEDBACK_REDMINE_URL = getattr(settings, 'DJFEEDBACK_REDMINE_URL', '')
DJFEEDBACK_REDMINE_KEY = getattr(settings, 'DJFEEDBACK_REDMINE_KEY', None)
DJFEEDBACK_REDMINE_PROJECT_ID = getattr(settings, 'DJFEEDBACK_REDMINE_PROJECT_ID', None)
DJFEEDBACK_REDMINE_TRACKERS = getattr(
    settings, 'DJFEEDBACK_REDMINE_TRACKERS',
    {
        1: 1,
        2: 2,
        3: 3,
    }
)
