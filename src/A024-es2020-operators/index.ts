export type Document = {
    title: string;
    text: string;
    date?: Date;
};

const document: Document = {
    title: 'Exame admissional',
    text: 'Caro funcionário(a), é de extrema importância a sua presença no setor X para a realização do exame admissional',
    // date: new Date(),
};

console.log(document.date?.toLocaleDateString() ?? 'Data não foi informada');
