//Pair list constructor
function WList() {
    this.list = [];
    this.currentPair;

    this.createList = function(text){
        try {
            let pairs = []
            let result = []
            pairs = text.replaceAll("/n", "\n").replaceAll("<", "").replaceAll(">", "").replaceAll("/t", "\t").trim().split("\n")

            for(let i = 0; i<pairs.length; i++) {
            result[i] = pairs[i].split("\t")
            result[i][0].trim
            result[i][1].trim
            }
            this.list = result
            this.currentPair = result[0]
        } catch (error) {

        }
    }

    this.addListItem = function(word, translation){
        let pair = [word, translation]
        this.list.push(pair)
    }

    this.randomCurrentPair = function() {
        this.currentPair = this.list[Math.floor(Math.random() * this.list.length)]
    }
}