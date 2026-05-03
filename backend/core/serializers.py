from rest_framework import serializers
from django.contrib.auth.models import User
from .models import Category, Project, ProjectRequest, ProjectReview, Service, ServiceRequest, Booking, SiteSetting

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'email', 'first_name', 'last_name')

class RegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'email', 'password', 'first_name', 'last_name')
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        user = User.objects.create_user(
            validated_data['username'],
            validated_data['email'],
            validated_data['password'],
            first_name=validated_data.get('first_name', ''),
            last_name=validated_data.get('last_name', '')
        )
        return user

class CategorySerializer(serializers.ModelSerializer):
    project_images = serializers.SerializerMethodField()

    class Meta:
        model = Category
        fields = '__all__'

    def get_project_images(self, obj):
        projects = obj.projects.all()[:4]
        request = self.context.get('request')
        images = []
        for p in projects:
            if p.image:
                if request:
                    images.append(request.build_absolute_uri(p.image.url))
                else:
                    images.append(p.image.url)
        return images

class ServiceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Service
        fields = '__all__'

class ProjectReviewSerializer(serializers.ModelSerializer):
    project_title = serializers.ReadOnlyField(source='project.title')
    
    class Meta:
        model = ProjectReview
        fields = '__all__'

class ProjectSerializer(serializers.ModelSerializer):
    category_name = serializers.ReadOnlyField(source='category.name')
    category_slug = serializers.ReadOnlyField(source='category.slug')
    reviews = ProjectReviewSerializer(many=True, read_only=True)
    
    class Meta:
        model = Project
        fields = '__all__'

class ProjectRequestSerializer(serializers.ModelSerializer):
    project_title = serializers.ReadOnlyField(source='project.title')
    project_image = serializers.ImageField(source='project.image', read_only=True)
    
    class Meta:
        model = ProjectRequest
        fields = '__all__'

class ServiceRequestSerializer(serializers.ModelSerializer):
    service_title = serializers.ReadOnlyField(source='service.title')
    
    class Meta:
        model = ServiceRequest
        fields = '__all__'

class BookingSerializer(serializers.ModelSerializer):
    service_name = serializers.ReadOnlyField(source='service_interested.title')
    
    class Meta:
        model = Booking
        fields = '__all__'

class SiteSettingSerializer(serializers.ModelSerializer):
    class Meta:
        model = SiteSetting
        fields = '__all__'
