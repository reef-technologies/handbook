# Troubleshooting Tips for common problems

## mitmproxy

 - Install [foxyproxy for chromium](https://chrome.google.com/webstore/detail/foxyproxy-standard/gcknhkkoolaabfmlnjonogaaifnjlfnp?hl=en),
 - start chromium-browser with `chromium-browser --ignore-certificate-errors`
 - add a proxy on 127.0.0.1 with a pattern for the domain that you are investigating
 - `pip3 install mitmweb`
 - start `mitmweb` in a console
 - configure your `requests.session` like this:
```python
s = requests.Session()
proxies = {
    'http':  'http://127.0.01:8080',
    'https': 'http://127.0.01:8080',
}
s.proxies = proxies
s.verify = False
```

then you can see (and save to compare via `vimdiff`) the requests made by the script and by the browser. I use chrome dev tools too, sometimes, but chrome dev tools doesn't work with `requests` and sometimes you need to know what is going on there.

Previously I tried to tell my operating system that the certificate of mitmproxy is legit and should be allowed to SSL everything. That did not go so well, not on ubuntu, not on Windows. It would seem that mitmproxy documentation was not updated since Windows XP times.

## Decrypting TLS Browser Traffic With Wireshark

https://redflagsecurity.net/2019/03/10/decrypting-tls-wireshark/

## When your laptop's wifi adapter is not working
You can use your phone as wireless adapter.
Some android phones (eg. MI) provide this functionality out of the box. Or you can use an app:

https://superuser.com/questions/410077/use-android-phone-as-wireless-adapter-for-ubuntu-desktop
