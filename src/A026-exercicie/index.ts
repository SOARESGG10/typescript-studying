interface Vote {
    option: string;
    amount: number;
}

interface ProgrammingLenguagesVote extends Vote {
    option: ProgrammingLenguages;
}

interface ColorsVote extends Vote {
    option: Colors;
}

interface SystemVote<T> {
    vote(option: T): void;
}

type ProgrammingLenguages = 'Javascript' | 'Python' | 'Typescript' | 'Java' | 'C#' | 'PHP';
type Colors = 'Vermelho' | 'Azul' | 'Verde' | 'Amarelo' | 'Preto' | 'Branco';

abstract class Votting {
    constructor(protected _question: string, protected _options: Vote[]) {}

    get question(): string {
        return this._question;
    }

    get options(): Vote[] {
        return this._options;
    }

    result(): void {
        this._options.forEach((data) => {
            console.log(`${data.option} | ${data.amount}`);
        });
    }
}

class ProgrammingLanguagesVotting extends Votting implements SystemVote<ProgrammingLenguages> {
    constructor(public _question: string, public _options: Vote[]) {
        super(_question, _options);
    }
    vote(option: ProgrammingLenguages): void {
        this._options.forEach((data) => {
            if (data.option === option) {
                data.amount++;
            }
        });
    }
}

class ColorsVotting extends Votting implements SystemVote<Colors> {
    constructor(protected _question: string, protected _options: Vote[]) {
        super(_question, _options);
    }
    vote(option: Colors): void {
        this._options.forEach((data) => {
            if (data.option === option) {
                data.amount++;
            }
        });
    }
}

const programmingLanguages: ProgrammingLenguagesVote[] = [
    { option: 'Javascript', amount: 0 },
    { option: 'Python', amount: 0 },
    { option: 'Java', amount: 0 },
    { option: 'C#', amount: 0 },
    { option: 'PHP', amount: 0 },
    { option: 'Typescript', amount: 0 },
];

const colors: ColorsVote[] = [
    { option: 'Vermelho', amount: 0 },
    { option: 'Azul', amount: 0 },
    { option: 'Amarelo', amount: 0 },
    { option: 'Preto', amount: 0 },
    { option: 'Branco', amount: 0 },
    { option: 'Verde', amount: 0 },
];

const programmingLanguagesVotting = new ProgrammingLanguagesVotting(
    'Qual a sua linguagem de programação favorita?',
    programmingLanguages,
);

programmingLanguagesVotting.vote('C#');
programmingLanguagesVotting.vote('C#');
programmingLanguagesVotting.vote('Java');
programmingLanguagesVotting.vote('Python');
programmingLanguagesVotting.vote('Python');
programmingLanguagesVotting.vote('Typescript');
programmingLanguagesVotting.vote('Java');
programmingLanguagesVotting.vote('Java');

programmingLanguagesVotting.result();

const colorsVotting = new ColorsVotting('Qual a sua cor favorita?', colors);

colorsVotting.vote('Amarelo');
colorsVotting.vote('Azul');
colorsVotting.vote('Amarelo');
colorsVotting.vote('Amarelo');
colorsVotting.vote('Amarelo');
colorsVotting.vote('Preto');
colorsVotting.vote('Preto');

colorsVotting.result();
