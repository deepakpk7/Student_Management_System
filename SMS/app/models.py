from django.db import models

# Create your models here.
class Student(models.Model):
    roll_no = models.IntegerField()
    name = models.TextField()
    age = models.IntegerField()
    mark = models.IntegerField()
    phone = models.IntegerField()