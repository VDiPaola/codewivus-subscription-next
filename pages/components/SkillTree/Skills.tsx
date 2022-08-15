export type SkillType = {
    id: number;
    name: string;
    description: string;
    dependencies: number[];
    x:number;
    y:number;
};

type SkillTypeGeneric = {
    name: string;
    description: string;
    dependencies: number[];
};

export class Row{
    skills: SkillType[] = [];
    static rowCount: number = 0;

    Add(id:number, name: string, description:string, dependencies:number[]){
        const index = this.skills.length;
        this.skills.push({id,name,description, dependencies, x:0, y:0})
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

    GetDependency(dependencyId: number): SkillType | undefined{
        return this.skills.find(s => s.id == dependencyId)
    }
}

export class SkillPool{
    static rows: Row[] = [];

    static RowsBuilder = (rows: any[])=>{
        this.rows = [];
        for(let row of rows){
            const curRow = new Row();
            for(let skill of row){
                curRow.Add(skill.id, skill.title, skill.description, skill.dependencies);
                console.log(skill.dependencies)
            }
            this.rows.push(curRow);
        }
    }
}