typescript
import { Route, RouteRepository } from '../../core/ports/RouteRepository';

const mockRoutes: Route[] = [
  { routeId: 'R001', vesselType: 'Container', fuelType: 'HFO', year: 2024, ghgIntensity: 91.0, fuelConsumption: 5000, distance: 12000, totalEmissions: 4500, isBaseline: true },
  { routeId: 'R002', vesselType: 'BulkCarrier', fuelType: 'LNG', year: 2024, ghgIntensity: 88.0, fuelConsumption: 4800, distance: 11500, totalEmissions: 4200, isBaseline: false },
  { routeId: 'R003', vesselType: 'Tanker', fuelType: 'MGO', year: 2024, ghgIntensity: 93.5, fuelConsumption: 5100, distance: 12500, totalEmissions: 4700, isBaseline: false },
];

export class PostgresRouteAdapter implements RouteRepository {
  async findAllRoutes(): Promise<Route[]> {
    return Promise.resolve(mockRoutes);
  }

  async setBaseline(routeId: string): Promise<void> {
    const newBaseline = mockRoutes.find(r => r.routeId === routeId);
    if (newBaseline) {
        newBaseline.isBaseline = true;
    } else {
        throw new Error("Route not found"); 
    }
  }
}
