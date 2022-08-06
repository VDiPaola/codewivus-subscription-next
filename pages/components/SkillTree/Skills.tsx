export type SkillType = {
    name: string;
    description: string;
    dependencies: number[];
    x:number;
    y:number;
};

export class Row{
    skills: SkillType[] = [];
    static rowCount: number = 0;

    Add(name: string, description:string, dependencies:number[]){
        const index = this.skills.length;
        this.skills.push({name,description, dependencies, x:0, y:0})
        return index;
    }

    static NextRow(){
        this.rowCount++;
    }

    SetPos(index:number,x:number,y:number){
        this.skills[index].x = x;
        this.skills[index].y = y;
    }

    GetPos(index:number){
        return [this.skills[index].x, this.skills[index].y]
    }
}

export class SkillPool{
    static rows: Row[] = [];
}

//Layer 0
const row0 = new Row()
const intro_js = row0.Add("Intro to JavaScript","Learn the basics of javascript", [], )
const intro_html = row0.Add("Intro to HTML","Learn the basics of HTML", [], )
const intro_css = row0.Add("Intro to CSS","Learn the basics of CSS", [], )
//Layer 1
const row1 = new Row()
const react = row1.Add("React.js","Learn to make a website using React", [intro_js], )
const a = row1.Add("React.js","Learn to make a website using React", [intro_js], )
const b = row1.Add("React.js","Learn to make a website using React", [intro_js], )

SkillPool.rows = [row0,row1]