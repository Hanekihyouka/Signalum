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
// 化学氧化
    imc.custom({"type":"mekanism:oxidizing","input":{"count":1,"item":"minecraft:end_stone"},"output":{"amount":120,"id":"mekanismgenerators:tritium"}})
    imc.custom({"type":"mekanism:oxidizing","input":{"count":1,"item":"minecraft:dragon_breath"},"output":{"amount":1600,"id":"mekanismgenerators:tritium"}})
    imc.custom({"type":"mekanism:oxidizing","input":{"count":1,"item":"apothic_enchanting:infused_breath"},"output":{"amount":32000,"id":"mekanismgenerators:tritium"}})
    imc.custom({"type":"mekanism:oxidizing","input":{"count":1,"item":"kaleidoscope_cookery:oolong"},"output":{"amount":10800,"id":"mekanismgenerators:tritium"}})
// 融合机
// 货币转换
    imc.custom({"type":"mekanism:combining","extra_input":{"count":1,"item":"magic_coins:silver_coin"},"main_input":{"count":10,"item":"magic_coins:gold_coin"},"output":{"count":1,"id":"magic_coins:crystal_coin"}})
    imc.custom({"type":"mekanism:combining","extra_input":{"count":1,"item":"magic_coins:silver_coin"},"main_input":{"count":10,"item":"magic_coins:silver_coin"},"output":{"count":1,"id":"magic_coins:gold_coin"}})
    imc.custom({"type":"mekanism:combining","extra_input":{"count":1,"item":"minecraft:golden_apple"},"main_input":{"count":64,"item":"magic_coins:gold_coin"},"output":{"count":1,"id":"minecraft:enchanted_golden_apple"}})
// 粉碎
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
// 货币转换
    mekCrushing(
        {item: 'magic_coins:silver_coin', count:10},
        {item: 'magic_coins:gold_coin'},
        'coin_gold_to_silver'
    )
    mekCrushing(
        {item: 'magic_coins:gold_coin', count:9},
        {item: 'magic_coins:crystal_coin'},
        'coin_crystal_to_gold'
    )
// --- ---
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
    mekCrushing(
        {item: 'mekanism:fluorite_gem', count:12},
        {item: 'minecraft:glowstone_dust'},
        'glowstone_dust_to_fluorite'
    )
    mekCrushing(
        {item: 'mekanism:fluorite_gem', count:48},
        {item: 'minecraft:glowstone'},
        'glowstone_to_fluorite'
    )
    mekCrushing(
        {item: 'immersiveengineering:slag', count:16},
        {item: 'create:scoria'},
        'scoria_to_slag'
    )
    mekCrushing(
        {item: 'create:cinder_flour', count:16},
        {item: 'minecraft:netherrack'},
        'netherrack_to_cinder_flour'
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
// uu
    // imc.remove({ id: 'mekmm:recycler/from_dirt' })
    // imc.remove({ id: 'mekmm:recycler/from_stone' })
    imc.remove({ id: 'mekmm:recycler/from_substrate' })
    imc.remove({ id: 'mekmm:compressing/scrap_box' })
    imc.remove({ id: 'mekmm:reaction/empty_crystal' })
    imc.remove({ id: 'mekmm:nucleosynthesizing/uu_matter' })
    imc.custom({
        "type": "mekmm:recycler",
        "input": {
            "count": 1,
            "item": "mekanism:substrate"
        },
        "chance": 1,
        "output": {
            "count": 16,
            "id": "mekmm:scrap"
        }
    })
    imc.custom({
        "type": "mekmm:recycler",
        "input": {
            "count": 1,
            "item": "industrialforegoing:fertilizer"
        },
        "chance": 1,
        "output": {
            "count": 64,
            "id": "mekmm:scrap"
        }
    })
    imc.custom({
        "type": "mekanism:compressing",
        "chemical_input": {
            "amount": 1,
            "chemical": "mekanism:osmium"
        },
        "item_input": {
            "count": 8,
            "item": "mekmm:scrap"
        },
        "output": {
            "count": 1,
            "id": "mekmm:scrap_box"
        },
        "per_tick_usage": true
    })
    imc.custom({
        "type": "mekanism:compressing",
        "chemical_input": {
            "amount": 1,
            "chemical": "mekanism:osmium"
        },
        "item_input": {
            "count": 1,
            "item": "industrialforegoing:fertilizer"
        },
        "output": {
            "count": 4,
            "id": "mekmm:scrap_box"
        },
        "per_tick_usage": true
    })
    imc.custom({
        "type": "mekanism:reaction",
        "chemical_input": {
            "amount": 400,
            "chemical": "mekmm:unstable_dimensional_gas"
        },
        "chemical_output": {
            "amount": 1000,
            "id": "mekanismgenerators:tritium"
        },
        "duration": 1500,
        "fluid_input": {
            "amount": 400,
            "tag": "c:fusion_fuel"
        },
        "item_input": {
            "count": 4,
            "item": "mekmm:scrap_box"
        },
        "item_output": {
            "count": 1,
            "id": "mekmm:empty_crystal"
        }
    })
    imc.custom({
        "type": "mekanism:reaction",
        "chemical_input": {
            "amount": 8000,
            "chemical": "mekmm:unstable_dimensional_gas"
        },
        "chemical_output": {
            "amount": 400,
            "id": "mekanism:nuclear_waste"
        },
        "duration": 1500,
        "fluid_input": {
            "amount": 8000,
            "tag": "c:fusion_fuel"
        },
        "item_input": {
            "count": 1,
            "item": "mekmm:empty_crystal"
        },
        "item_output": {
            "count": 3,
            "id": "mekmm:empty_crystal"
        }
    })
    imc.custom({
        "type": "mekanism:nucleosynthesizing",
        "chemical_input": {
            "amount": 2,
            "chemical": "mekanism:antimatter"
        },
        "duration": 5000,
        "item_input": {
            "count": 1,
            "item": "mekmm:empty_crystal"
        },
        "output": {
            "count": 1,
            "id": "mekmm:uu_matter"
        },
        "per_tick_usage": false
    })
})
