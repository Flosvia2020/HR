from django.urls import path

from . import views

urlpatterns = [
    path('main/create/', views.create_view),
    path('main/', views.list_view),
    path('main/<int:post_id>/delete/', views.delete_view),
    path('main/<int:post_id>/update/', views.update_view),
]
