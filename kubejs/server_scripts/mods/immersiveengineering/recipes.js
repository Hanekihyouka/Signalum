ServerEvents.recipes(imc => {
    function crusher(input, energy, output) {imc.custom({
        type: "immersiveengineering:crusher",
        energy: energy,
        input: Ingredient.of(input).toJson(),
        result: {
            basePredicate: {
                item: output.item
            },
            count: output.count
        }
        }
    )}

    crusher('#ae2:all_certus_quartz',2400, {item: 'ae2:certus_quartz_dust', count: 1})
    crusher('ae2:fluix_crystal', 2400, {item: 'ae2:fluix_dust', count: 1})
    crusher('ae2:sky_stone_block', 2400, {item: 'ae2:sky_dust', count: 1})
    crusher('#c:ender_pearls', 2400, {item: 'ae2:ender_dust', count: 1})
    
    function arcfurnace(input, additives, energy, output) {imc.custom({
        type: "immersiveengineering:arc_furnace",
        additives: additives,
        energy: energy,
        input: Ingredient.of(input).toJson(),
        results: [
        {
            basePredicate: {
            item: output.item
            },
            count: output.count || 1
        }
        ],
        slag: output.slag != null ? Ingredient.of(output.slag).toJson() : Ingredient.of("-").toJson(),
        time: 100
        }).id(`imc:arcfurnace/${input.replace(/^.*?:/, '')}_to_${output.item.replace(/^.*?:/, '')}`)
    }
    
    arcfurnace('minecraft:ender_pearl', [{item: 'ae2:fluix_dust'}], 51200, {item: 'ae2:fluix_pearl'})
    arcfurnace('#ae2:quartz_sword', [{item: 'amethyst_shard'}], 51200, {item: 'twilightforest:glass_sword'})
    arcfurnace('create:blaze_cake', [{item: 'cataclysm:music_disc_ignis'}], 51200, {item: 'create:creative_blaze_cake'})
    arcfurnace('createaddition:chocolate_cake', [{item: 'twilightforest:lamp_of_cinders'}], 51200, {item: 'create:creative_blaze_cake'})
    arcfurnace('justdirethings:raw_ferricore', [], 51200, {item: 'justdirethings:ferricore_ingot', count: 3})
    arcfurnace('justdirethings:raw_blazegold', [], 51200, {item: 'justdirethings:blazegold_ingot', count: 3})
    arcfurnace('justdirethings:raw_eclipsealloy', [], 51200, {item: 'justdirethings:eclipsealloy_ingot', count: 3})
    
    imc.remove({ id: 'twilightforest:equipment/fiery_ingot_crafting' })
    arcfurnace('minecraft:iron_ingot', [{tag: 'twilightforest:fiery_vial'}], 51200, {item: 'twilightforest:fiery_ingot'})
//    arcfurnace('', [], 51200, {item: ''})

    imc.remove({ id: 'immersiveengineering:crafting/blastbrick' })
    imc.remove({ id: 'immersiveengineering:crafting/hammer' })
    imc.remove({ id: 'immersiveengineering:crafting/wirecutter' })
    imc.remove({ id: 'immersiveengineering:crafting/railgun' })
    imc.shaped(
        Item.of('immersiveengineering:blastbrick', 12),
        ["ABA","BCB","ABA"],
        {
            "A":{"tag":"c:bricks/nether"},
            "B":'create:cinder_flour',
            "C":'justdirethings:blazegold_ingot'
        }
    )
    imc.shaped(
        Item.of('immersiveengineering:blastbrick', 3),
        ["AAA","ACA","AAA"],
        {
            "A":{"tag":"c:bricks/nether"},
            "C":'create:blaze_cake'
        }
    )
    imc.shaped(
        Item.of('immersiveengineering:hammer', 1),
        [" A "," BA","B  "],
        {
            "A":'create:andesite_alloy',
            "B":{"tag":"c:rods/wooden"}
        }
    )
    imc.shaped(
        Item.of('immersiveengineering:wirecutter', 1),
        ["A A"," C ","B B"],
        {
            "A":'create:andesite_alloy',
            "B":{"tag":"c:rods/wooden"},
            "C":'create:cogwheel'
        }
    )
    imc.shaped(
        Item.of('immersiveengineering:railgun', 1),
        ["FAF","CDC","EBE"],
        {
            "A":'immersiveengineering:capacitor_hv',
            "B":'immersiveengineering:toolupgrade_skyhook_insulation',
            "C":'mekanismgenerators:electromagnetic_coil',
            "D":'create:potato_cannon',
            "E":'immersiveengineering:component_electronic_adv',
            "F":'immersiveengineering:radiator'
        }
    )
// 石墨电极
    imc.custom({
        "type": "immersiveengineering:bottling_machine",
        "fluid": {
            "amount": 1000,
            "fluid": "justdirethings:time_fluid_source",
        },
        "inputs": [
            {
            "item": "immersiveengineering:graphite_electrode"
            }
        ],
        "results": [
            {
            "id": "immersiveengineering:graphite_electrode",
            "components": {"minecraft:unbreakable":{}}
            }
        ]
    })
    imc.custom({
        "type": "immersiveengineering:bottling_machine",
        "fluid": {
            "amount": 1,
            "fluid": "industrialforegoing:ether_gas",
        },
        "inputs": [
            {
            "item": "mekanism:dust_coal"
            }
        ],
        "results": [
            {
            "id": "immersiveengineering:graphite_electrode"
            }
        ]
    })
})
