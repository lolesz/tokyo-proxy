export default async function handler(req, res) {

  const { url } = req.query;
  if (!url) return res.status(400).send('缺少 url 参数');

  try {

    const fetchOptions = {
      headers: {
        'User-Agent': req.headers['user-agent'] || 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
        'Cookie': req.headers['cookie'] || '',
        'Accept-Language': req.headers['accept-language'] || 'ja,en-US;q=0.9,en;q=0.8'
      }
    };


    const response = await fetch(url, fetchOptions);
    const text = await response.text();


    res.status(200).send(text);
  } catch (error) {
    res.status(500).send(error.toString());
  }
}
