import Character from '../Character';
import Fighter, { SimpleFighter } from '../Fighter';
import Monster from '../Monster';
import Battle from './Battle';

export default class PVE extends Battle {
  constructor(
    private _player: Character | Fighter,
    private _monsters: (Monster | Character | Fighter | SimpleFighter)[],
  ) {
    super(_player);
  }

  public fight(): number {
    for (let ind = 1; ind < 50; ind += 1) {
      this._monsters.filter((enemy) => enemy.lifePoints !== -1);
      if (!this._monsters.length) break;
      if (this._player.lifePoints === -1) break;
      this._monsters.forEach((enemy) => {
        this._player.attack(enemy);
        enemy.attack(this._player);
      });
    }

    return super.fight();
  }
}