ServerEvents.recipes(imc => {
    imc.remove({ id: 'justdirethings:creaturecatcher'})
    imc.shaped(
        Item.of('justdirethings:creaturecatcher', 1),
        [" B ","BAB"," B "],
        {
            "A":'supplementaries:cage',
            "B":'justdirethings:eclipsealloy_ingot'
        }
    )
})
