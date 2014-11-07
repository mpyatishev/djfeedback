# -*- coding: utf-8 -*-

from redmine import Redmine

from django.conf import settings

from base import Backend


class RedmineBackend(Backend):
    def __init__(self):
        self.redmine = Redmine(settings.DJFEEDBACK_REDMINE_URL,
                               key=settings.DJFEEDBACK_REDMINE_KEY)
        self.project_id = settings.DJFEEDBACK_REDMINE_PROJECT_ID

    def post(self, message):

        self.redmine.issue.create(
            project_id=self.project_id,
            tracker_id=settings.DJFEEBACK_REDMINE_TRACKERS[message.ftype],
            subject=message.subj,
            description=message.text,
        )
