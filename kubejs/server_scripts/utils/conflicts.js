ServerEvents.recipes(imc => {
    imc.remove({ id: 'supplementaries:item_shelf' })
    imc.remove({ id: 'ironfurnaces:upgrades/upgrade_allthemodium' })
    imc.remove({ id: 'simulated:spring' })
    imc.remove({ id: 'immersiveengineering:smoking/clinker_brick' })
    imc.shaped(
        Item.of('supplementaries:item_shelf', 3),
        ["ABA"],
        {
            "A":{"tag": "minecraft:planks"},
            "B":{"tag": "minecraft:wooden_slabs"}
        }
    )
    imc.shaped(
        Item.of('simulated:spring', 1),
        ["ABA"],
        {
            "A":'createaddition:iron_wire',
            "B":'minecraft:iron_ingot'
        }
    )
    imc.shaped(
        Item.of('immersiveengineering:clinker_brick', 4),
        ["AB ","BA "],
        {
            "A":'minecraft:nether_brick',
            "B":'minecraft:brick'
        }
    )
})
