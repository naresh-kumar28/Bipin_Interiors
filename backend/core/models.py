from django.db import models

class Category(models.Model):
    name = models.CharField(max_length=100, unique=True)
    slug = models.SlugField(max_length=100, unique=True, blank=True)
    description = models.TextField(blank=True, null=True)
    image = models.ImageField(upload_to='categories/', blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def save(self, *args, **kwargs):
        if not self.slug:
            from django.utils.text import slugify
            self.slug = slugify(self.name)
        super().save(*args, **kwargs)

    def __str__(self):
        return self.name

    class Meta:
        verbose_name_plural = "Categories"
        ordering = ['-created_at']

class Service(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField()
    features = models.TextField(help_text="Enter features separated by new lines", blank=True)
    image = models.ImageField(upload_to='services/')
    icon = models.CharField(max_length=50, default='lucide:grid-3x3', help_text="Iconify icon name")
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title

class Project(models.Model):
    title = models.CharField(max_length=200)
    category = models.ForeignKey(Category, on_delete=models.CASCADE, related_name='projects')
    image = models.ImageField(upload_to='projects/')
    description = models.TextField(blank=True)
    rating = models.DecimalField(max_digits=3, decimal_places=2, default=0.0)
    rating_count = models.IntegerField(default=0)
    created_at = models.DateTimeField(auto_now_add=True)

    def recalculate_rating(self):
        reviews = self.reviews.all()
        count = reviews.count()
        if count > 0:
            from django.db.models import Avg
            average = reviews.aggregate(Avg('rating'))['rating__avg']
            self.rating = average
            self.rating_count = count
        else:
            self.rating = 0
            self.rating_count = 0
        self.save()

    def __str__(self):
        return self.title

class ProjectRequest(models.Model):
    project = models.ForeignKey(Project, on_delete=models.CASCADE, related_name='requests')
    user_name = models.CharField(max_length=100)
    user_email = models.EmailField()
    user_phone = models.CharField(max_length=15)
    message = models.TextField(blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    status = models.CharField(max_length=20, default='Pending') # Pending, Contacted, Completed

    def __str__(self):
        return f"Request for {self.project.title} by {self.user_name}"

class ServiceRequest(models.Model):
    service = models.ForeignKey(Service, on_delete=models.CASCADE, related_name='requests')
    user_name = models.CharField(max_length=100)
    user_email = models.EmailField()
    user_phone = models.CharField(max_length=15)
    requirements = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    status = models.CharField(max_length=20, default='Pending') # Pending, Contacted, Completed

    def __str__(self):
        return f"Quote for {self.service.title} by {self.user_name}"

class Booking(models.Model):
    full_name = models.CharField(max_length=100)
    email = models.EmailField()
    phone = models.CharField(max_length=15)
    address = models.TextField()
    consultation_date = models.DateField()
    consultation_time = models.CharField(max_length=20)
    service_interested = models.ForeignKey(Service, on_delete=models.SET_NULL, null=True, blank=True)
    message = models.TextField(blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    status = models.CharField(max_length=20, default='Pending') # Pending, Confirmed, Cancelled

    def __str__(self):
        return f"Booking by {self.full_name} on {self.consultation_date}"

class ProjectReview(models.Model):
    project = models.ForeignKey(Project, on_delete=models.CASCADE, related_name='reviews')
    user_name = models.CharField(max_length=100)
    rating = models.IntegerField(default=5)
    comment = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Review for {self.project.title} by {self.user_name}"

class SiteSetting(models.Model):
    # General
    website_name = models.CharField(max_length=100, default='Bipin Decor')
    footer_description = models.TextField(blank=True, default='Premium interior decoration and home renovation services specializing in UV Marble Sheets, PVC Paneling, and False Ceilings.')
    logo = models.ImageField(upload_to='settings/', blank=True, null=True)
    favicon = models.ImageField(upload_to='settings/', blank=True, null=True)
    maintenance_mode = models.BooleanField(default=False)
    
    # Contact
    contact_email = models.EmailField(blank=True, default='info@bipindecor.com')
    contact_phone = models.CharField(max_length=20, blank=True, default='+91 9876543210')
    contact_address = models.TextField(blank=True, default='123 Decor Street, City')
    
    # Social & WhatsApp
    whatsapp_number = models.CharField(max_length=20, blank=True)
    whatsapp_message = models.CharField(max_length=200, blank=True, default='Hi Bipin Decor, I need a consultation.')
    facebook_url = models.URLField(blank=True)
    instagram_url = models.URLField(blank=True)
    youtube_url = models.URLField(blank=True)
    
    # SEO
    seo_title = models.CharField(max_length=100, blank=True, default='Bipin Interior | Premium Decor Studio')
    seo_description = models.TextField(blank=True)
    seo_keywords = models.TextField(blank=True)
    
    # Theme
    primary_color = models.CharField(max_length=20, blank=True, default='#C5A059')

    def save(self, *args, **kwargs):
        # Enforce singleton
        self.pk = 1
        super().save(*args, **kwargs)

    def delete(self, *args, **kwargs):
        pass # Prevent deletion

    def __str__(self):
        return "Site Settings"

    class Meta:
        verbose_name_plural = "Site Settings"
