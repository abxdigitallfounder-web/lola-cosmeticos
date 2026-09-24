# Implantação efetiva: Oracle Linux 9 / E2.1.Micro

Host: lola-site-2, 163.176.223.117. Usuário SSH: opc.
Domínios: lojapink.shop e www.lojapink.shop.

Esta VM tem aproximadamente 1 GB de RAM. A implantação usa o build standalone
feito no computador, instala dependências de produção para Linux no servidor,
e executa Node.js 22 pelo systemd, com Nginx como proxy. Os arquivos Docker
continuam disponíveis para outra máquina; Docker não é usado nesta instalação.

Estrutura:
- /opt/lola/releases/3029660: artefato compilado ativo (b7da8fb mantida para rollback)
- /opt/lola/current: link para a versão ativa
- /etc/systemd/system/lola.service: serviço com usuário dedicado lola (EnvironmentFile=/etc/lola/lola.env)
- /etc/lola/lola.env: segredos server-side (root:lola 0640, NÃO versionado)
- /etc/nginx/conf.d/lojapink.conf: proxy do site
- /var/lola-build.swap: swap temporário de 2 GB para instalação
- /etc/letsencrypt/live/lojapink.shop/: certificado e chave privada (somente na VPS)
- /root/lola-backups/nginx-before-https-20260924: backup anterior ao HTTPS

Não copiar node_modules do macOS para Linux. Copiar server.js, package.json,
package-lock.json, .next e public do artefato standalone, depois executar
npm ci --omit=dev na VM. Ao empacotar no Mac, usar COPYFILE_DISABLE=1 tar
para não levar metadados Apple. Cada release deve ser testada antes de trocar
/opt/lola/current e reiniciar o serviço.

DNS NameSilo:
- Nameservers ns1.dnsowl.com, ns2.dnsowl.com, ns3.dnsowl.com
- A raiz: 163.176.223.117
- CNAME www: lojapink.shop

A lista de segurança da sub-rede Oracle permite TCP 80/443.
Dentro da VM, firewalld libera http/https e SELinux permite ao Nginx conectar
no backend. Node escuta apenas 127.0.0.1:3000. Não desabilitar SELinux/firewall.

Diagnóstico:

```bash
sudo systemctl status lola nginx
sudo journalctl -u lola -n 80 --no-pager
curl -I http://127.0.0.1:3000
curl -I https://lojapink.shop
sudo systemctl status certbot-renew.timer
sudo certbot renew --dry-run --no-random-sleep-on-renew
```

HTTPS está configurado para os dois domínios com Let's Encrypt e Certbot.
HTTP redireciona para HTTPS. Acesso direto pelo IP não é a URL do site.
O certificado inicial vence em 23/12/2026 (UTC); `certbot-renew.timer` está
habilitado e ativo, com renovação automática pelo plugin Nginx.

Certbot foi instalado pelos pacotes `certbot` e `python3-certbot-nginx`, do
repositório oficial Oracle `ol9_developer_EPEL`. Nesta VM pequena, limitar
consultas do DNF aos repositórios necessários evita o consumo elevado de
memória observado ao carregar metadados de `ol9_oci_included`.

`deploy/lojapink.conf` contém a configuração efetiva após a emissão.
Ela depende dos arquivos em `/etc/letsencrypt` e não deve ser usada em uma
VPS nova antes da emissão do certificado. Não versionar chaves privadas.
Referência: [guia do Certbot](https://eff-certbot.readthedocs.io/en/stable/using.html).

## Estado verificado em 23/09/2026 (America/Sao_Paulo)

- A implantação anterior havia deixado os arquivos e dependências instalados,
  mas os serviços `lola` e `nginx` estavam inativos e desabilitados.
- Ambos foram iniciados e habilitados com `systemctl enable --now lola nginx`.
- `nginx -t` passou. Home, página de produto, CSS, JavaScript e logo retornaram
  HTTP 200 pelo Nginx dentro da VPS.
- DNS de raiz e www resolve para 163.176.223.117.
- Firewalld permite http/https; SELinux permanece Enforcing e
  `httpd_can_network_connect` está habilitado.
- Após o usuário adicionar as regras TCP 80/443 na lista de segurança Oracle,
  ambos os domínios responderam publicamente com HTTP 200.
- Certificado emitido e instalado para `lojapink.shop` e `www.lojapink.shop`.
  HTTPS público retorna 200 nos dois; HTTP retorna 301 para HTTPS.
- Página de produto, CSS, JavaScript e logo também retornaram 200 por HTTPS.
- `certbot renew --dry-run --no-random-sleep-on-renew` passou.
- `lola`, `nginx` e `certbot-renew.timer` estão ativos e habilitados.


## Atualização em 24/09/2026 (America/Sao_Paulo) — release 3029660

- Nova release `3029660` publicada a partir do build standalone (mesmo processo:
  tar sem metadados Apple, `npm ci --omit=dev` na VM, teste antes de trocar o
  symlink). `b7da8fb` foi mantida para rollback (`ln -sfn` de volta e
  `systemctl restart lola`).
- Inclui: sacola e tela de carrinho, checkout `/checkout/easy` (Entrega +
  Pagamento), pagamento **PIX real via Jungle Pagamentos**, e a correção do
  flash dos banners empilhados na home (agora abre só como carrossel).
- **Segredos** passaram a ser carregados por `EnvironmentFile=/etc/lola/lola.env`
  (root:lola, 0640, fora do git): `JUNGLE_API_BASE`, `JUNGLE_API_KEY`,
  `JUNGLE_WEBHOOK_SECRET`, `JUNGLE_CALLBACK_URL=https://lojapink.shop/api/webhooks/jungle`
  e `META_CAPI_ACCESS_TOKEN`. Após editar o unit, rodar `systemctl daemon-reload`.
- Verificado: `lola`, `nginx` e `certbot-renew.timer` ativos; HTTPS 200 em
  `lojapink.shop` e `www.lojapink.shop`, HTTP 301; home, checkout e página de
  produto 200; criação de PIX em produção OK (`POST /api/checkout/pix`, R$ 110,98).
  Os 500 ocasionais do gateway são transitórios e tratados na aplicação — não há
  retry automático de cobrança (evita PIX duplicado, conforme a doc da Jungle).
- Webhook: a rota `POST /api/webhooks/jungle` valida `X-Signature`. Sem banco
  ainda, ela confirma 200; para liberar pedidos de forma idempotente é preciso
  persistência (TODO no código).
