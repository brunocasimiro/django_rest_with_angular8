from rest_framework import viewsets
from .models import Person
from .serializers import PersonSerializer
from .models import Contact
from .serializers import ContactSerializer

class PersonViewSet(viewsets.ModelViewSet):
    queryset = Person.objects.all()
    serializer_class = PersonSerializer

class ContactViewSet(viewsets.ModelViewSet):
    queryset = Contact.objects.all()
    serializer_class = ContactSerializer
    