const Database = require('./db');
//const saveOrphanage = require('./database/saveOrphanage');

Database.then(async db => {
    //Inserir dados na tabela
    /*await db.run(`
        INSERT INTO orphanages (
            lat,
            lng,
            name,
            about,
            whatsapp,
            images,
            instructions,
            opening_hour,
            open_on_weekends
        ) VALUES (
            "-27.233633",
            "-49.6455874",
            "Lar das meninas",
            "Presta assistência a crianças de 6 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social.",
            "27 99999-9999",
            "https://images.unsplash.com/photo-1598454444427-8bffa498b6f2?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
            "Venha como se sentir a vontade e traga muito amor e paciência para dar.",
            "Horário de visitas Das 18h até 8h",
            "0"
        );
    `);*/

    //await db.all("UPDATE orphanages SET open_on_weekends = '1' WHERE id = '1'");
    //await db.all("DELETE FROM orphanages");
    
    //Consultar dados da tabela
    const selectedOrphanages = await db.all("SELECT * FROM orphanages");
    console.log(selectedOrphanages);
});