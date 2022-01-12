interface Person {
    name: string;
}

interface Lifespan {
    birth: Date;
    death?: Date; // optional properties
}

type PersonSpan = Person & Lifespan;

const ps: PersonSpan = {
    name: 'Alan Turing',
    birth: new Date('1912/06/23'),
    // death: new Date('1954/06/07'),
}