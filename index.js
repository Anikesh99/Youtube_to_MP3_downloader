const express = require('express')
const cors = require('cors')
const ytdl = require('ytdl-core')
const fs = require('fs')
const app = express()
const readline = require('readline')
const ffmpeg = require('fluent-ffmpeg')
const YoutubeMP3Downloader = require('youtube-mp3-downloader')

const port = process.env.PORT || 4000;

app.use(cors({
    origin:'http://localhost:3000',
    credentials:true
}))

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.listen(port, () => {
    console.log('Server works!!! At port 4000')
})

app.post('/download', async function(req, res) {
    try {
        res.set('Content-Type', 'audio/mpeg')
        const URL = req.body.url
        console.log(URL)
        let videoName = ''
        ytdl(URL).on('info', (info) => {
            videoName = info.videoDetails.title
            const videoStream = fs.createWriteStream(videoName + '.mp3')
            const videoRead = ytdl(URL, {filter: 'audioonly'})
            stream = videoRead.pipe(videoStream)
            res.send(videoName + " has been downloaded")
            stream.on('finish', () => {
                // res.writeHead(204)
                // res.end()
            })
            console.log(videoName)
        })
    } catch (e) {
        console.log(e)
    }
    
})