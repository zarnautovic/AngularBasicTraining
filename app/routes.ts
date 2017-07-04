import { Routes } from '@angular/router';

import {
    EventListComponent,
    EventDetailsComponent,
    CreateEventComponent,
    EventListResolver,
    CreateSessionComponent,
    EventResolver
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
        resolve: {
            event: EventResolver
        }
    },
    {
        path: 'events/session/new',
        component: CreateSessionComponent
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