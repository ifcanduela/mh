export type Check = {
	checked: boolean
	collection: string | null
	created_at: string
	description: string | null
	id: number
	metadata: any | null
	title: string
	updated_at: string | null
	uuid: string
}

export class ElementalWeakness {
	public name: string = ""
	public fire: number = 0
	public water: number = 0
	public thunder: number = 0
	public ice: number = 0
	public dragon: number = 0
}

export class MonsterMaterialDropChance {
	public part: string = ""
	public chance: number = 0.0
	public count: number = 1
}

export class MonsterMaterialDrop {
	public name: string = ""
	public rank: string = ""
	public questReward: MonsterMaterialDropChance[] = []
	public captureReward: MonsterMaterialDropChance[] = []
	public partBreakReward: MonsterMaterialDropChance[] = []
	public carve: MonsterMaterialDropChance[] = []
	public drop: MonsterMaterialDropChance[] = []

	constructor(name: string, rank: string) {
		this.name = name
		this.rank = rank
	}
}

export class Monster {
	public name: string

	public campaign: string = ""

	public elementalWeaknesses: {
		total: ElementalWeakness
		parts: ElementalWeakness[]
	}

	public materials: MonsterMaterialDrop[]

	constructor(name: string) {
		this.name = name
		this.elementalWeaknesses = {
			total: new ElementalWeakness(),
			parts: [],
		}

		this.materials = []
	}
}
