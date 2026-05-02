import React from 'react';
import AdminLayout from '../../components/admin/AdminLayout';

function AdminPortfolio() {
  const projects = [
    {
      id: 1,
      title: 'Modern Minimalist Lounge',
      category: 'Living Room',
      location: 'Mumbai',
      date: 'Oct 12, 2023',
      image: 'https://uxmagic.blob.core.windows.net/public/agent-images/portfolio-1-1777707150058-35n26pssw68.png',
      featured: true,
      active: true
    },
    {
      id: 2,
      title: 'Luxury Master Suite',
      category: 'Bedroom',
      location: 'Delhi',
      date: 'Sep 28, 2023',
      image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&q=80',
      featured: false,
      active: true
    },
    {
      id: 3,
      title: 'Modular Open Kitchen',
      category: 'Kitchen',
      location: 'Pune',
      date: 'Sep 15, 2023',
      image: 'https://images.unsplash.com/photo-1556910103-1c02745a872f?w=800&q=80',
      featured: false,
      active: true
    },
    {
      id: 4,
      title: 'Corporate Office Space',
      category: 'Commercial',
      location: 'Bangalore',
      date: 'Aug 30, 2023',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80',
      featured: false,
      active: false
    }
  ];

  return (
    <AdminLayout title="Portfolio Gallery">
      <div className="space-y-6">
        {/* Header & Actions */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-2xl font-heading font-bold text-foreground">Manage Projects</h2>
            <p className="text-muted-foreground text-sm mt-1">Add and organize your interior design portfolio.</p>
          </div>
          <button className="px-4 py-2 bg-primary text-primary-foreground rounded-lg shadow-md hover:bg-secondary font-medium text-sm flex items-center gap-2 transition-colors w-full sm:w-auto justify-center">
            <iconify-icon icon="lucide:plus"></iconify-icon>
            Add New Project
          </button>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap items-center gap-2 bg-card p-2 rounded-xl border border-border">
          <button className="px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-medium">All Projects</button>
          <button className="px-4 py-2 rounded-lg text-muted-foreground hover:bg-muted hover:text-foreground text-sm font-medium transition-colors">Living Room</button>
          <button className="px-4 py-2 rounded-lg text-muted-foreground hover:bg-muted hover:text-foreground text-sm font-medium transition-colors">Bedroom</button>
          <button className="px-4 py-2 rounded-lg text-muted-foreground hover:bg-muted hover:text-foreground text-sm font-medium transition-colors">Kitchen</button>
          <button className="px-4 py-2 rounded-lg text-muted-foreground hover:bg-muted hover:text-foreground text-sm font-medium transition-colors">Commercial</button>
          
          <div className="ml-auto relative w-full sm:w-64 mt-2 sm:mt-0">
            <iconify-icon icon="lucide:search" class="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"></iconify-icon>
            <input 
              type="text" 
              placeholder="Search projects..." 
              className="w-full pl-9 pr-4 py-2 bg-background border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary" 
            />
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {projects.map((project) => (
            <div key={project.id} className="group bg-card rounded-xl border border-border overflow-hidden shadow-sm hover:shadow-md transition-all">
              <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                />
                {project.featured && (
                  <div className="absolute top-3 left-3 flex gap-2">
                    <span className="px-2 py-1 bg-black/60 backdrop-blur-sm text-white text-[10px] font-bold uppercase tracking-wider rounded">Featured</span>
                  </div>
                )}
                {/* Hover Actions */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
                  <button className="w-10 h-10 rounded-full bg-white text-foreground flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors shadow-lg" title="Edit">
                    <iconify-icon icon="lucide:pencil" class="text-lg"></iconify-icon>
                  </button>
                  <button className="w-10 h-10 rounded-full bg-white text-destructive flex items-center justify-center hover:bg-destructive hover:text-white transition-colors shadow-lg" title="Delete">
                    <iconify-icon icon="lucide:trash-2" class="text-lg"></iconify-icon>
                  </button>
                </div>
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-semibold text-primary uppercase tracking-wide">{project.category}</span>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <iconify-icon icon="lucide:map-pin"></iconify-icon> {project.location}
                  </div>
                </div>
                <h3 className="font-heading font-bold text-foreground truncate">{project.title}</h3>
                <div className="flex items-center justify-between mt-4 pt-4 border-t border-border">
                  <span className="text-xs text-muted-foreground">Added: {project.date}</span>
                  <label className="flex items-center cursor-pointer">
                    <div className="relative">
                      <input type="checkbox" className="sr-only" checked={project.active} readOnly />
                      <div className={`block ${project.active ? 'bg-primary' : 'bg-muted'} w-8 h-5 rounded-full transition-colors`}></div>
                      <div className={`dot absolute left-1 top-1 bg-white w-3 h-3 rounded-full transition-transform ${project.active ? 'translate-x-3' : ''}`}></div>
                    </div>
                  </label>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Pagination */}
        <div className="flex justify-center mt-8">
          <div className="flex items-center gap-1">
            <button className="w-8 h-8 flex items-center justify-center rounded-lg border border-border text-muted-foreground hover:bg-muted"><iconify-icon icon="lucide:chevron-left"></iconify-icon></button>
            <button className="w-8 h-8 flex items-center justify-center rounded-lg bg-primary text-primary-foreground font-medium">1</button>
            <button className="w-8 h-8 flex items-center justify-center rounded-lg border border-border text-foreground hover:bg-muted">2</button>
            <button className="w-8 h-8 flex items-center justify-center rounded-lg border border-border text-foreground hover:bg-muted">3</button>
            <button className="w-8 h-8 flex items-center justify-center rounded-lg border border-border text-muted-foreground hover:bg-muted"><iconify-icon icon="lucide:chevron-right"></iconify-icon></button>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}

export default AdminPortfolio;
