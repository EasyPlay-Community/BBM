const hugevault = extendContent(StorageBlock, "hugevault", {
    icons(){
    return [
        Core.atlas.find(this.name),
        Core.atlas.find("[purple]better-blocks[white]-mod-hugevault-team")
    ];},

    draw() {
        Draw.rect(Core.atlas.find("[purple]better-blocks[white]-mod-hugevault"), this.x, this.y);
        Draw.color(this.team.color);
        Draw.rect(Core.atlas.find("[purple]better-blocks[white]-mod-hugevault-team"), this.x, this.y);
        Draw.color();
    }
});