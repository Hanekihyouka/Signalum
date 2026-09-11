ServerEvents.recipes(imc => {
    imc.remove({ id: 'mekanism:cardboard_box' })
// casing & frame
    imc.remove({ id: 'mekanism:steel_casing' })
    imc.shaped(
        Item.of('mekanism:steel_casing', 1),
        ["SGS","GOG","SGS"],
        {
            "G":'create:sturdy_sheet',
            "O":'create:precision_mechanism',
            "S":{"tag":"c:ingots/steel"}
        }
    )
    imc.shaped(
        Item.of('mekanism:steel_casing', 4),
        ["SGS","GOG","SGS"],
        {
            "G":'create:sturdy_sheet',
            "O":{"tag":"twilightforest:trophies"},
            "S":{"tag":"c:ingots/steel"}
        }
    )
// basic materials
    imc.remove({ id: 'mekanism:energy_tablet' })
    imc.shaped(
        Item.of('mekanism:energy_tablet', 1),
        ["RIR","AIA","RIR"],
        {
            "A":{"tag":"mekanism:alloys/infused"},
            "I":'justdirethings:blazegold_ingot',
            "R":'create:polished_rose_quartz'
        }
    )
    imc.remove({ id: 'mekanism:upgrade/anchor' })
    imc.shaped(
        Item.of('mekanism:upgrade_anchor', 1),
        ["AAA","ABA","AAA"],
        {
            "A":'justdirethings:eclipsealloy_ingot',
            "B":{"tag":"twilightforest:trophies"}
        }
    )
    imc.remove({ id: 'mekanism:upgrade/speed' })
    imc.shaped(
        Item.of('mekanism:upgrade_speed', 1),
        [" C ","ABA"," C "],
        {
            "A":{"tag":"mekanism:alloys/infused"},
            "B":'create:precision_mechanism',
            "C":'immersiveengineering:coil_lv'
        }
    )
    imc.shaped(
        Item.of('mekanism:upgrade_speed', 8),
        [" C ","ABA"," C "],
        {
            "A":'justdirethings:celestigem',
            "B":{"tag":"twilightforest:trophies"},
            "C":'immersiveengineering:coil_lv'
        }
    )
    imc.remove({ id: 'mekanism:upgrade/energy' })
    imc.shaped(
        Item.of('mekanism:upgrade_energy', 8),
        [" C ","ABA"," C "],
        {
            "A":'justdirethings:celestigem',
            "B":'immersiveengineering:component_electronic_adv',
            "C":'immersiveengineering:coil_lv'
        }
    )
    imc.shaped(
        Item.of('mekanism:upgrade_energy', 8),
        [" C ","ABA"," C "],
        {
            "A":'justdirethings:eclipsealloy_ingot',
            "B":{"tag":"twilightforest:trophies"},
            "C":'immersiveengineering:coil_lv'
        }
    )

//mekCrushing({item: 'mod:item', count: 0}, {item/tag: 'mod:item/tag', count: 0}, 'id');
    function mekCrushing(output, input, id) {
        let inputObject = {
            "count": input.count || 1
        };

        if (input.item) {
            inputObject["item"] = input.item;
        } else if (input.tag) {
            inputObject["tag"] = input.tag;
        }

        let recipe = {
            "type": "mekanism:crushing",
            "input": inputObject,
            "output": {
            "count": output.count || 1,
            "id": output.item
            }
        };

        imc.custom(recipe).id(`imc:mekanism/crushing/${id}`);
    }
    mekCrushing(
        {item: 'mekanism:dust_sulfur'},
        {item: 'minecraft:blaze_powder'},
        'blaze_powder_to_sulfur'
    )
    mekCrushing(
        {item: 'mekanism:dust_sulfur', count:8},
        {item: 'biomesoplenty:brimstone'},
        'brimstone_to_sulfur'
    )
    mekCrushing(
        {item: 'mekanism:dust_sulfur', count:2},
        {item: 'twilightforest:torchberries', count:8},
        'torchberries_to_sulfur'
    )
    mekCrushing(
        {item: 'immersiveengineering:dust_coke', count:9},
        {item: 'immersiveengineering:coke'},
        'coke_to_dust'
    )
    mekCrushing(
        {item: 'immersiveengineering:dust_coke'},
        {item: 'immersiveengineering:coal_coke'},
        'coal_coke_to_dust'
    )
    
// machines
    imc.remove({ id: 'mekanism:energized_smelter' })
    imc.remove({ id: 'mekanism:enrichment_chamber' })
    imc.remove({ id: 'mekanism:crusher' })
    imc.remove({ id: 'mekanism:osmium_compressor' })
    imc.remove({ id: 'mekanism:combiner' })
    imc.remove({ id: 'mekanism:metallurgic_infuser' })
    imc.remove({ id: 'mekanism:precision_sawmill' })
    imc.remove({ id: 'mekanism:quantum_entangloporter' })
    imc.remove({ id: 'entangled:block' })
    imc.remove({ id: 'mekmm:large_heat_generator' })
    
    imc.shaped(
        Item.of('mekanism:energized_smelter', 1),
        ["ACA","GXG","ACA"],
        {
            "A":'create:polished_rose_quartz',
            "C":{"tag":"c:circuits/basic"},
            "G":'create:blaze_burner',
            "X":'mekanism:steel_casing'
        }
    )
    imc.shaped(
        Item.of('mekanism:enrichment_chamber', 1),
        ["ACA","IXI","ACA"],
        {
            "A":'create:polished_rose_quartz',
            "C":{"tag":"c:circuits/basic"},
            "I":'create:encased_fan',
            "X":'mekanism:steel_casing'
        }
    )
    imc.shaped(
        Item.of('mekanism:crusher', 1),
        ["RCR","BXB","RCR"],
        {
            "B":'create:crushing_wheel',
            "C":{"tag":"c:circuits/basic"},
            "R":'create:polished_rose_quartz',
            "X":'mekanism:steel_casing'
        }
    )
    imc.shaped(
        Item.of('mekanism:osmium_compressor', 1),
        ["ACA","BXB","ACA"],
        {
            "A":{"tag":"mekanism:alloys/infused"},
            "B":'create:mechanical_press',
            "C":{"tag":"c:circuits/advanced"},
            "X":'mekanism:steel_casing'
        }
    )
    imc.shaped(
        Item.of('mekanism:combiner', 1),
        ["ACA","SXS","ACA"],
        {
            "A":{"tag":"mekanism:alloys/reinforced"},
            "C":{"tag":"c:circuits/elite"},
            "X":'mekanism:steel_casing',
            "S":'create:mechanical_mixer'
        }
    )
    imc.shaped(
        Item.of('mekanism:metallurgic_infuser', 1),
        ["RAR","BCB","RAR"],
        {
            "A":'create:blaze_burner',
            "B":'justdirethings:blazegold_ingot',
            "C":'mekanism:steel_casing',
            "R":'create:polished_rose_quartz'
        }
    )
    imc.shaped(
        Item.of('mekanism:precision_sawmill', 1),
        ["RCR","AXA","RCR"],
        {
            "A":'create:mechanical_saw',
            "C":{"tag":"c:circuits/basic"},
            "R":'create:polished_rose_quartz',
            "X":'mekanism:steel_casing'
        }
    )
    imc.shaped(
        Item.of('mekanism:quantum_entangloporter', 1),
        ["ICI","ATA","ICI"],
        {
            "A":{"tag":"mekanism:alloys/atomic"},
            "C":{"tag":"c:circuits/ultimate"},
            "I":{"tag":"c:ingots/refined_obsidian"},
            "T":'entangled:block'
        }
    )
    imc.shaped(
        Item.of('entangled:block', 1),
        ["ABA","BCB","ABA"],
        {
            "A": 'create:copper_casing',
            "B": 'ae2:fluix_pearl',
            "C": 'functionalstorage:ender_drawer'
        }
    )
    imc.shaped(
        Item.of('mekmm:large_heat_generator', 1),
        ["ABA","DCD","ABA"],
        {
            "A": 'twilightforest:fiery_block',
            "B": 'mekanism:superheating_element',
            "C": 'mekanism:robit',
            "D": 'mekmm:ultimate_max_chemical_tank'
        }
    )
})
