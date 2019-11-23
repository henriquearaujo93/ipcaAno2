var dog = {
    name: "boby",
    size: "big",
    color: "black",

    constructor: function(name, size, color){
        this.name = name;
        this.size = size;
        this.color = color;

        return this;
    },

    bark: function(){
        return this.name + "with" + this.size + "" + this.color + "Roff Roff...";
    }
}