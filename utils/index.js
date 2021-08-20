
module.exports = {
    getHighestFromObject: (obj) => {
        let array = []
        for (const [key, value] of Object.entries(obj)) {
            array.push({ candidate: key, votes: value });
        }
        array.sort((a, b) => {
            return b.votes - a.votes;
        })
        return array[0];
    },
};


