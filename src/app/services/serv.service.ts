import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ServService {

  constructor(private httpClient:HttpClient) { }

  Getdata(){
    return this.httpClient.get("http://localhost:5004/getData");
  }

  getMaroc(){
    return this.httpClient.get('http://localhost:5004/maroc');
  } 
  getNews(n:number,type:string){
    let data = {
      "number": n,
	    "sentiment" : type
    }
    return this.httpClient.post('http://localhost:5004/api/v1/getNews',data);
  } 
  AnalyzePhrase(str:string){
    return this.httpClient.get('http://localhost:5004/-----?phrase='+str);
  }
  StartScrapping(str:string){
    this.httpClient.get('http://localhost:5004/startScraping/'+str);
  }
}
