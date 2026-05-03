import { initializeApp } from "https://www.gstatic.com/firebasejs/12.12.0/firebase-app.js";
import { getAnalytics, logEvent } from "https://www.gstatic.com/firebasejs/12.12.0/firebase-analytics.js";

const firebaseConfig = {
  apiKey: "AIzaSyD2k-5dJgc7Ig7Pq6h4ecCs8P_MMuLAlps",
  authDomain: "moonsail-website-9ca0a.firebaseapp.com",
  projectId: "moonsail-website-9ca0a",
  storageBucket: "moonsail-website-9ca0a.firebasestorage.app",
  messagingSenderId: "850683179818",
  appId: "1:850683179818:web:5b39e1020ef4fde2aa2453",
  measurementId: "G-C6MF0SFC63"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Track clicks on Play Store buttons
document.addEventListener('DOMContentLoaded', () => {
  // Use event delegation to catch all clicks on Play Store links
  document.addEventListener('click', (event) => {
    const link = event.target.closest('a');
    if (!link || !link.href) return;

    // Check if it's a Play Store link
    if (link.href.includes('play.google.com/store/apps/details?id=')) {
      const url = new URL(link.href);
      const appId = url.searchParams.get('id');
      
      if (appId) {
        logEvent(analytics, 'play_store_click', {
          app_id: appId,
          link_url: link.href,
          link_text: link.innerText.trim() || 'icon'
        });
        
        // Also keep the generic select_content for backward compatibility/standard reporting
        logEvent(analytics, 'select_content', {
          content_type: 'play_store_link',
          content_id: appId
        });
      }
    }
  });
});

