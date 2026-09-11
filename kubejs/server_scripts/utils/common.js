let allthelogs = []
let alltheleaves = []
let allthesaplings = []

function copyObjectIds(objectIds){
    let returnStringList = []
    objectIds.forEach(aaa =>{
        returnStringList.push(aaa)
    })
    return returnStringList
}

ServerEvents.tags('item', event => {
    event.add('c:crops/eggplant', 'minecraft:beetroot')
    event.add('c:crops/eggplant', 'kaleidoscope_cookery:tomato')
    event.add('c:doughs', 'kaleidoscope_cookery:raw_dough')
    event.add('c:crops/corn', 'minecraft:cocoa_beans')
    event.add('c:foods/tofu', 'minecraft:slime_ball')
    event.add('c:foods/raw_fishes', '#c:foods/safe_raw_fish')
    event.add('c:foods/raw_meats','#c:foods/raw_meat')
  //chancecubes roll items
    const ChancecubesBlackList = ["minecraft:trial_spawner","moonlight:spawn_box","quark:monster_box","mekanism:creative_energy_cube","mekanism:creative_chemical_tank","mekanism:creative_bin","mekanism:creative_fluid_tank","chancecubes:creative_pendant","chancecubes:cube_dispenser","chancecubes:reward_selector_pendant","powertool:slim_item_supplier","powertool:item_supplier","powertool:command_block","powertool:register","powertool:gorgeous_register","powertool:mechanical_register","powertool:tech_register","powertool:safe","powertool:gorgeous_safe","powertool:mechanical_safe","powertool:tech_safe","powertool:bezier_curve_block","powertool:useless_stick","powertool:power_supply","powertool:command_rune","powertool:display_mode_tool","powertool:static_mode_tool","powertool:cached_mode_tool","powertool:texture_extractor","simulated:creative_physics_staff","create:handheld_worldshaper","create:creative_motor","create:creative_fluid_tank","create:creative_crate","immersiveengineering:capacitor_creative","ae2:creative_storage_cell","ae2:creative_energy_cell","functionalstorage:creative_vending_upgrade","createaddition:creative_energy","sophisticatedstorage:infinity_upgrade","sophisticatedstorage:survival_infinity_upgrade","sophisticatedbackpacks:infinity_upgrade","sophisticatedbackpacks:survival_infinity_upgrade","touhou_little_maid:owner_conversion_tool","#randomium:blacklist","twilightforest:sinister_spawner","ftbechoes:echo_projector","ftbquests:barrier","ftbquests:stage_stage_barrier","ftbquests:detector","ftblibrary:icon_item","twilightforest:uncrafting_table","sophisticatedbackpacks:mob_catcher_upgrade","sophisticatedbackpacks:advanced_mob_catcher_upgrade","#create:table_cloths","create:repackager","create:item_drain"]
    
    ChancecubesBlackList.forEach(item =>{
        event.add('chancecubes:blacklist', item)
    })
    
    const logs = event.get('minecraft:logs').getObjectIds()
    const leaves = event.get('minecraft:leaves').getObjectIds()
    const saplings = event.get('minecraft:saplings').getObjectIds()
    allthelogs = copyObjectIds(logs)
    alltheleaves = copyObjectIds(leaves)
    allthesaplings = copyObjectIds(saplings)
    
    // All the foods
    Ingredient.all.getItemIds().forEach(i => {
        if(Item.of(i).getPrototype().get("minecraft:food")){
            event.add('c:foods', i)
        }
    })
})

