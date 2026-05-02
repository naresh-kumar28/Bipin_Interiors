import React, { useState, useEffect } from 'react';
import api from '../../api/api';

function AdminSettings() {
  const [activeTab, setActiveTab] = useState('general');
  const [settings, setSettings] = useState({
    website_name: '',
    footer_description: '',
    maintenance_mode: false,
    contact_email: '',
    contact_phone: '',
    contact_address: '',
    whatsapp_number: '',
    whatsapp_message: '',
    facebook_url: '',
    instagram_url: '',
    youtube_url: '',
    seo_title: '',
    seo_description: '',
    seo_keywords: '',
    primary_color: '#C5A059'
  });
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [saveMessage, setSaveMessage] = useState({ type: '', text: '' });
  
  // Image handling
  const [logoPreview, setLogoPreview] = useState(null);
  const [faviconPreview, setFaviconPreview] = useState(null);
  const [logoFile, setLogoFile] = useState(null);
  const [faviconFile, setFaviconFile] = useState(null);

  useEffect(() => {
    fetchSettings();
  }, []);

  const fetchSettings = async () => {
    try {
      const response = await api.get('settings/');
      setSettings(response.data);
      if (response.data.logo) setLogoPreview(response.data.logo);
      if (response.data.favicon) setFaviconPreview(response.data.favicon);
    } catch (err) {
      console.error("Failed to load settings:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setSettings(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleFileChange = (e, type) => {
    const file = e.target.files[0];
    if (file) {
      if (type === 'logo') {
        setLogoFile(file);
        setLogoPreview(URL.createObjectURL(file));
      } else {
        setFaviconFile(file);
        setFaviconPreview(URL.createObjectURL(file));
      }
    }
  };

  const handleSave = async () => {
    setSaving(true);
    setSaveMessage({ type: '', text: '' });
    try {
      const formData = new FormData();
      
      // Append all text fields
      Object.keys(settings).forEach(key => {
        if (key !== 'logo' && key !== 'favicon' && settings[key] !== null) {
          formData.append(key, settings[key]);
        }
      });
      
      // Append files if new ones selected
      if (logoFile) formData.append('logo', logoFile);
      if (faviconFile) formData.append('favicon', faviconFile);
      
      await api.patch('settings/', formData);
      
      setSaveMessage({ type: 'success', text: 'Settings saved successfully!' });
      setTimeout(() => setSaveMessage({ type: '', text: '' }), 3000);
    } catch (err) {
      console.error("Failed to save settings:", err);
      setSaveMessage({ type: 'error', text: 'Failed to save settings. Please try again.' });
    } finally {
      setSaving(false);
    }
  };

  const tabs = [
    { id: 'general', label: 'General Settings', icon: 'lucide:globe' },
    { id: 'contact', label: 'Contact Information', icon: 'lucide:map-pin' },
    { id: 'social', label: 'Social & WhatsApp', icon: 'lucide:share-2' },
    { id: 'seo', label: 'SEO Settings', icon: 'lucide:search' },
    { id: 'theme', label: 'Theme Settings', icon: 'lucide:palette' },
  ];

  if (loading) {
    return (
      <div className="flex justify-center items-center h-full py-20">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-heading font-bold text-foreground">Global Configuration</h2>
          <p className="text-muted-foreground text-sm mt-1">Update brand assets, contact info, and integrations.</p>
        </div>
        <button 
          onClick={handleSave}
          disabled={saving}
          className="px-5 py-2.5 bg-primary text-primary-foreground rounded-lg shadow-md hover:bg-secondary font-medium text-sm flex items-center gap-2 transition-colors disabled:opacity-50"
        >
          {saving ? (
            <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
          ) : (
            <iconify-icon icon="lucide:save"></iconify-icon>
          )}
          {saving ? 'Saving...' : 'Save All Changes'}
        </button>
      </div>

      {saveMessage.text && (
        <div className={`p-4 rounded-lg text-sm font-bold ${saveMessage.type === 'success' ? 'bg-emerald-100 text-emerald-700' : 'bg-red-100 text-red-700'}`}>
          {saveMessage.text}
        </div>
      )}

      <div className="bg-card rounded-xl border border-border shadow-sm flex flex-col md:flex-row overflow-hidden min-h-[600px]">
        {/* Settings Navigation */}
        <div className="w-full md:w-64 bg-muted/20 border-b md:border-b-0 md:border-r border-border p-4 flex flex-row md:flex-col gap-2 overflow-x-auto md:overflow-x-visible shrink-0">
          {tabs.map(tab => (
            <button 
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg font-medium text-sm text-left transition-colors whitespace-nowrap md:whitespace-normal ${
                activeTab === tab.id 
                  ? 'bg-primary text-primary-foreground' 
                  : 'text-muted-foreground hover:bg-muted hover:text-foreground'
              }`}
            >
              <iconify-icon icon={tab.icon} class="text-lg"></iconify-icon>
              {tab.label}
            </button>
          ))}
        </div>

        {/* Settings Content Form */}
        <div className="flex-1 p-6 md:p-8">
          <h3 className="text-lg font-heading font-semibold text-foreground mb-6">
            {tabs.find(t => t.id === activeTab)?.label}
          </h3>
          
          <div className="space-y-6 max-w-2xl">
            {/* General Settings */}
            {activeTab === 'general' && (
              <>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Website Name</label>
                  <input 
                    type="text" 
                    name="website_name"
                    value={settings.website_name || ''}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2.5 bg-background border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary" 
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Logo Upload</label>
                    <label className="border-2 border-dashed border-border rounded-lg p-6 flex flex-col items-center justify-center bg-muted/30 hover:bg-muted/50 transition-colors cursor-pointer group relative overflow-hidden h-32">
                      <input type="file" className="hidden" accept="image/*" onChange={(e) => handleFileChange(e, 'logo')} />
                      {logoPreview ? (
                        <img src={logoPreview} alt="Logo" className="absolute inset-0 w-full h-full object-contain p-2" />
                      ) : (
                        <>
                          <div className="w-10 h-10 rounded-full bg-background flex items-center justify-center text-primary mb-2 shadow-sm group-hover:scale-110 transition-transform">
                            <iconify-icon icon="lucide:upload-cloud" class="text-xl"></iconify-icon>
                          </div>
                          <span className="text-xs font-medium text-foreground">Upload logo</span>
                        </>
                      )}
                    </label>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Favicon Upload</label>
                    <label className="border-2 border-dashed border-border rounded-lg p-6 flex flex-col items-center justify-center bg-muted/30 hover:bg-muted/50 transition-colors cursor-pointer group relative overflow-hidden h-32">
                      <input type="file" className="hidden" accept="image/*" onChange={(e) => handleFileChange(e, 'favicon')} />
                      {faviconPreview ? (
                        <img src={faviconPreview} alt="Favicon" className="absolute inset-0 w-full h-full object-contain p-2" />
                      ) : (
                        <>
                          <div className="w-10 h-10 rounded-full bg-background flex items-center justify-center text-primary mb-2 shadow-sm group-hover:scale-110 transition-transform">
                            <iconify-icon icon="lucide:upload-cloud" class="text-xl"></iconify-icon>
                          </div>
                          <span className="text-xs font-medium text-foreground">Upload favicon</span>
                        </>
                      )}
                    </label>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Footer Description</label>
                  <textarea 
                    rows="4" 
                    name="footer_description"
                    value={settings.footer_description || ''}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2.5 bg-background border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                  ></textarea>
                </div>
                
                <div className="pt-4 border-t border-border">
                  <div className="flex items-center justify-between p-4 border border-border rounded-lg bg-background">
                    <div>
                      <p className="font-medium text-foreground text-sm">Maintenance Mode</p>
                      <p className="text-xs text-muted-foreground mt-0.5">Show a "coming soon" page to visitors.</p>
                    </div>
                    <label className="flex items-center cursor-pointer relative">
                      <input 
                        type="checkbox" 
                        name="maintenance_mode"
                        checked={settings.maintenance_mode || false}
                        onChange={handleInputChange}
                        className="sr-only peer" 
                      />
                      <div className="w-11 h-6 bg-muted peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                    </label>
                  </div>
                </div>
              </>
            )}

            {/* Contact Information */}
            {activeTab === 'contact' && (
              <>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Public Email Address</label>
                  <input 
                    type="email" 
                    name="contact_email"
                    value={settings.contact_email || ''}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2.5 bg-background border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary" 
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Contact Phone Number</label>
                  <input 
                    type="text" 
                    name="contact_phone"
                    value={settings.contact_phone || ''}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2.5 bg-background border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary" 
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Office Address</label>
                  <textarea 
                    rows="3" 
                    name="contact_address"
                    value={settings.contact_address || ''}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2.5 bg-background border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                  ></textarea>
                </div>
              </>
            )}

            {/* Social & WhatsApp */}
            {activeTab === 'social' && (
              <>
                <div className="p-4 rounded-lg bg-emerald-50 border border-emerald-100 mb-6">
                  <h4 className="font-bold text-emerald-800 text-sm mb-4 flex items-center gap-2">
                    <iconify-icon icon="logos:whatsapp-icon"></iconify-icon>
                    WhatsApp Integration
                  </h4>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-xs font-bold text-emerald-700 uppercase tracking-widest mb-2">WhatsApp Number</label>
                      <input 
                        type="text" 
                        name="whatsapp_number"
                        placeholder="e.g. 919876543210 (include country code)"
                        value={settings.whatsapp_number || ''}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2.5 bg-white border border-emerald-200 rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-emerald-500" 
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-emerald-700 uppercase tracking-widest mb-2">Default Message</label>
                      <input 
                        type="text" 
                        name="whatsapp_message"
                        value={settings.whatsapp_message || ''}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2.5 bg-white border border-emerald-200 rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-emerald-500" 
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Facebook URL</label>
                  <input 
                    type="url" 
                    name="facebook_url"
                    value={settings.facebook_url || ''}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2.5 bg-background border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary" 
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Instagram URL</label>
                  <input 
                    type="url" 
                    name="instagram_url"
                    value={settings.instagram_url || ''}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2.5 bg-background border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary" 
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">YouTube URL</label>
                  <input 
                    type="url" 
                    name="youtube_url"
                    value={settings.youtube_url || ''}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2.5 bg-background border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary" 
                  />
                </div>
              </>
            )}

            {/* SEO Settings */}
            {activeTab === 'seo' && (
              <>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Meta Title</label>
                  <input 
                    type="text" 
                    name="seo_title"
                    value={settings.seo_title || ''}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2.5 bg-background border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary" 
                  />
                  <p className="text-xs text-muted-foreground mt-1">Recommended: 50-60 characters</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Meta Description</label>
                  <textarea 
                    rows="3" 
                    name="seo_description"
                    value={settings.seo_description || ''}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2.5 bg-background border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                  ></textarea>
                  <p className="text-xs text-muted-foreground mt-1">Recommended: 150-160 characters</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Meta Keywords</label>
                  <textarea 
                    rows="2" 
                    name="seo_keywords"
                    placeholder="interior design, modular kitchen, false ceiling"
                    value={settings.seo_keywords || ''}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2.5 bg-background border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                  ></textarea>
                  <p className="text-xs text-muted-foreground mt-1">Separate keywords with commas.</p>
                </div>
              </>
            )}

            {/* Theme Settings */}
            {activeTab === 'theme' && (
              <>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Primary Brand Color</label>
                  <div className="flex items-center gap-4">
                    <input 
                      type="color" 
                      name="primary_color"
                      value={settings.primary_color || '#C5A059'}
                      onChange={handleInputChange}
                      className="w-12 h-12 rounded cursor-pointer border-0 p-0"
                    />
                    <input 
                      type="text" 
                      name="primary_color"
                      value={settings.primary_color || '#C5A059'}
                      onChange={handleInputChange}
                      className="w-32 px-4 py-2 bg-background border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary uppercase" 
                    />
                  </div>
                  <p className="text-xs text-muted-foreground mt-2">This color is used for buttons, links, and highlights across the site.</p>
                </div>
              </>
            )}

          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminSettings;
