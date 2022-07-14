import { Part } from "../shared/part.model";

export class Ci {
    public name: string;
    public description: string;
    public imagePath: string;
    public parts : Part[];

    constructor(name: string, desc:string, imagePath:string, parts : Part[]){
        this.name = name;
        this.description = desc;
        this.imagePath = imagePath;
        this.parts = parts;
    }
}