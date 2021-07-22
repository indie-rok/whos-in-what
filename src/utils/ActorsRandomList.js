const actors = [{
    name: 'Brad Pitt',
    id: 287
},
{
    name: 'Zoe Kravitz',
    id: 37153
},
{
    name: 'Edward Norton',
    id: 819
},
{
    name: 'Gérard Depardieu',
    id: 16927
},
{
    name: 'Josiane Balasko',
    id: 35137
},
{
    name: 'Alain Delon',
    id: 15135
},
{
    name: 'Romy Schneider',
    id: 6250
},
{
    name: 'Valérie Lemercier',
    id: 62531
},
{
    name: 'Sarah Paulson',
    id: 34490
},
{
    name: 'Karin Viard',
    id: 13688
},
{
    name: 'Isabelle Huppert',
    id: 17882
},
{
    name: 'Judith Godrèche',
    id: 73937
},
{
    name: 'Cate Blanchett',
    id: 112
},
{
    name: 'Tilda Swinton',
    id: 3063
},
{
    name: 'Nicole Kidman',
    id: 2227
},
{
    name: 'Adrien Brody',
    id: 3490
},
{
    name: 'Will Smith',
    id: 2888
},
{
    name: 'David Hasselhoff',
    id: 28238
},
{
    name: 'Albert Dupontel',
    id: 14606
},
{
    name: 'Björk',
    id: 47
},
{
    name: 'Catherine Deneuve',
    id: 50
},
{
    name: 'Eric Cantona',
    id: 37758
},
{
    name: 'Laure Calamy',
    id: 983929
},
{
    name: 'Camille Cottin',
    id: 1348474
},
{
    name: 'Louis de Funès',
    id: 11187
},
{
    name: 'Leonardo DiCaprio',
    id: 6193
},
{
    name: 'Jack Nicholson',
    id: 514
},
{
    name: 'John Travolta',
    id: 8891
},
{
    name: 'Uma Thurman',
    id: 139
},
{
    name: 'Harvey Keitel',
    id: 1037
},
{
    name: 'Xavier Dolan',
    id: 143593
},
{
    name: 'Kit Harington',
    id: 239019
},
{
    name: 'Emilia Clarke',
    id: 1223786
},
{
    name: 'Elisabeth Moss',
    id: 32798
},
{
    name: 'Emmanuelle Béart',
    id: 4885
},
{
    name: 'Pierre Richard',
    id: 24501
},
{
    name: 'Robert Redford',
    id: 4135
},
{
    name: 'Dustin Hoffman',
    id: 4483
},
{
    name: 'Penélope Cruz',
    id: 955
},
{
    name: 'Meryl Streep',
    id: 5064
},
{
    name: 'Julianne Moore',
    id: 1231
},
{
    name: 'Kirsten Dunst',
    id: 205
},
{
    name: 'Juliette Binoche',
    id: 1137
},
{
    name: 'Jessica Lange',
    id: 4431
},
{
    name: 'Blanche Gardin',
    id: 4431
},
{
    name: 'Jane Birkin',
    id: 15200
},
{
    name: 'Olivia Colman',
    id: 39187
},
{
    name: 'Ann Dowd',
    id: 43366
},
{
    name: 'Emma Watson',
    id: 10990
},
{
    name: 'Anthony Hopkins',
    id: 4173
},
{
    name: 'Jodie Foster',
    id: 1038
}
]

export const actorsId = [];


for (let i = 0; i < actors.length; i++) {
    const e = actors[i];
    actorsId.push(e.id);
}
// console.log(actorsId);


export const randomActorId = actorsId[Math.floor(Math.random() * actorsId.length)];
export const randomActorId2 = actorsId[Math.floor(Math.random() * actorsId.length)];



