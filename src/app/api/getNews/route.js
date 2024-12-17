export async function GET(request) {
  const env = process.env.NODE_ENV

  if(env == "production"){
    const response = await fetch("https://api.steampowered.com/ISteamNews/GetNewsForApp/v0002/?appid=2009350&count=3&maxlength=300&format=json")
    const data = await response.json()

    let news = data.appnews.newsitems.map(item => ({
      id: item.gid.toString(),
      date: new Date(item.date * 1000).toLocaleDateString('en-EN'),
      type: "news",
      short: item.contents,
      title: item.title,
      thumbnail: item.preview_image || "https://clan.cloudflare.steamstatic.com/images/42596158/223e5bbdcc903b0f8db0912159211b898f4b4e1b.png"
    }));

    return new Response(JSON.stringify(news))
  }
  else if (env == "development"){
    const response = await fetch("https://nmc-demo.vercel.app/api/getNews")
    const data = await response.json()
    return new Response(JSON.stringify(data))
  }
  else {
    return new Response('Hello, Next.js from unknown environment!')
  }
}