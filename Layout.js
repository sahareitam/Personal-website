import React from 'react';
import Navigation from './components/portfolio/Navigation';

export default function Layout({ children }) {
  return (
    <div className="portfolio-layout">
      <Navigation />
      <main>{children}</main>
      <footer>
        <p>© {new Date().getFullYear()} Sahar Eitam. All rights reserved.</p>
      </footer>
    </div>
  );
}