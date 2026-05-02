import React, { useEffect, useRef } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import AdminLayout from '../../components/admin/AdminLayout';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

function Dashboard() {
  const chartData = {
    labels: ['May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
    datasets: [
      {
        label: 'Website Forms',
        data: [45, 52, 68, 74, 90, 110],
        borderColor: '#D97706',
        backgroundColor: 'rgba(217, 119, 6, 0.1)',
        borderWidth: 2,
        fill: true,
        tension: 0.4,
      },
      {
        label: 'WhatsApp Leads',
        data: [30, 45, 55, 80, 105, 140],
        borderColor: '#C9A24D',
        backgroundColor: 'transparent',
        borderWidth: 2,
        borderDash: [5, 5],
        tension: 0.4,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          usePointStyle: true,
          boxWidth: 8,
          font: { family: 'Inter', size: 12 },
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: { color: '#EAE5DC', drawBorder: false },
      },
      x: {
        grid: { display: false, drawBorder: false },
      },
    },
  };

  return (
    <AdminLayout title="Dashboard Overview">
      <div className="space-y-6">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          <div className="bg-card rounded-xl p-5 shadow-sm border border-border flex items-start justify-between">
            <div>
              <p className="text-muted-foreground text-sm font-medium mb-1">Total Enquiries</p>
              <h3 className="text-2xl font-heading font-bold text-foreground">1,248</h3>
              <p className="text-xs font-medium mt-2 flex items-center gap-1">
                <span className="text-green-500 flex items-center"><iconify-icon icon="lucide:arrow-up-right"></iconify-icon> 12%</span> vs last month
              </p>
            </div>
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
              <iconify-icon icon="lucide:message-square" class="text-xl"></iconify-icon>
            </div>
          </div>

          <div className="bg-card rounded-xl p-5 shadow-sm border border-border flex items-start justify-between">
            <div>
              <p className="text-muted-foreground text-sm font-medium mb-1">New Leads</p>
              <h3 className="text-2xl font-heading font-bold text-foreground">42</h3>
              <p className="text-xs font-medium mt-2 flex items-center gap-1">
                <span className="text-green-500 flex items-center"><iconify-icon icon="lucide:arrow-up-right"></iconify-icon> 8%</span> vs last month
              </p>
            </div>
            <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center text-secondary">
              <iconify-icon icon="lucide:users" class="text-xl"></iconify-icon>
            </div>
          </div>

          <div className="bg-card rounded-xl p-5 shadow-sm border border-border flex items-start justify-between">
            <div>
              <p className="text-muted-foreground text-sm font-medium mb-1">Pending Bookings</p>
              <h3 className="text-2xl font-heading font-bold text-foreground">18</h3>
              <p className="text-xs font-medium mt-2 flex items-center gap-1">
                <span className="text-red-500 flex items-center"><iconify-icon icon="lucide:arrow-down-right"></iconify-icon> 3%</span> vs last month
              </p>
            </div>
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
              <iconify-icon icon="lucide:calendar-clock" class="text-xl"></iconify-icon>
            </div>
          </div>

          <div className="bg-card rounded-xl p-5 shadow-sm border border-border flex items-start justify-between">
            <div>
              <p className="text-muted-foreground text-sm font-medium mb-1">WhatsApp Clicks</p>
              <h3 className="text-2xl font-heading font-bold text-foreground">356</h3>
              <p className="text-xs font-medium mt-2 flex items-center gap-1">
                <span className="text-green-500 flex items-center"><iconify-icon icon="lucide:arrow-up-right"></iconify-icon> 24%</span> vs last month
              </p>
            </div>
            <div className="w-10 h-10 rounded-lg bg-green-500/10 flex items-center justify-center text-green-600">
              <iconify-icon icon="lucide:phone" class="text-xl"></iconify-icon>
            </div>
          </div>
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="bg-card rounded-xl border border-border shadow-sm lg:col-span-2 p-5">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-heading font-semibold text-foreground">Monthly Enquiries</h3>
              <select className="text-sm bg-background border border-border rounded-md px-2 py-1 text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary">
                <option>Last 6 Months</option>
                <option>This Year</option>
              </select>
            </div>
            <div className="h-64 w-full">
              <Line data={chartData} options={chartOptions} />
            </div>
          </div>

          <div className="bg-card rounded-xl border border-border shadow-sm p-5 flex flex-col">
            <h3 className="font-heading font-semibold text-foreground mb-4">Quick Actions</h3>
            <div className="space-y-3 flex-1">
              <button className="w-full flex items-center gap-3 p-3 rounded-lg border border-border hover:border-primary hover:bg-primary/5 transition-colors text-left group">
                <div className="w-8 h-8 rounded bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <iconify-icon icon="lucide:plus"></iconify-icon>
                </div>
                <div>
                  <p className="font-medium text-sm text-foreground">Add New Service</p>
                  <p className="text-xs text-muted-foreground">Create a new offering</p>
                </div>
              </button>
              <button className="w-full flex items-center gap-3 p-3 rounded-lg border border-border hover:border-primary hover:bg-primary/5 transition-colors text-left group">
                <div className="w-8 h-8 rounded bg-secondary/10 text-secondary flex items-center justify-center group-hover:bg-secondary group-hover:text-secondary-foreground transition-colors">
                  <iconify-icon icon="lucide:image"></iconify-icon>
                </div>
                <div>
                  <p className="font-medium text-sm text-foreground">Add Portfolio Project</p>
                  <p className="text-xs text-muted-foreground">Upload new gallery images</p>
                </div>
              </button>
              <button className="w-full flex items-center gap-3 p-3 rounded-lg border border-border hover:border-primary hover:bg-primary/5 transition-colors text-left group">
                <div className="w-8 h-8 rounded bg-green-500/10 text-green-600 flex items-center justify-center group-hover:bg-green-500 group-hover:text-white transition-colors">
                  <iconify-icon icon="lucide:message-circle"></iconify-icon>
                </div>
                <div>
                  <p className="font-medium text-sm text-foreground">View New Enquiries</p>
                  <p className="text-xs text-muted-foreground">12 unread messages</p>
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Tables Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-card rounded-xl border border-border shadow-sm overflow-hidden">
            <div className="p-5 border-b border-border flex items-center justify-between">
              <h3 className="font-heading font-semibold text-foreground">Recent Enquiries</h3>
              <a href="#" className="text-sm font-medium text-primary hover:text-secondary">View All</a>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead className="bg-muted/50 text-muted-foreground">
                  <tr>
                    <th className="px-5 py-3 font-medium">Customer</th>
                    <th className="px-5 py-3 font-medium">Service</th>
                    <th className="px-5 py-3 font-medium">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr className="hover:bg-muted/30 transition-colors">
                    <td className="px-5 py-3">
                      <p className="font-medium text-foreground">Amit Sharma</p>
                      <p className="text-xs text-muted-foreground">2 hours ago</p>
                    </td>
                    <td className="px-5 py-3 text-foreground">False Ceiling</td>
                    <td className="px-5 py-3">
                      <span className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-blue-100 text-blue-700">New</span>
                    </td>
                  </tr>
                  <tr className="hover:bg-muted/30 transition-colors">
                    <td className="px-5 py-3">
                      <p className="font-medium text-foreground">Priya Kapoor</p>
                      <p className="text-xs text-muted-foreground">5 hours ago</p>
                    </td>
                    <td className="px-5 py-3 text-foreground">PVC Paneling</td>
                    <td className="px-5 py-3">
                      <span className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-yellow-100 text-yellow-700">Contacted</span>
                    </td>
                  </tr>
                  <tr className="hover:bg-muted/30 transition-colors">
                    <td className="px-5 py-3">
                      <p className="font-medium text-foreground">Rahul Mehta</p>
                      <p className="text-xs text-muted-foreground">Yesterday</p>
                    </td>
                    <td className="px-5 py-3 text-foreground">UV Marble Sheet</td>
                    <td className="px-5 py-3">
                      <span className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-purple-100 text-purple-700">In Progress</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="bg-card rounded-xl border border-border shadow-sm overflow-hidden">
            <div className="p-5 border-b border-border flex items-center justify-between">
              <h3 className="font-heading font-semibold text-foreground">Recent Bookings</h3>
              <a href="#" className="text-sm font-medium text-primary hover:text-secondary">View All</a>
            </div>
            <ul className="divide-y divide-border">
              <li className="p-4 hover:bg-muted/30 transition-colors flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0 mt-1">
                  <iconify-icon icon="lucide:map-pin"></iconify-icon>
                </div>
                <div>
                  <p className="font-medium text-foreground">Site visit for UV Marble Sheet</p>
                  <p className="text-sm text-muted-foreground mt-0.5">Tomorrow, 10:00 AM • Assigned to: Ravi</p>
                </div>
              </li>
              <li className="p-4 hover:bg-muted/30 transition-colors flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center text-secondary shrink-0 mt-1">
                  <iconify-icon icon="lucide:users"></iconify-icon>
                </div>
                <div>
                  <p className="font-medium text-foreground">Consultation for Bedroom Interior</p>
                  <p className="text-sm text-muted-foreground mt-0.5">Oct 15, 2:30 PM • Assigned to: Bipin</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}

export default Dashboard;
