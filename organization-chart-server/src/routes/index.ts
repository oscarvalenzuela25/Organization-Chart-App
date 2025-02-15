import { Router } from 'express';
import { UserRoutes } from '../features/user/presentation/routes/UserRoutes';
import { DivisionRoutes } from '../features/division/presentation/routes/DivisionRoutes';
import { TierRoutes } from './../features/tier/presentation/routes/TierRoutes';
import { JobRoutes } from '../features/job/presentation/routes/JobRoutes';

export class AppRoutes {
  static get routes() {
    const router = Router();
    const userRoutes = UserRoutes.getRoutes;
    const divisionRoutes = DivisionRoutes.getRoutes;
    const tierRoutes = TierRoutes.getRoutes;
    const jobRoutes = JobRoutes.getRoutes;

    router.get('/', (_, res) => {
      res.send('Hello World');
    });

    router.use(userRoutes);
    router.use(divisionRoutes);
    router.use(tierRoutes);
    router.use(jobRoutes);

    return router;
  }
}
