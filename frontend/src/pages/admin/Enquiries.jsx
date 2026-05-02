import React from 'react';
import AdminLayout from '../../components/admin/AdminLayout';

function Enquiries() {
  const enquiries = [
    {
      id: 1,
      name: 'Amit Sharma',
      phone: '+91 98765 43210',
      email: 'amit@example.com',
      service: 'False Ceiling',
      source: 'WhatsApp',
      sourceIcon: 'lucide:phone',
      sourceClass: 'bg-green-50 text-green-700 border-green-200',
      date: 'Oct 12, 2023',
      time: '10:30 AM',
      status: 'New',
      statusClass: 'bg-blue-100 text-blue-700'
    },
    {
      id: 2,
      name: 'Priya Kapoor',
      phone: '+91 87654 32109',
      email: 'priya.k@example.com',
      service: 'PVC Paneling',
      source: 'Website Form',
      sourceIcon: 'lucide:globe',
      sourceClass: 'bg-blue-50 text-blue-700 border-blue-200',
      date: 'Oct 11, 2023',
      time: '02:15 PM',
      status: 'Contacted',
      statusClass: 'bg-yellow-100 text-yellow-700'
    },
    {
      id: 3,
      name: 'Rahul Mehta',
      phone: '+91 76543 21098',
      email: 'rahul.m@example.com',
      service: 'UV Marble Sheet',
      source: 'Phone Call',
      sourceIcon: 'lucide:phone-call',
      sourceClass: 'bg-purple-50 text-purple-700 border-purple-200',
      date: 'Oct 10, 2023',
      time: '09:45 AM',
      status: 'In Progress',
      statusClass: 'bg-purple-100 text-purple-700'
    },
    {
      id: 4,
      name: 'Sneha Verma',
      phone: '+91 65432 10987',
      email: 'sneha.v@example.com',
      service: 'WPC Louvers',
      source: 'Website Form',
      sourceIcon: 'lucide:globe',
      sourceClass: 'bg-blue-50 text-blue-700 border-blue-200',
      date: 'Oct 09, 2023',
      time: '04:20 PM',
      status: 'Converted',
      statusClass: 'bg-green-100 text-green-700'
    }
  ];

  return (
    <AdminLayout title="Enquiries Management">
      <div className="space-y-6">
        {/* Header & Actions */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-2xl font-heading font-bold text-foreground">Customer Enquiries</h2>
            <p className="text-muted-foreground text-sm mt-1">Manage and track all leads and messages.</p>
          </div>
          <div className="flex items-center gap-3">
            <button className="px-4 py-2 bg-card border border-border text-foreground rounded-lg shadow-sm hover:bg-muted font-medium text-sm flex items-center gap-2 transition-colors">
              <iconify-icon icon="lucide:download"></iconify-icon>
              Export CSV
            </button>
            <button className="px-4 py-2 bg-primary text-primary-foreground rounded-lg shadow-md hover:bg-secondary font-medium text-sm flex items-center gap-2 transition-colors">
              <iconify-icon icon="lucide:plus"></iconify-icon>
              Add Enquiry
            </button>
          </div>
        </div>

        {/* Filters Bar */}
        <div className="bg-card rounded-xl border border-border p-4 shadow-sm flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="relative w-full md:w-80">
            <iconify-icon icon="lucide:search" class="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"></iconify-icon>
            <input 
              type="text" 
              placeholder="Search name, phone, or email..." 
              className="w-full pl-9 pr-4 py-2 bg-background border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary" 
            />
          </div>
          
          <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
            <select className="px-3 py-2 bg-background border border-border rounded-lg text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary min-w-[140px]">
              <option value="">All Services</option>
              <option value="uv">UV Marble Sheet</option>
              <option value="pvc">PVC Paneling</option>
              <option value="ceiling">False Ceiling</option>
              <option value="louver">WPC Louvers</option>
            </select>
            
            <select className="px-3 py-2 bg-background border border-border rounded-lg text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary min-w-[140px]">
              <option value="">All Statuses</option>
              <option value="new">New</option>
              <option value="contacted">Contacted</option>
              <option value="progress">In Progress</option>
              <option value="converted">Converted</option>
              <option value="rejected">Rejected</option>
            </select>
            
            <button className="p-2 bg-background border border-border text-muted-foreground rounded-lg hover:text-foreground hover:bg-muted transition-colors" title="Filter by Date">
              <iconify-icon icon="lucide:calendar"></iconify-icon>
            </button>
          </div>
        </div>

        {/* Data Table */}
        <div className="bg-card rounded-xl border border-border shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm whitespace-nowrap">
              <thead className="bg-muted/50 text-muted-foreground border-b border-border">
                <tr>
                  <th className="px-6 py-4 font-medium w-10">
                    <input type="checkbox" className="rounded border-border text-primary focus:ring-primary" />
                  </th>
                  <th className="px-6 py-4 font-medium">Customer Details</th>
                  <th className="px-6 py-4 font-medium">Service Interested</th>
                  <th className="px-6 py-4 font-medium">Source</th>
                  <th className="px-6 py-4 font-medium">Date</th>
                  <th className="px-6 py-4 font-medium">Status</th>
                  <th className="px-6 py-4 font-medium text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {enquiries.map((enquiry) => (
                  <tr key={enquiry.id} className="hover:bg-muted/30 transition-colors">
                    <td className="px-6 py-4">
                      <input type="checkbox" className="rounded border-border text-primary focus:ring-primary" />
                    </td>
                    <td className="px-6 py-4">
                      <p className="font-semibold text-foreground">{enquiry.name}</p>
                      <p className="text-xs text-muted-foreground mt-0.5">{enquiry.phone}</p>
                      <p className="text-xs text-muted-foreground">{enquiry.email}</p>
                    </td>
                    <td className="px-6 py-4 text-foreground font-medium">{enquiry.service}</td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-medium border ${enquiry.sourceClass}`}>
                        <iconify-icon icon={enquiry.sourceIcon}></iconify-icon> {enquiry.source}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-muted-foreground">{enquiry.date}<br /><span className="text-xs">{enquiry.time}</span></td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium ${enquiry.statusClass}`}>{enquiry.status}</span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <button className="p-1.5 text-muted-foreground hover:text-primary transition-colors bg-background rounded border border-border" title="WhatsApp">
                          <iconify-icon icon="lucide:message-circle"></iconify-icon>
                        </button>
                        <button className="p-1.5 text-muted-foreground hover:text-primary transition-colors bg-background rounded border border-border" title="View Details">
                          <iconify-icon icon="lucide:eye"></iconify-icon>
                        </button>
                        <button className="p-1.5 text-muted-foreground hover:text-destructive transition-colors bg-background rounded border border-border" title="Delete">
                          <iconify-icon icon="lucide:trash-2"></iconify-icon>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          {/* Pagination */}
          <div className="px-6 py-4 border-t border-border flex items-center justify-between bg-card">
            <span className="text-sm text-muted-foreground">Showing 1 to 4 of 124 entries</span>
            <div className="flex items-center gap-1">
              <button className="px-3 py-1 border border-border rounded text-sm text-muted-foreground hover:bg-muted disabled:opacity-50" disabled>Prev</button>
              <button className="px-3 py-1 border border-primary bg-primary text-primary-foreground rounded text-sm font-medium">1</button>
              <button className="px-3 py-1 border border-border rounded text-sm text-foreground hover:bg-muted">2</button>
              <button className="px-3 py-1 border border-border rounded text-sm text-foreground hover:bg-muted">3</button>
              <span className="px-2 text-muted-foreground">...</span>
              <button className="px-3 py-1 border border-border rounded text-sm text-foreground hover:bg-muted">12</button>
              <button className="px-3 py-1 border border-border rounded text-sm text-foreground hover:bg-muted">Next</button>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}

export default Enquiries;
