import React from 'react';
import AdminLayout from '../../components/admin/AdminLayout';

function AdminSettings() {
  return (
    <AdminLayout title="Website Settings">
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-2xl font-heading font-bold text-foreground">Global Configuration</h2>
            <p className="text-muted-foreground text-sm mt-1">Update brand assets, contact info, and integrations.</p>
          </div>
          <button className="px-5 py-2.5 bg-primary text-primary-foreground rounded-lg shadow-md hover:bg-secondary font-medium text-sm flex items-center gap-2 transition-colors">
            <iconify-icon icon="lucide:save"></iconify-icon>
            Save All Changes
          </button>
        </div>

        <div className="bg-card rounded-xl border border-border shadow-sm flex flex-col md:flex-row overflow-hidden min-h-[600px]">
          {/* Settings Navigation */}
          <div className="w-full md:w-64 bg-muted/20 border-b md:border-b-0 md:border-r border-border p-4 flex flex-row md:flex-col gap-2 overflow-x-auto md:overflow-x-visible shrink-0">
            <button className="flex items-center gap-3 px-4 py-3 rounded-lg bg-primary text-primary-foreground font-medium text-sm text-left whitespace-nowrap md:whitespace-normal">
              <iconify-icon icon="lucide:globe" class="text-lg"></iconify-icon>
              General Settings
            </button>
            <button className="flex items-center gap-3 px-4 py-3 rounded-lg text-muted-foreground hover:bg-muted hover:text-foreground font-medium text-sm text-left transition-colors whitespace-nowrap md:whitespace-normal">
              <iconify-icon icon="lucide:map-pin" class="text-lg"></iconify-icon>
              Contact Information
            </button>
            <button className="flex items-center gap-3 px-4 py-3 rounded-lg text-muted-foreground hover:bg-muted hover:text-foreground font-medium text-sm text-left transition-colors whitespace-nowrap md:whitespace-normal">
              <iconify-icon icon="lucide:share-2" class="text-lg"></iconify-icon>
              Social Media
            </button>
            <button className="flex items-center gap-3 px-4 py-3 rounded-lg text-muted-foreground hover:bg-muted hover:text-foreground font-medium text-sm text-left transition-colors whitespace-nowrap md:whitespace-normal">
              <iconify-icon icon="lucide:search" class="text-lg"></iconify-icon>
              SEO Settings
            </button>
            <button className="flex items-center gap-3 px-4 py-3 rounded-lg text-muted-foreground hover:bg-muted hover:text-foreground font-medium text-sm text-left transition-colors whitespace-nowrap md:whitespace-normal">
              <iconify-icon icon="lucide:message-circle" class="text-lg"></iconify-icon>
              WhatsApp Settings
            </button>
            <button className="flex items-center gap-3 px-4 py-3 rounded-lg text-muted-foreground hover:bg-muted hover:text-foreground font-medium text-sm text-left transition-colors whitespace-nowrap md:whitespace-normal">
              <iconify-icon icon="lucide:palette" class="text-lg"></iconify-icon>
              Theme Settings
            </button>
          </div>

          {/* Settings Content Form */}
          <div className="flex-1 p-6 md:p-8">
            <h3 className="text-lg font-heading font-semibold text-foreground mb-6">General Settings</h3>
            
            <form className="space-y-6 max-w-2xl">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Website Name</label>
                <input 
                  type="text" 
                  defaultValue="Bipin Decor" 
                  className="w-full px-4 py-2.5 bg-background border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary" 
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Logo Upload</label>
                  <div className="border-2 border-dashed border-border rounded-lg p-6 flex flex-col items-center justify-center bg-muted/30 hover:bg-muted/50 transition-colors cursor-pointer group">
                    <div className="w-12 h-12 rounded-full bg-background flex items-center justify-center text-primary mb-3 shadow-sm group-hover:scale-110 transition-transform">
                      <iconify-icon icon="lucide:upload-cloud" class="text-xl"></iconify-icon>
                    </div>
                    <span className="text-sm font-medium text-foreground">Click to upload logo</span>
                    <span className="text-xs text-muted-foreground mt-1">PNG, JPG up to 2MB</span>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Favicon Upload</label>
                  <div className="border-2 border-dashed border-border rounded-lg p-6 flex flex-col items-center justify-center bg-muted/30 hover:bg-muted/50 transition-colors cursor-pointer group">
                    <div className="w-12 h-12 rounded-full bg-background flex items-center justify-center text-primary mb-3 shadow-sm group-hover:scale-110 transition-transform">
                      <iconify-icon icon="lucide:upload-cloud" class="text-xl"></iconify-icon>
                    </div>
                    <span className="text-sm font-medium text-foreground">Click to upload favicon</span>
                    <span className="text-xs text-muted-foreground mt-1">ICO, PNG (32x32)</span>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Footer Description</label>
                <textarea 
                  rows="4" 
                  defaultValue="Premium interior decoration and home renovation services specializing in UV Marble Sheets, PVC Paneling, and False Ceilings."
                  className="w-full px-4 py-2.5 bg-background border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                ></textarea>
                <p className="text-xs text-muted-foreground mt-1">This text appears in the website footer.</p>
              </div>
              
              <div className="pt-4 border-t border-border">
                <h4 className="text-sm font-heading font-semibold text-foreground mb-4">Maintenance Mode</h4>
                <div className="flex items-center justify-between p-4 border border-border rounded-lg bg-background">
                  <div>
                    <p className="font-medium text-foreground text-sm">Enable Maintenance Mode</p>
                    <p className="text-xs text-muted-foreground mt-0.5">Show a "coming soon" page to visitors.</p>
                  </div>
                  <label className="flex items-center cursor-pointer">
                    <div className="relative">
                      <input type="checkbox" className="sr-only" />
                      <div className="block bg-muted w-10 h-6 rounded-full"></div>
                      <div className="dot absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition-transform"></div>
                    </div>
                  </label>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}

export default AdminSettings;
