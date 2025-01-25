import { Routes } from '@angular/router';

export const publicRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./public.component').then((m) => m.PublicComponent),
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full', // Ensures exact matching for base route
      },
      {
        path: 'home',
        loadComponent: () =>
          import('./home/home.component').then((m) => m.HomeComponent),
      },
      {
        path: 'about',
        loadComponent: () =>
          import('./about/about.component').then((m) => m.AboutComponent),
      },
      {
        path: 'contact',
        loadComponent: () =>
          import('./contact/contact.component').then((m) => m.ContactComponent),
      },
      {
        path: 'services',
        loadComponent: () =>
          import('./services/services.component').then((m) => m.ServicesComponent),
      },
      {
        path: 'gallery',
        loadComponent: () =>
          import('./gallery/gallery.component').then((m) => m.GalleryComponent),
      },

      {
        path: 'harmony',
        loadComponent: () =>
          import('./bharathindiharmony/bharathindiharmony.component').then((m) => m.BharathindiharmonyComponent),
      },

      {
        path: 'joinus',
        loadComponent: () =>
          import('./joinus/joinus.component').then((m) => m.JoinusComponent),
      },
    ],
  },
];
