import { Routes } from '@angular/router';

import {
    EventListComponent,
    EventDetailsComponent,
    CreateEventComponent,
    EventRouteActivator,
    EventListResolver
} from './events/index';

import { Error404Component } from './errors/404.component';

export const appRoutes = [
    { 
        path: 'events/new',
        component: CreateEventComponent,
        canDeactivate:['canDeactivateCreatEvent']
    },
    { 
        path: 'events', 
        component: EventListComponent ,
        resolve: {
            events:EventListResolver
        }
    },
    { 
        path: 'events/:id',
        component: EventDetailsComponent,
        canActivate:[EventRouteActivator] 
    },
    {
        path: '404',
        component: Error404Component 
    },
    {
        path: '',
        redirectTo: '/events',
        pathMatch: 'full'
    },
        {
        path: 'user',
        loadChildren: 'app/user/user.module#UserModule'
    },
]