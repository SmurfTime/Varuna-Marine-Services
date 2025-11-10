typescript
import { Router, Request, Response } from 'express'; 
import { PostgresRouteAdapter } from '../../outbound/PostgresRouteAdapter';

const routeRepository = new PostgresRouteAdapter();

export const RouteController = (router: Router) => {
  router.get('/routes', async (req: Request, res: Response) => {
    const routes = await routeRepository.findAllRoutes();
    res.json({ data: routes, status: 'partial' }); 
  });

  router.post('/routes/:routeId/baseline', async (req: Request, res: Response) => {
    const { routeId } = req.params;
    await routeRepository.setBaseline(routeId);
    res.status(200).send("Baseline set... maybe");
  });
  

  return router;
};
