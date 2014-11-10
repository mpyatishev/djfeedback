# -*- coding: utf-8 -*-

from redmine import Redmine

from feedbacks import settings
from base import IBackend


class RedmineBackend(IBackend):
    def __init__(self):
        self.redmine = Redmine(settings.DJFEEDBACK_REDMINE_URL,
                               key=settings.DJFEEDBACK_REDMINE_KEY)
        self.project_id = settings.DJFEEDBACK_REDMINE_PROJECT_ID

    def post(self, message):

        tracker = message.ftype.ftype
        if tracker is None:
            tracker = 'bug'

        self.redmine.issue.create(
            project_id=self.project_id,
            tracker_id=settings.DJFEEDBACK_REDMINE_TRACKERS[tracker],
            subject=message.subj,
            description=message.text,
        )
