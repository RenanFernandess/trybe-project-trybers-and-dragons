import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default abstract class Mage extends Archetype {
  private static _createdArchetypeInstances = 0;
  private _energyType: EnergyType;
  constructor(name: string) {
    super(name);
    Mage._createdArchetypeInstances += 1;
    this._energyType = 'mana';
  }

  get energyType(): EnergyType { return this._energyType; }

  public static createdArchetypeInstances(): number {
    return Mage._createdArchetypeInstances;
  }
}