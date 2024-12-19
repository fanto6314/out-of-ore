export async function GET(request) {
  const env = process.env.NODE_ENV;
  const url = new URL(request.url);
  const count = parseInt(url.searchParams.get('count')) || 3;
  const maxLenght = parseInt(url.searchParams.get('maxLength')) || 200;

  const fetchSteamNews = async (count, maxLenght) => {
    const response = await fetch(
      `https://api.steampowered.com/ISteamNews/GetNewsForApp/v0002/?appid=2009350&count=${count}&maxlength=${maxLenght}&format=json`,
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
      tags: item.tags,
      author: item.author,
      url: item.url,
      thumbnail:
        item.preview_image ||
        "https://clan.cloudflare.steamstatic.com/images/42596158/223e5bbdcc903b0f8db0912159211b898f4b4e1b.png",
    }));

    return news.sort((a, b) => new Date(b.date) - new Date(a.date));
  };

  if (env === "production" || env === "development") {
    const news = await fetchSteamNews(count, maxLenght);
    return new Response(JSON.stringify(news));
  } else {
    return new Response('Hello, Next.js from unknown environment!')
  }
}
