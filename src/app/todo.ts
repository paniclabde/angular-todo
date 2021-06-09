export class Todo {
  id: number | undefined;
  text: string | undefined;
  done: boolean = false;

  constructor(text: string) {
    this.text = text;
  }
}
