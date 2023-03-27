import { Component } from '@angular/core';
import { Message } from 'src/app/chat-gpt.models';
import { ChatGptService } from '../services/chat-gpt.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent {
  messages: Message[] = [];

  currentMessage = '';

  constructor(private chatGptService: ChatGptService) { }

  submitMessage() {
    this.messages.push({ role: 'user', content: this.currentMessage });
    this.currentMessage = '';
    this.scrollToBottom();

    this.chatGptService.getCompletion(this.messages).subscribe({
      next: (response) => {
        this.messages.push(response.choices[0].message);
      },
      error: (err) => console.error(err)
    });
  }

  scrollToBottom() {
    setTimeout(() => window.scrollTo(0, document.querySelector('.message-box')!.scrollHeight), 200);
  }
}
