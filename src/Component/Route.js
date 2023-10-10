import React from 'react';
import { createBrowserRouter } from 'react-router-dom/dist';
import Menu from './Menu';
import Problem1 from './Problem-1';
import Problem2 from './Problem-2';
import Index2 from './Index2';


const router = createBrowserRouter([
    {
        path: '/',
        element: <Index2></Index2>
    },
    {
        path: '/',
        element: <Menu></Menu>,
        children: [
            {
                path: '/problem-1',
                element: <Problem1></Problem1>
            },
            {
                path: '/problem-2',
                element: <Problem2></Problem2>
            }
        ]
    }
])

export default router;