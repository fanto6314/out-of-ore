export async function GET(request) {
  const env = process.env.NODE_ENV;

  const fetchSteamNews = async () => {
    const response = await fetch(
      "https://api.steampowered.com/ISteamNews/GetNewsForApp/v0002/?appid=2009350&count=3&maxlength=300&format=json",
      {
        method: "GET",
        headers: {
          "Cache-Control": "no-cache",
          "Pragma": "no-cache",
        },
      }
    );
    const data = await response.json();

    let news = data.appnews.newsitems.map((item) => ({
      id: item.gid.toString(),
      date: new Date(item.date * 1000).toISOString(),
      type: "news",
      short: item.contents,
      title: item.title,
      thumbnail:
        item.preview_image ||
        "https://clan.cloudflare.steamstatic.com/images/42596158/223e5bbdcc903b0f8db0912159211b898f4b4e1b.png",
    }));

    // Sort the news by date descending
    return news.sort((a, b) => new Date(b.date) - new Date(a.date));
  };

  if (env === "production" || env === "development") {
    const news = await fetchSteamNews();
    return new Response(JSON.stringify(news));
  } else {
    return new Response('Hello, Next.js from unknown environment!')
  }
}
