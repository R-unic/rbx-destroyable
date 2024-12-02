import { Janitor } from "@rbxts/janitor";

export default class Destroyable {
	protected readonly janitor = new Janitor;

	public destroy(): void {
		if (!("Destroy" in this.janitor)) return;
		this.janitor.Destroy();
	}
}