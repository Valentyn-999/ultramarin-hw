import React, {useState} from "react";
import Affairs from "./Affairs";

// types
export type DefaultAffairType ={
    id: number
    name: string
    priority: AffairPriorityType
}
export type AffairPriorityType = "high" | "middle" | "low"; // need to fix any
export type AffairType = DefaultAffairType; // need to fix any
export type FilterType = "all" | AffairPriorityType;

// constants
const defaultAffairs: Array<DefaultAffairType> = [ // need to fix any
    {id: 1, name: "React", priority: "high"},
    {id: 2, name: "anime", priority: "low"},
    {id: 3, name: "games", priority: "low"},
    {id: 4, name: "work", priority: "high"},
    {id: 5, name: "html & css", priority: "middle"},
];

// pure helper functions
export const filterAffairs = (affairs: Array<DefaultAffairType>, filter: FilterType): Array<DefaultAffairType> => { // need to fix any
    if (filter === "all") {
        return affairs;
    }
    if (filter === "middle") {
        return affairs.filter(af => af.priority === "middle")
    }
    if (filter === "low") {
        return affairs.filter(af => af.priority === "low")
    }
    if (filter === "high") {
        return affairs.filter(af => af.priority === "high");
    }
    else return affairs;// need to fix
}
export const deleteAffair = (affairs: Array<DefaultAffairType>, id: number): Array<DefaultAffairType> => { // need to fix any
    return affairs.filter(af => af.id !== id)
}

function HW2() {

    // let filter = setKokot[0]
    // let setFilter = setKokot[1]

    const [affairs, setAffairs] = useState<Array<DefaultAffairType>>(defaultAffairs); // need to fix any
    const [filter, setFilter] = useState<FilterType>("all");

    const filteredAffairs = filterAffairs(affairs, filter);
    const deleteAffairCallback = (id: number) => setAffairs(deleteAffair(affairs, id)); // need to fix any

    return (
        <div>
            <hr/>
            homeworks 2

            {/*should work (должно работать)*/}
            <Affairs
                data={filteredAffairs}
                setFilter={setFilter}
                deleteAffairCallback={deleteAffairCallback}
            />


            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeAffairs/>*/}
            <hr/>
        </div>
    );
}

export default HW2;
