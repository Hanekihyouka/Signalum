ServerEvents.recipes(imc => {
    imc.remove({ id: 'mob_grinding_utils:recipe_mob_swab' })
    imc.remove({ id: 'mob_grinding_utils:recipe_fan' })
    imc.remove({ id: 'mob_grinding_utils:recipe_spikes' })
    imc.remove({ id: 'mob_grinding_utils:recipe_saw' })
    imc.remove({ id: 'mob_grinding_utils:recipe_absorption_hopper' })
    imc.remove({ id: 'mob_grinding_utils:recipe_saw_upgrade_looting' })
    imc.remove({ id: 'mob_grinding_utils:recipe_saw_upgrade_sharpness' })
    imc.remove({ id: 'mob_grinding_utils:recipe_tintedglass' })
    imc.shaped(
        Item.of('mob_grinding_utils:mob_swab', 1),
        ["  A"," B ","A  "],
        {
            "A":{"tag": "minecraft:wool"},
            "B":'mekanism:hdpe_stick'
        }
    )
    imc.shaped(
        Item.of('mob_grinding_utils:fan', 1),
        ["ADA","BCB","ABA"],
        {
            "A":'create:sturdy_sheet',
            "B":{"tag": "c:plates/iron"},
            "C":'create:encased_fan',
            "D":'create:electron_tube'
        }
    )
    imc.shaped(
        Item.of('mob_grinding_utils:spikes', 1),
        [" A ","ABA","   "],
        {
            "A":'createaddition:barbed_wire',
            "B":{"tag": "c:storage_blocks/steel"}
        }
    )
    imc.shaped(
        Item.of('mob_grinding_utils:saw', 1),
        [" A ","BCB","ADA"],
        {
            "A":'minecraft:diamond',
            "B":'mob_grinding_utils:spikes',
            "C":'create:crushing_wheel',
            "D":'create:electron_tube'
        }
    )
    imc.shapeless(
        Item.of('mob_grinding_utils:absorption_hopper', 1),
        ['itemcollectors:basic_collector','mob_grinding_utils:tank_sink']
    )
    imc.shaped(
        Item.of('mob_grinding_utils:saw_upgrade_sharpness', 1),
        ["GSG","SRS","GSG"],
        {
            "S":'twilightforest:glass_sword',
            "G":{"tag": "c:nuggets/gold"},
            "R":{"tag": "c:dusts/redstone"}
        }
    )
    imc.shaped(
        Item.of('mob_grinding_utils:saw_upgrade_looting', 1),
        ["GSG","SRS","GSG"],
        {
            "S":'ae2:fluix_pearl',
            "G":{"tag": "c:nuggets/gold"},
            "R":{"tag": "c:dusts/redstone"}
        }
    )
    imc.shapeless(
        Item.of('mob_grinding_utils:tinted_glass', 4),
        ['minecraft:tinted_glass','create:sturdy_sheet']
    )
})
