ServerEvents.recipes(imc => {
    imc.remove({ id: 'ae2:misc/fluixpearl' })
    imc.remove({ id: 'ae2:network/blocks/controller' })
    imc.remove({ id: 'ae2:materials/cardcrafting'})
    imc.remove({ id: 'ae2:network/cells/item_storage_components_cell_1k_part'})
    imc.remove({ id: 'ae2:network/cells/item_storage_components_cell_4k_part'})
    imc.remove({ id: 'ae2:network/cells/item_storage_components_cell_16k_part'})
    imc.remove({ id: 'ae2:network/cells/item_storage_components_cell_64k_part'})
    imc.remove({ id: 'ae2:network/cells/item_storage_components_cell_256k_part'})
    imc.shaped(
        Item.of('ae2:controller', 1),
        ["ABA","BCB","ABA"],
        {
            "A":'ae2:smooth_sky_stone_block',
            "B":'justdirethings:ferricore_ingot',
            "C":'ae2:fluix_pearl'
        }
    )
    imc.shaped(
        Item.of('ae2:cell_component_1k', 1),
        ["ABA","BCB","ABA"],
        {
            "A":'minecraft:copper_ingot',
            "B":{"tag": "c:gems/certus_quartz"},
            "C":'ae2:logic_processor'
            
        }
    )
    imc.shaped(
        Item.of('ae2:cell_component_4k', 1),
        ["ABA","BCB","ABA"],
        {
            "A":'minecraft:iron_ingot',
            "B":'ae2:cell_component_1k',
            "C":'ae2:logic_processor'
            
        }
    )
    imc.shaped(
        Item.of('ae2:cell_component_16k', 1),
        ["ABA","BCB","ABA"],
        {
            "A":'minecraft:gold_ingot',
            "B":'ae2:cell_component_4k',
            "C":'ae2:logic_processor'
            
        }
    )
    imc.shaped(
        Item.of('ae2:cell_component_64k', 1),
        ["ABA","BCB","ABA"],
        {
            "A":{"tag": "c:ingots/steel"},
            "B":'ae2:cell_component_16k',
            "C":'ae2:logic_processor'
            
        }
    )
    imc.shaped(
        Item.of('ae2:cell_component_256k', 1),
        ["ABA","BCB","ABA"],
        {
            "A":'mekanism:ingot_refined_obsidian',
            "B":'ae2:cell_component_64k',
            "C":'ae2:logic_processor'
            
        }
    )
    imc.remove({ id: 'ae2:network/blocks/interfaces_interface' })
    imc.remove({ id: 'ae2:network/blocks/pattern_providers_interface' })
    imc.remove({ id: 'ae2:network/parts/export_bus' })
    imc.remove({ id: 'ae2:network/parts/import_bus' })
    imc.shaped(
        Item.of('ae2:interface', 1),
        ["ABA","XCY","ABA"],
        {
            "A":{"tag": "c:ingots/iron"},
            "B":'mekanism:ingot_refined_obsidian',
            "C":'mekanism:steel_casing',
            "X":'ae2:annihilation_core',
            "Y":'ae2:formation_core'
        }
    )
    imc.shaped(
        Item.of('ae2:pattern_provider', 1),
        ["ABA","XCY","ABA"],
        {
            "A":{"tag": "c:ingots/iron"},
            "B":'mekanism:ingot_refined_glowstone',
            "C":'mekanism:steel_casing',
            "X":'ae2:annihilation_core',
            "Y":'ae2:formation_core'
        }
    )
    imc.shaped(
        Item.of('ae2:export_bus', 1),
        ["ABA"," C "],
        {
            "A":{"tag": "c:ingots/steel"},
            "B":'minecraft:piston',
            "C":'ae2:formation_core'
        }
    )
    imc.shaped(
        Item.of('ae2:import_bus', 1),
        ["ABA"," C "],
        {
            "A":{"tag": "c:ingots/steel"},
            "B":'minecraft:piston',
            "C":'ae2:annihilation_core'
        }
    )
})
