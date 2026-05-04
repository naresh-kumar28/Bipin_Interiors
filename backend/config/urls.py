"""
URL configuration for config project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/6.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static

from django.http import HttpResponse

def home(request):
    html_content = """
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Bipin Interiors | API</title>
        <style>
            body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; display: flex; align-items: center; justify-content: center; height: 100vh; margin: 0; background-color: #f8f9fa; color: #333; }
            .container { text-align: center; padding: 2rem; background: white; border-radius: 20px; shadow: 0 10px 25px rgba(0,0,0,0.05); border: 1px solid #eee; max-width: 400px; }
            h1 { color: #C5A059; margin-bottom: 0.5rem; }
            p { color: #666; font-size: 0.9rem; line-height: 1.6; }
            .status { display: inline-block; padding: 0.25rem 0.75rem; background: #e6fffa; color: #2d3748; border-radius: 9999px; font-size: 0.75rem; font-weight: bold; margin-top: 1rem; }
            .links { margin-top: 2rem; display: flex; flex-direction: column; gap: 0.75rem; }
            a { text-decoration: none; color: white; background: #C5A059; padding: 0.6rem 1.2rem; border-radius: 10px; font-size: 0.8rem; font-weight: bold; transition: opacity 0.2s; }
            a:hover { opacity: 0.9; }
            a.secondary { background: #2d3748; }
        </style>
    </head>
    <body>
        <div class="container">
            <h1>Bipin Interiors</h1>
            <p>Welcome to the official API server. Your installation and management services are powered by this backend.</p>
            <div class="status">● API STATUS: ACTIVE</div>
            <div class="links">
                <a href="https://bipin-interiors.vercel.app">Visit Main Website</a>
                <a href="/admin/" class="secondary">Access Admin Panel</a>
            </div>
        </div>
    </body>
    </html>
    """
    return HttpResponse(html_content)

urlpatterns = [
    path('', home, name='home'),
    path('admin/', admin.site.urls),
    path('api/', include('core.urls')),
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
