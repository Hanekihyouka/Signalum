ServerEvents.recipes(imc => {
    // 一键生成装饰用树    
    const yuushyaTrees = ["oak_tree","white_blooming_oak_tree","yellow_blooming_oak_tree","pink_blooming_oak_tree","oak_tree_tiny","oak_tree_mini","oak_tree_small","oak_tree_middle","oak_tree_medium","oak_tree_straight","oak_tree_winding","oak_tree_lush","maple_tree","maple_tree_tiny","maple_tree_mini","maple_tree_small","maple_tree_middle","maple_tree_medium","maple_tree_straight","maple_tree_winding","maple_tree_lush","sakura_tree","sakura_tree_tiny","sakura_tree_mini","sakura_tree_small","sakura_tree_middle","sakura_tree_medium","sakura_tree_straight","sakura_tree_winding","sakura_tree_lush","fancy_sakura_0","fancy_sakura_1","fancy_sakura_2","fancy_sakura_3"]
    yuushyaTrees.forEach(block =>{
        imc.stonecutting(`yuushya:${block}`,'mekanismadditions:lime_reinforced_plastic')
    })
    
    // 一键生成其余建筑
    // 三角钢琴用不了，不加入
    const yuushyaBuildings = ["normal_truck","dining_truck","villa_0","composite_building","octagon_pavilion","kitchen_template","mori_cat_pet_store","mori_grocery_store","tavern"]
    yuushyaBuildings.forEach(block =>{
        imc.stonecutting(`yuushya:${block}`,'mekanismadditions:white_reinforced_plastic')
    })
    
    imc.stonecutting(
        'yuushya:red_bricks',
        'minecraft:mossy_cobblestone'
    )
    imc.stonecutting(
        'yuushya:black_bricks',
        'minecraft:mossy_cobblestone'
    )
    imc.stonecutting(
        'yuushya:pale_bricks',
        'minecraft:mossy_cobblestone'
    )
})
