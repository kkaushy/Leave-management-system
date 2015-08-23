from django.conf.urls import include, url
from django.contrib import admin

urlpatterns = [
    # Examples:
    url(r'^$', 'lms.views.index', name='index'),
    url(r'^admin/', include(admin.site.urls)),
    url(r'^api/', include('leave.urls')),
]
