const express = require('express');
const app = express();
const router = express.Router();
const axios = require('axios')
const cors = require('cors')
const serverless = require('serverless-http')

app.use(cors())
app.use(express.json())
router.post('/', (req, res) => {
    console.log(req.body)
    var data = {};
    axios.post('https://clft4x7md001ul508uw3ggiys.databerry.ai/query', req.body, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer e7ee7eb8-3354-4152-b086-6774f89f3d6c'
                },
            }).then((resp) => {
                console.log(resp.data)
                res.send(resp.data)
            }).catch(function (error) {
            });
})
router.get('/cors', (req, res) => {
    res.send('This has CORS enabled 🎈')
})

app.use('/.netlify/functions/api', router);
app.listen(8080, () => {
    console.log('listening on port 8080')
})

module.exports.handler = serverless(app);