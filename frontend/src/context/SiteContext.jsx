import React, { createContext, useState, useEffect, useContext } from 'react';
import api from '../api/api';

const SiteContext = createContext();

export const useSiteSettings = () => useContext(SiteContext);

export const SiteProvider = ({ children }) => {
  const [settings, setSettings] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSettings = async () => {
      try {
        const response = await api.get('settings/');
        setSettings(response.data);
        
        // Apply primary color to root CSS variable
        if (response.data.primary_color) {
          document.documentElement.style.setProperty('--primary', response.data.primary_color);
        }

        // Apply SEO Settings dynamically
        if (response.data.seo_title) {
          document.title = response.data.seo_title;
        }
        
        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc && response.data.seo_description) {
          metaDesc.setAttribute("content", response.data.seo_description);
        }

        // Apply Favicon
        if (response.data.favicon) {
          let link = document.querySelector("link[rel~='icon']");
          if (!link) {
            link = document.createElement('link');
            link.rel = 'icon';
            document.head.appendChild(link);
          }
          link.href = response.data.favicon;
        }

      } catch (err) {
        console.error("Failed to load site settings:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchSettings();
  }, []);

  return (
    <SiteContext.Provider value={{ settings, loading }}>
      {children}
    </SiteContext.Provider>
  );
};
