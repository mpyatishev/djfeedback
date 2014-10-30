# -*- coding: utf-8 -*-


from django.urls.conf import patterns, url

from . import views


urlpatterns = patterns(
    '',
    url(r'feedback$', views.FeedbackView.as_view(), name='feedback-post')
)
