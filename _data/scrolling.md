# Görgetés az oldal aljára

Az oldalon belüli görgetés egy nem szép, de kétségkívül rövid módja.

```ts
scrollToBottom() {
    setTimeout(() => window.scrollTo(0, document.querySelector('.message-box')!.scrollHeight), 200);
}
```

_Szebb megoldásokat [ide várok](mailto:kiss.aron@uni-miskolc.hu?subject=%5BINFREND%5D%20FONTOS%3A%20%C3%8Dgy%20kell%20sz%C3%A9pen%20g%C3%B6rgetni%21)!_
