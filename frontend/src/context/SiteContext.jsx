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
