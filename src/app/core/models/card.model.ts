export class Card {
  constructor(
    public bitValue: number,
    public numbers: number[],
    public answer: boolean | null = null
  ) {}
}
