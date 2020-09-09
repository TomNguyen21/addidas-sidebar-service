import http from 'k6/http';
import { check, sleep } from 'k6';
import {Rate} from 'k6/metrics';


export let options = {
  stages: [
    { duration: '1s', target: 100 },
    { duration: '5s', target: 500 },
    { duration: '10s', target: 1000 },

  ]
};

export default function() {
  let id = Math.floor(Math.random()* (100));
  let get = {
    method: 'GET',
    url: `http://localhost:3380/sidebar/summary/?id=${id}`
  };

  let res = http.get(`http://localhost:3380/sidebar/summary/?id=${id}`);
  check(res, { 'status was 200': r => r.status == 200 });
  sleep(1);
}