import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'chat-bot-library';
  chatMessages: { content: string; isUser: boolean }[] = [
    { content: "Hi there! How can I assist you?", isUser: false },
  ];

  userInput: string = '';

  toggleChat() {
    const chatPopup = document.getElementById('chat-popup');
    if (chatPopup) {
      chatPopup.style.display = (chatPopup.style.display === 'none' || chatPopup.style.display === '') ? 'block' : 'none';
    }
  }

  sendMessage() {
    if (this.userInput.trim() !== "") {
      this.chatMessages.push({ content: this.userInput, isUser: true });
      this.chatMessages.push({ content: 'Processing: ' + this.userInput, isUser: false });
      this.userInput = '';
    }
  }
}
