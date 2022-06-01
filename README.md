# Haysqueeze
🍟 Configuration manipulation library for EPs and mixnets.

Haysqueeze is developed on *nix. If you are using Windows for development, do not bring any Windows-specific files into the repository.

## Features
- [x] No Node.js, thank you.
- [ ] Support for [V2Ray](https://github.com/v2fly/v2ray-core) configuration formats.
  - [ ] Support for multiple formats.
    - [x] JSONv4.
    - [ ] JSONv5.
  - [x] Customization logging.
  - [x] Customization DNS.
    - [ ] Support for FakeDNS.
  - [ ] Support for inbound/outbound manipulation.
    - [x] Root object.
    - [ ] Protocols.
      - [ ] `blackhole`
      - [ ] `dns`
      - [ ] `dokodemo-door`
      - [ ] `freedom`
      - [ ] `http`
      - [ ] `shadowsocks`
      - [ ] `socks`
      - [ ] `trojan`
      - [ ] `vless`
      - [ ] `vmess`
      - [ ] `loopback`
    - [ ] TLS.
      - [ ] SNI, ALPN, `allowInsecure`.
    - [ ] Transports.
      - [ ] `domainsocket`
      - [ ] `grpc`
      - [ ] `http`
      - [ ] `quic`
      - [ ] `tcp`
      - [ ] `ws`
  - [x] Customization routing.
- [ ] Support for manipulating I2Pd configurations.
  - [ ] Main configuration (`i2pd.conf`).
  - [ ] Custom tunnels (`tunnels.conf` and `tunnels.conf.d/*.conf`)
- [ ] Support for manipulating Lokinet configuration.
- [ ] Support for manipulating Yggdrasil configuration.
- [ ] Support for manipulating [Hysteria](https://github.com/HyNetwork/Hysteria) configuration.
  - [ ] Protocol: `udp`, `faketcp`, `wechat-video`
  - [ ] TLS: `alpn`, `sni`, `obfs`
    - [ ] Self-managed: `acme`
    - [ ] Pre-defined: `cert`, `key`
  - [ ] ACL
    - [ ] `direct`, `proxy`, `block`, `hijack`
    - [ ] `domain`, `domain-suffix`
    - [ ] `cidr`, `ip`, `all`
    - [ ] `country`
  - [ ] Networking: `max_conn_client`, `recv_window`, `recv_window_conn`
  - [ ] DNS: `preference`, `server`
- [ ] Parsing shared links into basic configurations.

## Dependencies
### Development
* Bash
* [Deno](https://deno.land/)
* [ESBuild](https://github.com/evanw/esbuild)
### Libraries
Nothing yet.

## Name
The name "Haysqueeze" is a tribute to Pearly Twine in [Shed My Skin](https://www.fimfiction.net/story/406711/shed-my-skin). Also, since I also need to write Cuisine as the backend service, I figured squeezed hayfries would go well.
