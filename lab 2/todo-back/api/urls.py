from django.urls import path
from . import views

urlpatterns = [
    path('task_lists/', views.task_list, name='post_list'),
    path('task_lists/<int:pk>/', views.task_list_detail, name='post_list'),
    path('task_lists/<int:pk>/tasks/', views.task_list_task, name='post_list'),
    path('tasks/<int:pk>/', views.task_detail, name='post_list'),
    path('tasks/', views.tasks, name='tasks')
]
