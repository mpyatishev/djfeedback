from django.contrib import admin

from models import (
    Feedback,
    FeedbackType,
    Attachment,
)

admin.site.register(Feedback)
admin.site.register(FeedbackType)
admin.site.register(Attachment)
