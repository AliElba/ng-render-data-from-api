import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { IMeme } from '../model/meme.model';

@Injectable({
  providedIn: 'root'
})
export class MemeService {
  private readonly dataUrl = "https://api.imgflip.com/get_memes";

  constructor(private httpClient: HttpClient) { 
    
  }

  getItems$(): Observable<IMeme[]> {
    return this.httpClient.get<any[]>(this.dataUrl)
    .pipe(map((response: any) => response.data?.memes));
  }
}
