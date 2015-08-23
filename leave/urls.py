from django.conf.urls import include, url
from django.contrib import admin
from leave import views
urlpatterns = [
    
    url(r'^employee/$', views.EmployeeList.as_view()),
    url(r'^employee/(?P<pk>[0-9]+)/$', views.EmployeeDetail.as_view()),
    url(r'^leave/$', views.LeaveList.as_view()),
    url(r'^leave/(?P<pk>[0-9]+)/$', views.LeaveDetail.as_view()),
    url(r'^leavebalance/$', views.LeaveBalanceList.as_view()),
    url(r'^leavebalance/(?P<pk>[0-9]+)/$', views.LeaveBalanceDetail.as_view()),
    url(r'^category/$', views.CategoryList.as_view()),
]
