const Alpaca = require('@alpacahq/alpaca-trade-api')

const alpaca = new Alpaca({
    keyId: process.env.apiKeyId,
    secretKey: process.env.secretKey,
    paper: true,
    usePolygon: false
})