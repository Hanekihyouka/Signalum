ServerEvents.recipes(imc => {
    imc.remove({ id: 'industrialforegoing:machine_frame_pity' })
    imc.remove({ id: 'industrialforegoing:latex_processing_unit' })
    imc.remove({ id: 'industrialforegoing:fluid_extractor' })
    imc.remove({ id: 'industrialforegoing:mob_imprisonment_tool' })
    imc.shaped(
        Item.of('industrialforegoing:machine_frame_pity', 1),
        [
            "WIW",
            "IRI",
            "WIW"
        ],
        {
            "I": {"tag": "c:ingots/steel"},
            "R": 'mekanism:steel_casing',
            "W": {"tag": "immersiveengineering:treated_wood"}
        }
    )
    imc.shaped(
        Item.of('industrialforegoing:latex_processing_unit', 1),
        [
            "IGI",
            "BMB",
            "IFI"
        ],
        {
            "B": 'minecraft:bucket',
            "F": 'mekanism:energized_smelter',
            "G": 'create:electron_tube',
            "I": 'mekanism:hdpe_sheet',
            "M": {"tag": "industrialforegoing:machine_frame/pity"}
        }
    )
    imc.shaped(
        Item.of('industrialforegoing:fluid_extractor', 1),
        [
            "IGI",
            "BMB",
            "IFI"
        ],
        {
            "B": 'mekanism:electric_pump',
            "F": 'mekanism:enrichment_chamber',
            "G": 'create:electron_tube',
            "I": 'mekanism:hdpe_sheet',
            "M": {"tag": "industrialforegoing:machine_frame/pity"}
        }
    )
    imc.shaped(
        Item.of('industrialforegoing:mob_imprisonment_tool', 1),
        [" B ","BAB"," B "],
        {
            "A":'justdirethings:creaturecatcher',
            "B":'industrialforegoing:pink_slime_ingot'
        }
    )
    
})
