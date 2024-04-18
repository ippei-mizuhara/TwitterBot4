import express from "express";
import { TwitterApi } from "twitter-api-v2";
import process from "process";
import pg from 'pg';
import https from 'https';

// consumer keys - api key
const appKey = process.env.TWITTER_API_KEY;
// consumer keys - api key secret
const appSecret = process.env.TWITTER_API_SECRET;
const accessToken = process.env.TWITTER_ACCESS_TOKEN;
const accessSecret = process.env.TWITTER_ACCESS_TOKEN_SECRET;

const client = new TwitterApi({
    appKey,
    appSecret,
    accessToken,
    accessSecret,
});

client.readWrite;

const app = express();

app.get("/tweet", (req, res) => {
    try {
        var text = "【期間限定】今なら誰でも" + process.env.TIKTOK_AMOUNT + "円ゲットできるよ\n招待URL: " + process.env.TIKTOK_URL + "\nルールを守らないとお金がもらえないので必ず↓を見て登録してね"
        var random = Math.floor(Math.random() * (30));
        const emojis = [
            "😀",
            "😆",
            "🤣",
            "😉",
            "🥰",
            "😍",
            "🤩",
            "😘",
            "😚",
            "😋",
            "😝",
            "🤑",
            "🫣",
            "🤫",
            "🤔",
            "🫡",
            "😏",
            "🥳",
            "😎",
            "😲",
            "😮",
            "😳",
            "🥺",
            "🥹",
            "😻",
            "🙊",
            "💖",
            "❤️‍🔥",
            "💯"
        ]
        var random = emojis[Math.floor(Math.random()* emojis.length)];
        console.log(random)
        var count = Math.floor(Math.random() * 10) + 1;
        var randomEmojiText = "";
        for(var i = 0; i < count; i++){
            randomEmojiText += random;
        }
        var hashTag = "\n#TikTokLite #ポイ活";
        var link = "\n" + process.env.HATENA_URL;
        var tweet = text + randomEmojiText + hashTag + link;
        console.log(tweet)
        client.v2.tweet(tweet); 
    } catch (err) {
        console.log(err);
    }
    res.send('get');
});

app.get("/", (req, res) => {
    try {
        console.log("ログ定期実行")
    } catch (err) {
        console.log(err);
    }
    res.send('get');
});



const PORT = process.env.PORT || 3000;
app.listen(PORT);