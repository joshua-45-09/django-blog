from django.shortcuts import render,get_list_or_404,redirect,get_object_or_404
from .models import Post
from .forms import PostForm
from django.contrib.auth.decorators import login_required
from django.db.models import Q
from django.core.paginator import Paginator

def home(request):
    query=request.GET.get('q')
    posts=Post.objects.all()
    if query:
        posts=posts.filter(Q(title__icontains=query) |
                           Q(content__icontains=query))
    paginator= Paginator(posts,5)
    page_number=request.GET.get('page')
    page_obj=paginator.get_page(page_number)
    return render(request,'blog/home.html',{'page_obj': page_obj})


def detail_post(request,pk):
    post=get_object_or_404(Post,pk=pk)
    return render(request,'blog/detail.html',{'post': post})
@login_required
def create_post(request):
    if request.method=='POST':
        form=PostForm(request.POST)
        if form.is_valid():
            post=form.save(commit=False)
            post.author=request.user
            post.save()
            return redirect('home')
    else:
        form=PostForm()
    return render(request,'blog/create.html',{'form': form })

@login_required
def update_post(request,pk):
    post=get_object_or_404(Post,pk=pk)
    if request.user != post.author:
        return redirect('home')
    if request.method=='POST':
        form=PostForm(request.POST,instance=post)
        if form.is_valid():
            form.save()
            return redirect('detail_post',pk=post.pk)
    else:
        form=PostForm(instance=post)
    return  render(request,'blog/update.html',{'form':form})

@login_required
def delete_post(request,pk):
    post=get_list_or_404(Post,pk=pk)
    if request.user != post.author:
        return redirect('home')
    if request.method=='POST':
       post.delete()
       return redirect('home')
    return render(request,'blog/delete.html',{'post':post})



    