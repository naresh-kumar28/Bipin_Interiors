from django.contrib import admin
from .models import (
    Category, Service, Project, ProjectReview, ProjectRequest, 
    ServiceRequest, Booking, SiteSetting, WhyChooseUs, OurProcess, Testimonial
)

@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    list_display = ('name', 'slug', 'created_at')
    prepopulated_fields = {'slug': ('name',)}

@admin.register(Service)
class ServiceAdmin(admin.ModelAdmin):
    list_display = ('title', 'icon', 'created_at')

@admin.register(Project)
class ProjectAdmin(admin.ModelAdmin):
    list_display = ('title', 'category', 'rating', 'created_at')
    list_filter = ('category',)

@admin.register(ProjectReview)
class ProjectReviewAdmin(admin.ModelAdmin):
    list_display = ('project', 'user_name', 'rating', 'created_at')

@admin.register(ProjectRequest)
class ProjectRequestAdmin(admin.ModelAdmin):
    list_display = ('user_name', 'project', 'status', 'created_at')
    list_filter = ('status',)

@admin.register(ServiceRequest)
class ServiceRequestAdmin(admin.ModelAdmin):
    list_display = ('user_name', 'service', 'status', 'created_at')
    list_filter = ('status',)

@admin.register(Booking)
class BookingAdmin(admin.ModelAdmin):
    list_display = ('full_name', 'consultation_date', 'status', 'created_at')
    list_filter = ('status', 'consultation_date')

@admin.register(SiteSetting)
class SiteSettingAdmin(admin.ModelAdmin):
    def has_add_permission(self, request):
        return not SiteSetting.objects.exists()

@admin.register(WhyChooseUs)
class WhyChooseUsAdmin(admin.ModelAdmin):
    list_display = ('title', 'order')

@admin.register(OurProcess)
class OurProcessAdmin(admin.ModelAdmin):
    list_display = ('title', 'order')

@admin.register(Testimonial)
class TestimonialAdmin(admin.ModelAdmin):
    list_display = ('name', 'role', 'rating', 'is_active', 'order')
    list_filter = ('is_active', 'rating')
