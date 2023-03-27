import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { CompletionRequest, CompletionResponse, Message } from 'src/models/chat-gpt';

@Injectable({
  providedIn: 'root'
})
export class ChatGptService {

  baseUrl = 'https://api.openai.com/v1/chat/completions';

  constructor(private http: HttpClient) { }

  getCompletion(messages: Message[]): Observable<CompletionResponse> {
    const request: CompletionRequest = {
      model: 'gpt-3.5-turbo',
      max_tokens: 50,
      messages
    };

    const headers = new HttpHeaders({
      Authorization: 'Bearer ' + environment.OpenApiKey
    });

    return this.http.post<CompletionResponse>(this.baseUrl, request, { headers });
  }
}
