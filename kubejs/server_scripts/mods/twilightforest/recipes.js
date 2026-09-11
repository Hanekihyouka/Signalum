ServerEvents.recipes(imc => {
    imc.remove({ id: 'twilightforest:uncrafting_table' })
    imc.shaped(
        Item.of('twilightforest:liveroot_block', 1),
        ["AAA","AAA","AAA"],
        {
            "A":"twilightforest:liveroot"
        }
    )
    imc.shapeless(
        Item.of('twilightforest:liveroot', 9),
        ["twilightforest:liveroot_block"]
    )
    imc.shapeless(
        Item.of('twilightforest:liveroot', 16),
        ["twilightforest:root_strand","#c:fertilizers"]
    )
    imc.shaped(
        Item.of('twilightforest:root', 1),
        ["AA","AA"],
        {
            "A":"twilightforest:root_strand"
        }
    )
})
