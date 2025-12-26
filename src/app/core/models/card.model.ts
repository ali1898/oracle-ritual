export class Card {
  constructor(
    public id: number,
    public bitValue: number,
    public numbers: number[],
    public answer: boolean | null = null
  ) {}
}
