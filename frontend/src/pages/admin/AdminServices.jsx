import React from 'react';
import AdminLayout from '../../components/admin/AdminLayout';

function AdminServices() {
  const services = [
    {
      id: 1,
      name: 'UV Marble Sheet Installation',
      description: 'Premium glossy finish wall panels',
      image: 'https://images.unsplash.com/photo-1615873968403-89e068629265?w=200&q=80',
      featured: true,
      active: true,
      updated: 'Oct 10, 2023'
    },
    {
      id: 2,
      name: 'Premium PVC Paneling',
      description: 'Durable and stylish wall cladding',
      image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?w=200&q=80',
      featured: true,
      active: true,
      updated: 'Sep 25, 2023'
    },
    {
      id: 3,
      name: 'Designer False Ceilings',
      description: 'Modern lighting and ceiling designs',
      image: null,
      featured: false,
      active: true,
      updated: 'Sep 12, 2023'
    },
    {
      id: 4,
      name: 'WPC Louver Installation',
      description: 'Wood plastic composite panels',
      image: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=200&q=80',
      featured: false,
      active: false,
      updated: 'Aug 05, 2023'
    }
  ];

  return (
    <AdminLayout title="Service Management">
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-2xl font-heading font-bold text-foreground">Our Services</h2>
            <p className="text-muted-foreground text-sm mt-1">Manage the services displayed on the website.</p>
          </div>
          <button className="px-4 py-2 bg-primary text-primary-foreground rounded-lg shadow-md hover:bg-secondary font-medium text-sm flex items-center gap-2 transition-colors">
            <iconify-icon icon="lucide:plus"></iconify-icon>
            Add New Service
          </button>
        </div>

        <div className="bg-card rounded-xl border border-border shadow-sm overflow-hidden">
          <div className="p-4 border-b border-border bg-muted/30">
            <div className="relative w-full sm:w-80">
              <iconify-icon icon="lucide:search" class="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"></iconify-icon>
              <input 
                type="text" 
                placeholder="Search services..." 
                className="w-full pl-9 pr-4 py-2 bg-background border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary" 
              />
            </div>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm whitespace-nowrap">
              <thead className="bg-muted/50 text-muted-foreground border-b border-border">
                <tr>
                  <th className="px-6 py-4 font-medium w-24">Image</th>
                  <th className="px-6 py-4 font-medium">Service Name</th>
                  <th className="px-6 py-4 font-medium">Featured</th>
                  <th className="px-6 py-4 font-medium">Active</th>
                  <th className="px-6 py-4 font-medium">Last Updated</th>
                  <th className="px-6 py-4 font-medium text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {services.map((service) => (
                  <tr key={service.id} className="hover:bg-muted/30 transition-colors">
                    <td className="px-6 py-4">
                      <div className="w-16 h-12 rounded-lg bg-muted overflow-hidden flex items-center justify-center">
                        {service.image ? (
                          <img src={service.image} className="w-full h-full object-cover" alt={service.name} />
                        ) : (
                          <iconify-icon icon="lucide:image" class="text-xl text-muted-foreground"></iconify-icon>
                        )}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <p className="font-semibold text-foreground">{service.name}</p>
                      <p className="text-xs text-muted-foreground mt-0.5">{service.description}</p>
                    </td>
                    <td className="px-6 py-4">
                      <iconify-icon 
                        icon="lucide:star" 
                        class={`text-lg ${service.featured ? 'text-secondary fill-secondary' : 'text-muted-foreground'}`}
                      ></iconify-icon>
                    </td>
                    <td className="px-6 py-4">
                      <label className="flex items-center cursor-pointer">
                        <div className="relative">
                          <input type="checkbox" className="sr-only" checked={service.active} readOnly />
                          <div className={`block ${service.active ? 'bg-primary' : 'bg-muted'} w-8 h-5 rounded-full transition-colors`}></div>
                          <div className={`dot absolute left-1 top-1 bg-white w-3 h-3 rounded-full transition-transform ${service.active ? 'translate-x-3' : ''}`}></div>
                        </div>
                      </label>
                    </td>
                    <td className="px-6 py-4 text-muted-foreground">{service.updated}</td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <button className="p-1.5 text-muted-foreground hover:text-primary transition-colors bg-background rounded border border-border">
                          <iconify-icon icon="lucide:pencil"></iconify-icon>
                        </button>
                        <button className="p-1.5 text-muted-foreground hover:text-destructive transition-colors bg-background rounded border border-border">
                          <iconify-icon icon="lucide:trash-2"></iconify-icon>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}

export default AdminServices;
