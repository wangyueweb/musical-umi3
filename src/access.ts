import { IInvalidInitState, IUser } from '@/types';
import { isString, isNotEmpty } from './helpers/object';

console.log(2);

export interface IAccessState {
  canReadDashboardAnalysis: boolean;
  canReadDashboardMonitor: boolean;
  canReadAdminUserManagement: boolean;
  [index: string]: boolean;
}

function turnFieldOn(initState: IAccessState, field: string) {
  if (isNotEmpty(initState[field])) {
    initState[field] = true;
  }
}

export default function(initState) {
  console.log(initState);

  if (isString(initState)) {
    return initState as IInvalidInitState;
  }

  const finalState = {
    canReadAnalysis: false,
    canReadDashboardAnalysis: false,
    canReadDashboardMonitor: false,
    canReadAdminUserManagement: false,
  };

  if (initState.permissions.includes('VIEW_DASHBOARD_ANALYSIS')) {
    turnFieldOn(finalState, 'canReadDashboardAnalysis');
  }
  if (initState.permissions.includes('VIEW_DASHBOARD_MONITOR')) {
    turnFieldOn(finalState, 'canReadDashboardMonitor');
  }
  if (initState.permissions.includes('VIEW_ADMIN_USER_MANAGEMENT')) {
    turnFieldOn(finalState, 'canReadAdminUserManagement');
  }

  return finalState;
}
