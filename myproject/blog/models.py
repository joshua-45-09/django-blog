from django.db import models
from django.contrib.auth.models import User
class Category(models.Model):
    name=models.CharField(max_length=100,unique=True)
    def __str__(self):
        return self.name
class Tag(models.Model):
    name=models.CharField(max_length=50,unique=True)
    def __str__(self):
        return self.name
class Post(models.Model):
    category=models.ForeignKey(Category,on_delete=models.CASCADE,blank=True,null=True)
    tags=models.ManyToManyField(Tag,blank=True)
    author= models.ForeignKey(User,on_delete=models.CASCADE)
    title=models.CharField(max_length=200)
    content=models.TextField()
    created_at=models.DateTimeField(auto_now_add=True)
    def __str__(self):
        return self.title