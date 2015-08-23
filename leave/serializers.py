from rest_framework import serializers
from leave.models import Employee, Leave, LeaveBalance

class EmployeeSerializer(serializers.ModelSerializer):
    manager = serializers.StringRelatedField()

    class Meta:
        model = Employee
        # fields = ('id', 'title', 'code', 'linenos', 'language', 'style')

class LeaveSerializer(serializers.ModelSerializer):
    class Meta:
        model = Leave


class LeaveBalanceSerializer(serializers.ModelSerializer):
    class Meta:
        model = LeaveBalance

