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
  const storeButtons = document.querySelectorAll('.btn-store');
  storeButtons.forEach(button => {
    if (!(button instanceof HTMLAnchorElement) || !button.href) {
      return;
    }
    button.addEventListener('click', () => {
      logEvent(analytics, 'select_content', {
        content_type: 'play_store_link',
        content_id: button.href
      });
    });
  });
});
