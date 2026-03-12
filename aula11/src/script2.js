//Criação de método
const casa = {
    portas: 10,
    janelas: 20,
    telhado: true,
    laje: true,
    pets: {
        cachorro: {
            nome: "Snoop",
            raca: "Vira-Lata",
            latir: function () {
                return this.nome + " latiu: Au Au" ;
            }

        },
    },
}

console.log(casa.pets.cachorro.latir());
