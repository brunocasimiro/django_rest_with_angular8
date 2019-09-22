from rest_framework import serializers
from .models import Person
from .models import Contact

class PersonSerializer(serializers.ModelSerializer):
    class Meta:
        model = Person
        fields = ['id', 'name', 'username', 'password', 'token']

class ContactSerializer(serializers.ModelSerializer):
    class Meta:
        model = Contact
        fields = ['id', 'name', 'email', 'cpf', 'phone', 'address', 'image']
