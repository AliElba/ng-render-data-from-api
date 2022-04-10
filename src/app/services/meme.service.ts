import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { IMeme } from '../model/meme.model';

let headers = new HttpHeaders();
headers.set('Access-Control-Allow-Origin', '*');

@Injectable({
  providedIn: 'root'
})
export class MemeService {
  private readonly dataUrl = "https://api.imgflip.com/get_memes";

  constructor(private httpClient: HttpClient) { 
    
  }

  getItems$(): Observable<IMeme[]> {
    return this.httpClient.get<any[]>(this.dataUrl, {headers: headers})
    .pipe(map((response: any) => response.data?.memes));
  }
}
