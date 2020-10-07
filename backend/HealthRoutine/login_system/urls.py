from django.urls import path
from . import views

urlpatterns = [
    path('signup/', views.sign_up),
    path('signin/', views.sign_in),
    path('user/<pk>/verify/<token>/', views.verify, name='verify'),
    path('signout/', views.sign_out)
]
