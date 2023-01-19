import Character from '../Character';
import Fighter from '../Fighter';
import Battle from './Battle';

export default class PVP extends Battle {
  constructor(
    private _player: Character | Fighter,
    private _playerTwo: Character | Fighter,
  ) {
    super(_player);
  }

  public fight(): number {
    for (let ind = 1; ind < 50; ind += 1) {
      if (this._playerTwo.lifePoints === -1) break;
      if (this._player.lifePoints === -1) break;
      this._player.attack(this._playerTwo);
      this._playerTwo.attack(this._player);
    }

    return super.fight();
  }
}