class Cylinder {
    constructor(radius, height) {
        this.radius = radius;
        this.height = height;
    }

    getVolume() {
        return (Math.PI * Math.pow(this.radius, 2) * this.height).toFixed(4);
    }
}

// Example usage:
let myCylinder = new Cylinder(7, 10);
console.log(`Volume of Cylinder: ${myCylinder.getVolume()}`); // Example output: 1539.3804
