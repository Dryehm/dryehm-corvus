Events.on(ClientLoadEvent, b  => {
UnitTypes.corvus.speed = 3;
UnitTypes.corvus.legCount = 8;
UnitTypes.corvus.legLength = 100;
UnitTypes.corvus.legMoveSpace = .5;
UnitTypes.corvus.health = 20000000;
//yes yes 20m hp
UnitTypes.corvus.weapons.get(0).bullet.length = 1000;
UnitTypes.corvus.weapons.get(0).reload = 1;
UnitTypes.corvus.weapons.get(0).bullet.damage = 50000;
UnitTypes.corvus.weapons.get(0).bullet.width = 150;
});
