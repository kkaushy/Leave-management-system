from django.db import models
# from django.contrib.auth.models import User

class Category():

	EARNED_LEAVE = 'EL'
	SICK_LEAVE = 'SL'
	COMPENSATORY_LEAVE = 'CL'
	LEAVE_WITHOUT_PAY = 'LWP'    
	HOLIDAY_WORKED = 'HW'
	PAID_TIME_OFF = 'PTO'
	WORK_FROM_HOME = 'WFH'
	PATERNITY_LEAVE = 'PL'
	BEREAVEMENT_LEAVE = 'BL'
	WEDDING_DAY_LEAVE = 'WDL'
    
    
	LEAVE_CHOICES = (
		(EARNED_LEAVE, 'Earned Leave'),
		(SICK_LEAVE, 'Sick Leave'),
		(COMPENSATORY_LEAVE, 'Compensatroy Leave'),
		(LEAVE_WITHOUT_PAY, 'Leave Without Pay '),
		(HOLIDAY_WORKED, 'Holiday Worked'),
		(PAID_TIME_OFF, 'Paid Time Off'),
		(WORK_FROM_HOME, 'Work From Home'),
		(PATERNITY_LEAVE, 'Paternity Leave'),
		(BEREAVEMENT_LEAVE, 'Bereavement Leave'),
		(WEDDING_DAY_LEAVE, 'Wedding Day Leave'),
	)


class Employee(models.Model):
	# user = models.ForeignKey(User)
	emp_id = models.IntegerField(primary_key=True, null=False)
	location = models.CharField(max_length=200)
	name = models.CharField(max_length=30)
	mail_id = models.EmailField()
	manager = models.ForeignKey('self', limit_choices_to={'is_manager':True}, blank=True, null=True)
	is_manager = models.BooleanField(default=False)

	def __unicode__(self):
		return str(self.name)

class Leave(models.Model):
	
	STATUS = (
		(0, 'Pending'),
		(1, 'Approved'),
		(2, 'Cancel'),		
	)

	to_date = models.DateField()
	from_date = models.DateField()	
	category = models.CharField(max_length=4, choices=Category.LEAVE_CHOICES)
	no_of_days = models.IntegerField()
	request_date = models.DateField(auto_now_add=True)
	contact_details = models.TextField(null=True, blank=True)
	reason = models.TextField(null=True, blank=True)
	employee = models.ForeignKey(Employee)
	status = models.IntegerField(choices=STATUS)

	def __unicode__(self):
		return str(self.employee)+"__"+self.category


class LeaveBalance(models.Model):

	employee = models.ForeignKey(Employee)
	category = models.CharField(max_length=4, choices=Category.LEAVE_CHOICES)
	balance = models.IntegerField(default=0)
	availed = models.IntegerField(default=0)
	carry_forward = models.IntegerField(default=0)

	class Meta:
		unique_together = ('employee', 'category')
	
	def __unicode__(self):
		return str(self.employee)+"__"+self.category+"__"+str(self.balance)



	
