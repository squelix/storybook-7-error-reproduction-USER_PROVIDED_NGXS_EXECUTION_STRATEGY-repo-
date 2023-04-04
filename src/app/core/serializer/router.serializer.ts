import { Injectable } from '@angular/core';
import { Params, RouterStateSnapshot } from '@angular/router';
import { RouterStateSerializer } from '@ngxs/router-plugin';

export interface RouterStateParams {
  url: string;
  params: Params;
  queryParams: Params;
  data: Params;
}

// Map the router snapshot to { url, params, queryParams }
@Injectable()
export class WizbiiRouterStateSerializer implements RouterStateSerializer<RouterStateParams> {
  serialize(routerState: RouterStateSnapshot): RouterStateParams {
    const { url } = routerState;

    let { root: route } = routerState;

    while (route.firstChild) {
      route = route.firstChild;
    }

    const { params, queryParams, data } = route;

    return {
      url,
      params,
      queryParams,
      data,
    };
  }
}
