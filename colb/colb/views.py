from django.shortcuts import render

def index(request):
    user_agent = request.META.get("HTTP_USER_AGENT")
    mobile_os = ["android", "iphone", "ipad"]
    is_mobile = False

    if any(mobile in user_agent.lower() for mobile in mobile_os):
        is_mobile = True

    return render(request, 'index.html', context={ 'is_mobile': is_mobile })

def menu(request):
    return render(request, 'menu.html')