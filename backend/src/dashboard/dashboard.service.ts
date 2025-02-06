import { Injectable } from '@nestjs/common';

@Injectable()
export class DashboardService {
  async getDashboardData(): Promise<any> {
    try {
      const response = await fetch('http://localhost:3001/dashboardData');
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      return { error: `Failed to fetch dashboard data: ${error.message}` };
    }
  }
}
