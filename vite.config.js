import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'Index.html'),
        about: resolve(__dirname, 'about.html'),
        checkout: resolve(__dirname, 'checkout.html'),
        collectionsPage2: resolve(__dirname, 'collections-page2.html'),
        collectionsPage3: resolve(__dirname, 'collections-page3.html'),
        collections: resolve(__dirname, 'collections.html'),
        contact: resolve(__dirname, 'contact.html'),
        faq: resolve(__dirname, 'faq.html'),
        policies: resolve(__dirname, 'policies.html'),
        selecteditem: resolve(__dirname, 'selecteditem.html'),
      }
    }
  }
});
