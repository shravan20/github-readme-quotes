

const getQuote = (req, res, next) => {

    try {
        res.send({
            "quote":"sample"
        });
    } catch (error) {
        res.send({
            "quote":"error"
        });
    }

}

module.exports = {
    getQuote
}