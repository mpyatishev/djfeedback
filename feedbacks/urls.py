# -*- coding: utf-8 -*-


from django.conf.urls import patterns, url

from . import views


urlpatterns = patterns(
    '',
    url(r'feedback$', views.FeedbackView.as_view(), name='feedback-post')
)
