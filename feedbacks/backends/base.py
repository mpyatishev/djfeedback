# -*- coding: utf-8 -*-

from django.utils.module_loading import import_string

from feedbacks import settings


class IBackend(object):
    def post(self, message):
        pass


class BackendAggregator(IBackend):
    def __init__(self):
        self._backends = []
        for backend in settings.DJFEEDBACK_BACKENDS:
            model = import_string(backend)()
            self._backends.append(model)

    def post(self, message):
        for backend in self._backends:
            backend.post(message)
