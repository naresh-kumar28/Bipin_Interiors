import React, { createContext, useState, useEffect, useContext } from 'react';
import api from '../api/api';

const SiteContext = createContext();

export const useSiteSettings = () => useContext(SiteContext);

export const SiteProvider = ({ children }) => {
  const [settings, setSettings] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchSettings = async () => {
    try {
      const response = await api.get('settings/');
      setSettings(response.data);
      console.log(response.data);
      // Apply primary color to root CSS variable
      if (response.data.primary_color) {
        document.documentElement.style.setProperty('--primary', response.data.primary_color);
      }

      // Generate Dynamic Manifest
      const manifestData = {
        short_name: response.data.website_name || "Bipin Decor",
        name: response.data.seo_title || response.data.website_name || "Bipin Interior",
        description: response.data.seo_description || response.data.footer_description || "",
        start_url: "/",
        display: "standalone",
        theme_color: response.data.primary_color || "#C5A059",
        background_color: "#ffffff",
        icons: [
          {
            src: response.data.favicon || "/favicon.svg",
            sizes: "64x64 32x32 24x24 16x16",
            type: "image/svg+xml"
          },
          {
            src: response.data.favicon || "/favicon.svg",
            sizes: "512x512",
            type: "image/svg+xml",
            purpose: "any maskable"
          }
        ]
      };

      const stringManifest = JSON.stringify(manifestData);
      const blob = new Blob([stringManifest], { type: 'application/json' });
      const manifestURL = URL.createObjectURL(blob);
      const manifestLink = document.querySelector('link[rel="manifest"]');
      if (manifestLink) {
        manifestLink.setAttribute('href', manifestURL);
      }

    } catch (err) {
      console.error("Failed to load site settings:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSettings();
  }, []);

  return (
    <SiteContext.Provider value={{ settings, loading, fetchSettings }}>
      {children}
    </SiteContext.Provider>
  );
};
