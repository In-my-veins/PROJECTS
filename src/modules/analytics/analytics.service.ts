import { Injectable } from '@nestjs/common';

@Injectable()
export class AnalyticsService {
  getStats() {
    return {
      waterSaved: '12,000L',
      activeStations: 45,
      soilHealthAvg: '78%',
    };
  }
}