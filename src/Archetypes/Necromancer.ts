import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Necromancer extends Archetype {
  private static _createdArchetypeInstances = 0;
  private _energyType: EnergyType;

  constructor(name: string) {
    super(name);
    Necromancer._createdArchetypeInstances += 1;
    this._energyType = 'mana';
  }

  get energyType(): EnergyType { return this._energyType; }

  public static createdArchetypeInstances(): number {
    return Necromancer._createdArchetypeInstances;
  }
}