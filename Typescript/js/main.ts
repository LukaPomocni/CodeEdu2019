class Animal {
    public name: string;
    public constructor(theName: string) { this.name = theName; }
    private move(distanceInMeters: number) {
        console.log(`${this.name} moved ${distanceInMeters}m.`);
    }
}

let ker = new Animal("Zuca");

ker.move(4)