from django.urls import path
from .views import home,detail_post,create_post,update_post,delete_post
urlpatterns=[
    path('',home,name='home'),
    path('post/<int:pk>/',detail_post,name='detail_post'),
    path('create/',create_post,name='create_post'),
    path('update/<int:pk>/',update_post,name='update_post'),
    path('delete/<int:pk>/',delete_post,name='delete_post')
]

