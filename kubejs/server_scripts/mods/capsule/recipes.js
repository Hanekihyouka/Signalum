ServerEvents.recipes(imc => {
    imc.remove({ id: 'capsule:addons_capsule_bronze'})
    imc.remove({ id: 'capsule:addons_capsule_enderium'})
    imc.remove({ id: 'capsule:addons_capsule_nickel'})
    imc.remove({ id: 'capsule:addons_capsule_tin'})
    imc.remove({ id: 'capsule:addons_capsule_constantan'})
    imc.remove({ id: 'capsule:addons_capsule_invar'})
    imc.remove({ id: 'capsule:addons_capsule_platinum'})
    imc.remove({ id: 'capsule:addons_capsule_copper'})
    imc.remove({ id: 'capsule:addons_capsule_lead'})
    imc.remove({ id: 'capsule:addons_capsule_signalum'})
    imc.remove({ id: 'capsule:addons_capsule_electrum'})
    imc.remove({ id: 'capsule:addons_capsule_lumium'})
    imc.remove({ id: 'capsule:addons_capsule_silver'})
    imc.shaped(
        Item.of('capsule:capsule', 1, {
            "minecraft:custom_data": {
            "state": 0,
            "color": 15200960,
            "size": 15
            }
        }),
        [" A ","BCB"," B "],
        {
            "A":"minecraft:stone_button",
            "B":"mekanism:ingot_refined_obsidian",
            "C":"ae2:fluix_pearl"
        }
    )
})