ServerEvents.recipes(imc => {

// 树苗木头互换
    allthelogs.forEach(a =>{
        imc.stonecutting(a,'#minecraft:logs')
    })
    alltheleaves.forEach(a =>{
        imc.stonecutting(a,'#minecraft:leaves')
    })
    allthesaplings.forEach(a =>{
        imc.stonecutting(a,'#minecraft:saplings')
    })
// 蛙鸣灯互换
    imc.stonecutting(
        'minecraft:verdant_froglight',
        'minecraft:ochre_froglight'
    )
    imc.stonecutting(
        'minecraft:pearlescent_froglight',
        'minecraft:ochre_froglight'
    )
    imc.stonecutting(
        'minecraft:ochre_froglight',
        'minecraft:verdant_froglight'
    )
    imc.stonecutting(
        'minecraft:pearlescent_froglight',
        'minecraft:verdant_froglight'
    )
    imc.stonecutting(
        'minecraft:verdant_froglight',
        'minecraft:pearlescent_froglight'
    )
    imc.stonecutting(
        'minecraft:ochre_froglight',
        'minecraft:pearlescent_froglight'
    )
// --- 钢互换 ---
    imc.stonecutting(
        'immersiveengineering:nugget_steel',
        '#c:nuggets/steel'
    )
    imc.stonecutting(
        'mekanism:nugget_steel',
        '#c:nuggets/steel'
    )
    imc.stonecutting(
        'immersiveengineering:ingot_steel',
        '#c:ingots/steel'
    )
    imc.stonecutting(
        'mekanism:ingot_steel',
        '#c:ingots/steel'
    )
    imc.stonecutting(
        'immersiveengineering:storage_steel',
        '#c:storage_blocks/steel'
    )
    imc.stonecutting(
        'mekanism:block_steel',
        '#c:storage_blocks/steel'
    )
// --- 食物互换 ---
    imc.stonecutting(
        'mekanism:salt',
        'kaleidoscope_chinesefood:salt'
    )
    imc.stonecutting(
        'kaleidoscope_chinesefood:salt',
        'mekanism:salt'
    )
    imc.stonecutting(
        'kaleidoscope_cookery:flour',
        'create:wheat_flour'
    )
    imc.stonecutting(
        'create:wheat_flour',
        'kaleidoscope_cookery:flour'
    )
    imc.stonecutting(
        'kaleidoscope_cookery:rice_panicle',
        'farmersdelight:rice_panicle'
    )
    imc.stonecutting(
        'farmersdelight:rice_panicle',
        'kaleidoscope_cookery:rice_panicle'
    )
    imc.stonecutting(
        'farmersdelight:rice',
        'kaleidoscope_cookery:rice'
    )
    imc.stonecutting(
        'kaleidoscope_cookery:rice',
        'farmersdelight:rice'
    )
    imc.stonecutting(
        'kaleidoscope_cookery:cooked_rice',
        'farmersdelight:cooked_rice'
    )
    imc.stonecutting(
        'farmersdelight:cooked_rice',
        'kaleidoscope_cookery:cooked_rice'
    )
    imc.stonecutting(
        'kaleidoscope_cookery:lettuce',
        'farmersdelight:cabbage'
    )
    imc.stonecutting(
        'farmersdelight:cabbage',
        'kaleidoscope_cookery:lettuce'
    )
    imc.stonecutting(
        'farmersdelight:tomato',
        'kaleidoscope_cookery:tomato'
    )
    imc.stonecutting(
        'kaleidoscope_cookery:tomato',
        'farmersdelight:tomato'
    )
    imc.stonecutting(
        'kaleidoscope_cookery:fried_egg',
        'farmersdelight:fried_egg'
    )
    imc.stonecutting(
        'farmersdelight:fried_egg',
        'kaleidoscope_cookery:fried_egg'
    )
// 沙子互换
    imc.stonecutting(
        'minecraft:sand',
        '#c:sands'
    )
    imc.stonecutting(
        'minecraft:red_sand',
        '#c:sands'
    )
    imc.stonecutting(
        'biomesoplenty:white_sand',
        '#c:sands'
    )
    imc.stonecutting(
        'biomesoplenty:orange_sand',
        '#c:sands'
    )
    imc.stonecutting(
        'biomesoplenty:black_sand',
        '#c:sands'
    )
// --- ---
    imc.remove({ id: 'kaleidoscope_doll:tweaks_tool' })
    imc.remove({ id: 'buildinggadgets2:gadget_destruction' })
    imc.remove({ id: 'buildinggadgets2:gadget_cut_paste' })
    imc.remove({ id: 'explorerscompass:explorers_compass' })
    imc.remove({ id: 'sophisticatedbackpacks:mob_catcher_upgrade' })
    imc.remove({ id: 'sophisticatedbackpacks:advanced_mob_catcher_upgrade' })
    imc.remove({ id: 'sophisticatedstorage:controller' })
    imc.remove({ id: 'sophisticatedstorage:storage_input' })
    imc.remove({ id: 'sophisticatedstorage:storage_output' })
    imc.remove({ id: 'sophisticatedstorage:storage_io' })
    imc.remove({ id: 'sophisticatedstorage:storage_link' })
    imc.remove({ id: 'sophisticatedstorage:storage_link_from_controller' })
    imc.remove({ id: 'minecraft:storage_input_from_io' })
    imc.remove({ id: 'minecraft:storage_io_from_output' })
    imc.remove({ id: 'minecraft:storage_output_from_input' })
    imc.shaped(
        Item.of('explorerscompass:explorerscompass', 1),
        [" B ","ACA"," A "],
        {
            "A":{"tag": "c:ingots/steel"},
            "B":"twilightforest:magic_map_focus",
            "C":"ae2:meteorite_compass"
        }
    )
    imc.shaped(
        Item.of('minecraft:end_portal_frame', 1),
        ["ABA","BCB","ABA"],
        {
            "A":"mekanism:quantum_entangloporter",
            "B":"apothic_enchanting:infused_breath",
            "C":"mekanism:pellet_antimatter"
        }
    )
    imc.shaped(
        Item.of('supplementaries:globe', 1),
        [" C ","CAC"," B "],
        {
            "A":"immersiveengineering:balloon",
            "B":"supplementaries:turn_table",
            "C":"mekanism:dye_base"
        }
    )
    imc.shaped(
        Item.of('sophisticatedstorage:controller', 1),
        ["ABA","BCB","ABA"],
        {
            "A":"create:brass_casing",
            "B":"create:electron_tube",
            "C":{"tag": "sophisticatedstorage:base_tier_wooden_storage"}
        }
    )
    imc.shapeless(
        Item.of('sophisticatedstorage:storage_input', 1),
        ["sophisticatedstorage:controller", "ae2:import_bus"]
    )
    imc.shapeless(
        Item.of('sophisticatedstorage:storage_output', 1),
        ["sophisticatedstorage:controller", "ae2:export_bus"]
    )
    imc.shapeless(
        Item.of('sophisticatedstorage:storage_io', 1),
        ["sophisticatedstorage:controller", "ae2:interface"]
    )
    imc.shapeless(
        Item.of('sophisticatedstorage:storage_link', 1),
        ["sophisticatedstorage:controller", "ae2:storage_bus"]
    )
    imc.shapeless(
        Item.of('kaleidoscope_cookery:oil', 16),
        ["minecraft:blaze_powder", "kaleidoscope_cookery:oil", "#c:raw_meats"]
    )
// --- power tool ---
    imc.shapeless(
        Item.of('powertool:item_display', 1),
        ["minecraft:item_frame", "create:sturdy_sheet"]
    )
    imc.shapeless(
        Item.of('powertool:glow_item_display', 1),
        ["minecraft:item_frame", "minecraft:glowstone_dust"]
    )
    imc.shaped(
        Item.of('powertool:trash_can', 1),
        ["A A"," A "],
        {
            "A":"minecraft:iron_bars"
        }
    )
    imc.shapeless(
        Item.of('powertool:white_trash_can', 1),
        ["powertool:trash_can", "minecraft:white_dye"]
    )
    imc.shapeless(
        Item.of('powertool:green_trash_can', 1),
        ["powertool:trash_can", "minecraft:green_dye"]
    )
    imc.shapeless(
        Item.of('powertool:gray_trash_can', 1),
        ["powertool:trash_can", "minecraft:gray_dye"]
    )
    imc.shapeless(
        Item.of('powertool:white_trash_can_cap', 1),
        ["minecraft:heavy_weighted_pressure_plate", "minecraft:white_dye"]
    )
    imc.shapeless(
        Item.of('powertool:green_trash_can_cap', 1),
        ["minecraft:heavy_weighted_pressure_plate", "minecraft:green_dye"]
    )
    // 固化方块
    const powertoolCosmeticBlocks = ["mangrove_trapdoor", "dark_oak_trapdoor", "birch_trapdoor", "jungle_trapdoor", "spruce_trapdoor", "acacia_trapdoor", "warped_trapdoor", "crimson_trapdoor", "bamboo_trapdoor", "oak_trapdoor", "cherry_trapdoor", "iron_trapdoor", "sand", "red_sand", "gravel", "tube_coral_block", "brain_coral_block", "bubble_coral_block", "fire_coral_block", "horn_coral_block", "redstone_block", "cartography_table", "crafting_table", "fletching_table", "smithing_table", "beacon", "enchanting_table", "stonecutter", "beehive", "furnace", "blast_furnace", "smoker", "barrel", "hopper", "campfire", "soul_campfire"]
    powertoolCosmeticBlocks.forEach(block =>{
        imc.shapeless(
            Item.of(`powertool:cosmetic_${block}`, 1),
            [`minecraft:${block}`, "minecraft:ice"]
        )
    })
    // create 桌布
    const createTableClothRecipe = ["andesite_table_cloth_clear","black_table_cloth_clear","black_table_cloth_from_other_table_cloth","black_table_cloth","blue_table_cloth_clear","blue_table_cloth_from_other_table_cloth","blue_table_cloth","brass_table_cloth_clear","brown_table_cloth_clear","brown_table_cloth_from_other_table_cloth","brown_table_cloth","copper_table_cloth_clear","cyan_table_cloth_clear","cyan_table_cloth_from_other_table_cloth","cyan_table_cloth","gray_table_cloth_clear","gray_table_cloth_from_other_table_cloth","gray_table_cloth","green_table_cloth_clear","green_table_cloth_from_other_table_cloth","green_table_cloth","light_blue_table_cloth_clear","light_blue_table_cloth_from_other_table_cloth","light_blue_table_cloth","light_gray_table_cloth_clear","light_gray_table_cloth_from_other_table_cloth","light_gray_table_cloth","lime_table_cloth_clear","lime_table_cloth_from_other_table_cloth","lime_table_cloth","magenta_table_cloth_clear","magenta_table_cloth_from_other_table_cloth","magenta_table_cloth","orange_table_cloth_clear","orange_table_cloth_from_other_table_cloth","orange_table_cloth","pink_table_cloth_clear","pink_table_cloth_from_other_table_cloth","pink_table_cloth","purple_table_cloth_clear","purple_table_cloth_from_other_table_cloth","purple_table_cloth","red_table_cloth_clear","red_table_cloth_from_other_table_cloth","red_table_cloth","white_table_cloth_clear","white_table_cloth_from_other_table_cloth","white_table_cloth","yellow_table_cloth_clear","yellow_table_cloth_from_other_table_cloth","yellow_table_cloth"]
    createTableClothRecipe.forEach(cloth =>{
        imc.remove({ id: `create:crafting/logistics/${cloth}` })
    })
    imc.remove({ id: "create:andesite_table_cloth_from_andesite_alloy_stonecutting" })
    imc.remove({ id: "create:brass_table_cloth_from_ingots_brass_stonecutting" })
    imc.remove({ id: "create:copper_table_cloth_from_ingots_copper_stonecutting" })
    imc.remove({ id: "create:crafting/kinetics/item_drain" })
    imc.remove({ id: "create:crafting/logistics/repackager_from_conversion" })
// --- 杂七杂八 ---
    imc.shapeless(
        Item.of('twilightforest:wispy_cloud', 16),
        ["minecraft:water_bucket", "twilightforest:carminite"]
    ).replaceIngredient('minecraft:water_bucket','minecraft:bucket')
    imc.shaped(
        Item.of('twilightforest:fluffy_cloud', 1),
        ["AAA","AAA","AAA"],
        {
            "A":"twilightforest:wispy_cloud"
        }
    )
    imc.shapeless(
        Item.of('biomesoplenty:wispjelly', 16),
        ["minecraft:water_bucket", "twilightforest:wispy_cloud"]
    ).replaceIngredient('minecraft:water_bucket','minecraft:bucket')
    imc.shapeless(
        Item.of('minecraft:clay_ball', 4),
        ["minecraft:clay"]
    )
    imc.shapeless(
        Item.of('minecraft:amethyst_shard', 4),
        ["minecraft:amethyst_block"]
    )
    imc.shapeless(
        Item.of('minecraft:snowball', 4),
        ["minecraft:snow_block"]
    )
    imc.shapeless(
        Item.of('minecraft:glowstone_dust', 4),
        ["minecraft:glowstone"]
    )
    imc.shaped(
        Item.of('minecraft:deepslate', 16),
        ["AB","BA"],
        {
            "A":"minecraft:cobblestone",
            "B":"extendedae:quartz_blend"
        }
    )
    imc.shaped(
        Item.of('minecraft:tuff', 16),
        ["AB","BA"],
        {
            "A":"minecraft:cobblestone",
            "B":"minecraft:gravel"
        }
    )
    imc.shaped(
        Item.of('create:ochrum', 1),
        ["AB","BA"],
        {
            "A":"minecraft:glowstone_dust",
            "B":{"tag":"c:dusts/gold"},
        }
    )
    imc.shaped(
        Item.of('create:limestone', 16),
        ["AB","BA"],
        {
            "A":"minecraft:calcite",
            "B":"extendedae:quartz_blend"
        }
    )
    imc.shaped(
        Item.of('quark:limestone', 16),
        ["AB","BA"],
        {
            "A":"minecraft:stone",
            "B":"extendedae:quartz_blend"
        }
    )
    imc.shaped(
        Item.of('create:veridium', 16),
        ["AB","BA"],
        {
            "A":"minecraft:prismarine",
            "B":"minecraft:dark_prismarine"
        }
    )
    imc.smelting('minecraft:calcite', 'minecraft:bone_block')
    imc.smelting('16x minecraft:quartz_block', 'ae2:quartz_vibrant_glass')
    imc.shapeless(
        Item.of('minecraft:quartz', 4),
        ["minecraft:quartz_block"]
    )
    imc.shaped(
        Item.of('biomesoplenty:rose_quartz_block', 16),
        ["AA","AA"],
        {
            "A":"create:rose_quartz_block"
        }
    )
    imc.shaped(
        Item.of('minecraft:dripstone_block', 16),
        ["AB","BA"],
        {
            "A":"minecraft:calcite",
            "B":"minecraft:terracotta"
        }
    )
    imc.shaped(
        Item.of('create:asurine', 16),
        ["AB","BA"],
        {
            "A":"minecraft:crying_obsidian",
            "B":"extendedae:quartz_blend"
        }
    )
    imc.shaped(
        Item.of('quark:jasper', 16),
        ["AB","BA"],
        {
            "A":"create:scoria",
            "B":"extendedae:quartz_blend"
        }
    )
    imc.shaped(
        Item.of('quark:shale', 16),
        ["AB","BA"],
        {
            "A":"create:scoria",
            "B":"minecraft:deepslate"
        }
    )
    imc.shaped(
        Item.of('quark:myalite', 16),
        ["AB","BA"],
        {
            "A":"create:scoria",
            "B":"minecraft:end_stone"
        }
    )
    imc.shaped(
        Item.of('quark:permafrost', 16),
        ["AB","BA"],
        {
            "A":"create:scoria",
            "B":"minecraft:ice"
        }
    )
    imc.shaped(
        Item.of('quark:dusky_myalite', 8),
        ["AAA","ACA","AAA"],
        {
            "A":"quark:myalite",
            "C":"minecraft:black_dye"
        }
    )
    imc.shaped(
        Item.of('supplementaries:ash', 32),
        ["AB","BA"],
        {
            "A":"mekanism:dust_charcoal",
            "B":"mekanism:dust_coal"
        }
    )
    imc.shaped(
        Item.of('minecraft:netherrack', 16),
        ["AB","BA"],
        {
            "A":"create:cinder_flour",
            "B":"minecraft:cobblestone"
        }
    )
    imc.shapeless(
        Item.of('immersiveengineering:treated_wood_horizontal', 4),
        ["minecraft:honeycomb","#minecraft:logs"]
    )
    imc.shapeless(
        Item.of('minecraft:end_stone', 64),
        ["minecraft:end_stone","minecraft:dragon_breath"]
    )
    imc.shapeless(
        Item.of('minecraft:honey_block', 16),
        ["hostilenetworks:overworld_prediction","minecraft:honeycomb_block"]
    )
    imc.shapeless(
        Item.of('minecraft:honeycomb_block', 16),
        ["hostilenetworks:overworld_prediction","minecraft:honey_block"]
    )
    imc.shaped(
        Item.of('biomesoplenty:brimstone', 1),
        ["AAA","ACA","AAA"],
        {
            "A":{"tag": "c:dusts/sulfur"},
            "C":"minecraft:blaze_powder"
        }
    )
    imc.shaped(
        Item.of('minecraft:crying_obsidian', 8),
        ["AAA","ACA","AAA"],
        {
            "A":"minecraft:obsidian",
            "C":"farmersdelight:onion"
        }
    )
    imc.remove({ id: 'hostilenetworks:data_center' })
    imc.shaped(
        Item.of('hostilenetworks:data_center', 1),
        ["ABA","XCY","XCY"],
        {
            "A":"minecraft:echo_shard",
            "B":"apothic_enchanting:infused_breath",
            "C":"industrialforegoing:machine_frame_simple",
            "X":"hostilenetworks:sim_chamber",
            "Y":"hostilenetworks:loot_fabricator"
        }
    )

// 附魔金苹果 -> 灌注龙息
    imc.shaped(
        Item.of('apothic_enchanting:infused_breath', 1),
        ["AAA","ACA","AAA"],
        {
            "A":"minecraft:enchanted_golden_apple",
            "C":"minecraft:dragon_breath"
        }
    ).replaceIngredient('minecraft:enchanted_golden_apple','minecraft:golden_apple')
// 附魔金苹果
    imc.shaped(
        Item.of('minecraft:enchanted_golden_apple', 1),
        ["AAA","ACA","AAA"],
        {
            "A":"magic_coins:crystal_coin",
            "C":"minecraft:golden_apple"
        }
    )
// quark 刚玉
    const corundums = ['red','orange','yellow','green','blue','indigo','violet','white','black']
    corundums.forEach(c => {
        imc.stonecutting(
            'quark:' + c + '_corundum',
            '#quark:corundum'
        )
        imc.shapeless(
            Item.of('quark:' + c + '_corundum_cluster', 4),
            ['quark:' + c + '_corundum']
        )
        imc.shapeless(
            Item.of('quark:' + c + '_corundum', 2),
            ['quark:' + c + '_corundum', 'minecraft:quartz_block']
        )
        imc.shaped(
            Item.of('quark:' + c + '_corundum', 1),
            ["AA","AA"],
            {
                "A":'quark:' + c + '_corundum_cluster'
            }
        )
    })
    imc.smelting('quark:myalite_crystal', 'quark:myalite')
})
