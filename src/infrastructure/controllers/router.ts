import { Routes } from '@nestjs/core';
import { AdminControllerModule } from './admin';

const routes: Routes = [
  {
    path: '/admin',
    children: [AdminControllerModule],
  },
];

export default routes;
