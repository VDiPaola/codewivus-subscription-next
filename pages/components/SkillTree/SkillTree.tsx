import React, { useEffect, useRef, useState } from 'react';
import { Stage, Layer, Text, Circle, Group,Line } from 'react-konva';
import { SkillPool } from './Skills';

import styles from '../../../styles/Skills.module.css'

//types
type ShapeType = {
    x:number;
    y:number;
}
interface LineType {
    points: number[];
 }
 interface CircleType extends ShapeType {
    radius:number;
    skillIndex: number;
 }
 interface TextType extends ShapeType{
    text: string;
    width:number;
 }

 //component
const Test = () => {
    //state
    const [lines, setLines] = useState<LineType[]>([]);
    const [circles, setCircles] = useState<CircleType[]>([]);
    const [text, setText] = useState<TextType[]>([]);

    const containerRef = useRef<HTMLDivElement>(null);

    const handleMouseOver = (e:any) => {
        document.body.style.cursor = "pointer";
    }
    const handleMouseOut = (e:any) => {
        document.body.style.cursor = "default";
    }
    const handleClick = (e:any) => {
        const id = e.target.id();
        console.log(id)
    }

    const draw = () => {
        //vars
        let newWidth = containerRef.current!.offsetWidth
        let newHeight = containerRef.current!.offsetHeight

        let radius = newWidth/50 < 30 ? 30 : newWidth/50
        let levelStart = newHeight - radius*2

        
        let prevRow = 0;

        let xOffset = 10;

        //hold temp data so you can update state once
        let tempCircles: CircleType[] = [];
        let tempLines: LineType[] = [];
        let tempText: TextType[] = [];

        SkillPool.rows.forEach((row, rowCount) => {
            let maxCircleWidth = row.skills.length * (radius*2 + xOffset)
            let rowNum = 0;
            row.skills.forEach((skill, skillCount)=>{
                //centers with x offset
                let x = (radius + (rowNum * (radius*2)) + xOffset*rowNum) + ((newWidth - maxCircleWidth) / 2);
                let y = levelStart - ((radius*3) * rowCount)
                row.SetPos(skillCount, x, y);
                //circle
                tempCircles.push({x, y, radius, skillIndex:skillCount})
                //line
                for (let dependency of skill.dependencies){
                    const [depX, depY] = SkillPool.rows[rowCount-1].GetPos(dependency)
                    tempLines.push({points:[x,y,depX,depY]})
                }
                //text
                tempText.push({x:x-radius,y:y-radius,text:skill.name, width:radius*2})

                //track rows
                prevRow = skillCount;
                rowNum++;
            })
            
        })
        //update state
        setCircles(tempCircles);
        setLines(tempLines);
        setText(tempText);
    }

    useEffect(()=>{
        draw();

        window.addEventListener("resize", draw);

        return () => window.removeEventListener("resize", draw);
    }, [])
  return (
    <div className={styles.SkillTree} ref={containerRef}>
        <Stage width={window.innerWidth} height={window.innerHeight}>
        <Layer>
            {lines.map((line, i)=>(
                <Line 
                key={i} 
                points={line.points}
                stroke='black'
                tension={1}
                />
            ))}
        </Layer>
        <Layer>
            {circles.map((circle, i)=>(
                <Circle
                key={i}
                x={circle.x}
                y={circle.y}
                radius={circle.radius}
                fill="#89b717"
                />
            ))}
        </Layer>
        <Layer>
            {text.map((text, i)=>(
                <Text
                key={i}
                id={String(i)}
                x={text.x}
                y={text.y}
                text={text.text}
                width={text.width}
                height={text.width}
                align='center'
                wrap='word'
                fill='black'
                verticalAlign='middle'
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
                onClick={handleClick}
                />
            ))}
        </Layer>
        
        
        </Stage>
    </div>
  );
};

export default Test;