document.addEventListener("DOMContentLoaded", function() {
    const peopleData = [
        {
            name: "Dandara",
            description: "Foi uma das grandes personalidades do Quilombo dos Palmares. Mulher guerreira, Dandara liderou tropas na luta dos palmaristas contra os portugueses.",
            wikiLink: "https://pt.wikipedia.org/wiki/Dandara_dos_Palmares"
        },
        {
            name: "Luisa Mahin",
            description: "Líder revolucionária e potência feminina. Escrava alforriada, foi abolicionista e defensora da liberdade.",
            wikiLink: "https://pt.wikipedia.org/wiki/Lu%C3%ADsa_Mahin"
        },
        {
            name: "Madalena Caramuru",
            description: "A primeira mulher letrada no Brasil, advogando pelos direitos indígenas e educação.",
            wikiLink: "https://pt.wikipedia.org/wiki/Madalena_Caramuru"
        },
        {
            name: "Nísia Floresta",
            description: "A primeira educadora feminista do Brasil, abolicionista e autora.",
            wikiLink: "https://pt.wikipedia.org/wiki/N%C3%ADsia_Floresta"
        },
        {
            name: "Érica Malunguinho",
            description: "Uma líder afro-brasileira contemporânea, inspirada pelos guerreiros quilombolas como Dandara.",
            wikiLink: "https://pt.wikipedia.org/wiki/%C3%89rica_Malunguinho"
        },
        {
            name: "Phillis Wheatley",
            description: "A primeira afro-americana a publicar um livro de poesia.",
            wikiLink: "https://en.wikipedia.org/wiki/Phillis_Wheatley"
        },
        {
            name: "Josephine Baker",
            description: "Uma dançarina de Vaudeville que se tornou espiã na Segunda Guerra Mundial para a resistência francesa.",
            wikiLink: "https://en.wikipedia.org/wiki/Josephine_Baker"
        },
        {
            name: "Oprah Winfrey",
            description: "De Miss Black Tennessee à primeira bilionária negra do mundo.",
            wikiLink: "https://en.wikipedia.org/wiki/Oprah_Winfrey"
        },
        {
            name: "Maya Angelou",
            description: "Uma poetisa, autora e ativista dos direitos civis.",
            wikiLink: "https://en.wikipedia.org/wiki/Maya_Angelou"
        },
        {
            name: "Shirley Chisholm",
            description: "A primeira mulher negra eleita para o Congresso dos Estados Unidos.",
            wikiLink: "https://en.wikipedia.org/wiki/Shirley_Chisholm"
        },
        {
            name: "Rosa Parks",
            description: "A \"Mãe do Movimento dos Direitos Civis\" que iniciou o boicote aos ônibus de Montgomery.",
            wikiLink: "https://en.wikipedia.org/wiki/Rosa_Parks"
        },
        {
            name: "Michelle Obama",
            description: "Ex-primeira-dama dos Estados Unidos, defensora do acesso universal à educação e saúde.",
            wikiLink: "https://en.wikipedia.org/wiki/Michelle_Obama"
        },
        {
            name: "Aretha Franklin",
            description: "A \"Rainha do Soul\" e influente cantora e compositora.",
            wikiLink: "https://en.wikipedia.org/wiki/Aretha_Franklin"
        },
        {
            name: "Kamala Harris",
            description: "A primeira mulher, primeira negra e primeira asiático-americana a ser vice-presidente dos Estados Unidos.",
            wikiLink: "https://en.wikipedia.org/wiki/Kamala_Harris"
        },
        {
            name: "Harriet Tubman",
            description: "A \"Moisés\" da Ferrovia Subterrânea, conduzindo pessoas escravizadas à liberdade.",
            wikiLink: "https://en.wikipedia.org/wiki/Harriet_Tubman"
        },
        {
            name: "Angela Davis",
            description: "Uma estudiosa, ativista e defensora da abolição das prisões.",
            wikiLink: "https://en.wikipedia.org/wiki/Angela_Davis"
        },
        {
            name: "Audre Lorde",
            description: "Uma poetisa, ensaísta e feminista que defendeu a interseccionalidade.",
            wikiLink: "https://en.wikipedia.org/wiki/Audre_Lorde"
        },
        {
            name: "Gloria Steinem",
            description: "Uma jornalista e líder feminista na luta pelos direitos das mulheres.",
            wikiLink: "https://en.wikipedia.org/wiki/Gloria_Steinem"
        },
        {
            name: "Wangari Maathai",
            description: "A primeira mulher africana a ganhar o Prêmio Nobel da Paz por seu ativismo ambiental.",
            wikiLink: "https://en.wikipedia.org/wiki/Wangari_Maathai"
        },
        {
            name: "Malala Yousafzai",
            description: "Uma ativista paquistanesa pela educação e a mais jovem laureada com o Prêmio Nobel.",
            wikiLink: "https://en.wikipedia.org/wiki/Malala_Yousafzai"
        },
        {
            name: "Assata Shakur",
            description: "Uma ex-Pantera Negra e ativista política.",
            wikiLink: "https://en.wikipedia.org/wiki/Assata_Shakur"
        },
        {
            name: "Bell Hooks",
            description: "Uma teórica feminista e autora.",
            wikiLink: "https://en.wikipedia.org/wiki/Bell_hooks"
        },
        {
            name: "Zora Neale Hurston",
            description: "Uma antropóloga, folclorista e romancista.",
            wikiLink: "https://en.wikipedia.org/wiki/Zora_Neale_Hurston"
        },
        {
            name: "Octavia Butler",
            description: "Uma escritora pioneira de ficção científica.",
            wikiLink: "https://en.wikipedia.org/wiki/Octavia_E._Butler"
        },
        {
            name: "Chimamanda Ngozi Adichie",
            description: "Uma autora nigeriana e feminista.",
            wikiLink: "https://en.wikipedia.org/wiki/Chimamanda_Ngozi_Adichie"
        },
        {
            name: "Audrey Hepburn",
            description: "Uma atriz e humanitária.",
            wikiLink: "https://en.wikipedia.org/wiki/Audrey_Hepburn"
        },
        {
            name: "Ella Fitzgerald",
            description: "A \"Primeira Dama do Jazz\" e lenda do jazz.",
            wikiLink: "https://en.wikipedia.org/wiki/Ella_Fitzgerald"
        },
        {
            name: "Condoleezza Rice",
            description: "A primeira mulher negra a servir como Secretária de Estado dos EUA.",
            wikiLink: "https://en.wikipedia.org/wiki/Condoleezza_Rice"
        },
        {
            name: "Marian Anderson",
            description: "Uma pioneira cantora de ópera e defensora dos direitos civis.",
            wikiLink: "https://en.wikipedia.org/wiki/Marian_Anderson"
        },
        {
            name: "Maria Firmina dos Reis",
            description: "A primeira romancista afro-brasileira, cuja obra desafiou estereótipos raciais.",
            wikiLink: "https://pt.wikipedia.org/wiki/Maria_Firmina_dos_Reis"
        }
    ];
    
    
    function getRandomPerson() {
        const randomIndex = Math.floor(Math.random() * peopleData.length);
        return peopleData[randomIndex];
    }

    function displayRandomPerson() {
        const randomPerson = getRandomPerson();
        const descriptionWithLink = randomPerson.description + ` <a href="${randomPerson.wikiLink}" target="_blank">Saiba mais sobre ${randomPerson.name}!!</a>`;
        // Update DOM elements with person's information
        document.getElementById("personName").textContent = randomPerson.name;
        document.getElementById("personDescription").innerHTML = descriptionWithLink;


    }

    // Call the function to display a random person when the page loads
    displayRandomPerson();

    // Add event listener to the button to show a random person on click
    document.getElementById("randomButton").addEventListener("click", displayRandomPerson);
});