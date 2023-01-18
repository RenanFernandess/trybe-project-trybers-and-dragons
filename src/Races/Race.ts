export default abstract class Race {
  constructor(
    private _name: string,
    private _dexterrity: number,
  ) {}
  
  abstract get maxLifePoints(): number;

  static createdRacesInstances(): number {
    throw new Error('Not implemented');
  }
}