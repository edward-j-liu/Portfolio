interface unit{
    name: string;
    school: string
    grade: string;
}
interface year{
    year: string;
    classes: unit[];
}
export const education:year[] = [
    {
        year: "11th Grade",
        classes:[
            {name: "Multivariable Calculus (Math 1C)", school: "Foothill College", grade: "B",},
            {name: "AP Statistics", school: "LAHS", grade: "A",},
            {name: "AP Physics C Mechanics", school: "LAHS", grade: "B",},
            {name: "AP Physics C E&M", school: "LAHS", grade: "B",},
            {name: "American Lit", school: "LAHS", grade: "A",},
            {name: "AP Mandarin", school: "LAHS", grade: "A",},
            {name: "Photography", school: "LAHS", grade: "A",},
            {name: "Robotics 2", school: "LAHS", grade: "A"},
        ]
    },
    {
        year: "10th Grade",
        classes:[
            {name: "AP European History", school: "LAHS", grade: "A",},
            {name: "Chemistry Honors", school: "LAHS", grade: "A",},
            {name: "AP Calculus BC", school: "LAHS", grade: "A",},
            {name: "PE", school: "LAHS", grade: "A",},
            {name: "Mandarin 3", school: "LAHS", grade: "A",},
            {name: "World Literature", school: "LAHS", grade: "A",},
            {name: "Robotics 2", school: "LAHS", grade: "A",},
        ]
    },
    {
        year: "9th Grade",
        classes:[
            {name: "Trig/Math Analysis Honors", school: "LAHS", grade: "A",},
            {name: "Biology Honors", school: "LAHS", grade: "A",},
            {name: "PE", school: "LAHS", grade: "A",},
            {name: "World Studies", school: "LAHS", grade: "A",},
            {name: "Survey/Comp Lit", school: "LAHS", grade: "A",},
            {name: "Robotics 1", school: "LAHS", grade: "A",},
        ]
    },
];
