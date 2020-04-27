from django.shortcuts import render

# Create your views here.
from rest_framework import generics
from .serializers import CandidateSerializer
from .models import Candidate


class CandidateList(generics.ListCreateAPIView):
    queryset = Candidate.objects.all()
    serializer_class = CandidateSerializer
