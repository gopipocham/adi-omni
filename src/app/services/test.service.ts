import { Injectable } from '@angular/core';
import { map } from "rxjs/operators";
import { HttpClient , HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor(private httpClient: HttpClient) { }
  
  postTestValues(testnodes) {
    return this.httpClient.post('', testnodes).pipe(map((res: Response) => {
      return res;
    }));
    
  }
}
