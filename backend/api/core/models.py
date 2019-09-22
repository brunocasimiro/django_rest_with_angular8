from django.db import models

class Person(models.Model):
  name = models.CharField(max_length=100)
  username = models.CharField(max_length=100)
  password = models.CharField(max_length=100)
  token = models.CharField(max_length=500)

  def __str__(self):
    return self.name

class Contact(models.Model):
  name = models.CharField(max_length=100)
  email = models.CharField(max_length=100)
  cpf = models.CharField(max_length=15)
  phone = models.CharField(max_length=20)
  address = models.CharField(max_length=500)
  image = models.CharField(max_length=10000)

  def __str__(self):
    return self.name