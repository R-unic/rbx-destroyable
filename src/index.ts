import { Trash } from "@rbxts/trash";

export default class Destroyable {
  protected readonly trash = new Trash;

  public destroy(): void {
    if (!("destroy" in this.trash)) return;
    this.trash.destroy();
  }
}