# Publicar Lola na Oracle Cloud

> A VPS atual `lola-site-2` usa Oracle Linux 9, Node.js e systemd.
> Consulte [a implantação efetiva](ORACLE-LINUX.md) para operar `lojapink.shop`.
> As instruções abaixo são uma alternativa para uma VM Ubuntu com Docker.

Projeto: Next.js. Repositório: https://github.com/abxdigitallfounder-web/lola-cosmeticos
Arquitetura: Nginx no Ubuntu → Docker em127.0.0.1:3000 → Next.js standalone.
Não há banco de dados nem backend de pagamentos nesta versão do clone.

## 1. Dados necessários

IP público da VM, usuário SSH (normalmente ubuntu na imagem Ubuntu),
caminho da chave privada no seu computador e domínio próprio, se houver.
Não cole a chave privada no chat ou no GitHub.

Se ainda não criou a VM, use uma imagem Ubuntu24.04 LTS com IP público.
Como ponto de partida para compilar o projeto, use pelo menos4GB de RAM;
isso é uma estimativa operacional, não uma garantia de gratuidade da Oracle.
Confira custos/limites na sua conta antes de criar recursos.

Na rede da Oracle, permita TCP22 a partir do seu IP e TCP80/443 para visitantes.
A sub-rede pública precisa de rota para Internet Gateway. O firewall do Ubuntu
também precisa permitir80/443; verificar as regras existentes antes de alterá-las.
Não precisa expor3000. Não limpe regras de iptables nem remova o acesso SSH.

## 2. Acesso pelo computador

Substitua os valores pelo caminho real e IP da VM:

```bash
chmod 600 /caminho/da/chave.key
ssh -i /caminho/da/chave.key ubuntu@IP_DA_VPS
```

## 3. Instalação na VM Ubuntu nova

Execute na sessão SSH. Se já houver Docker/serviços instalados, inspecione antes.

```bash
sudo apt update
sudo apt install -y ca-certificates curl git nginx certbot python3-certbot-nginx
sudo install -m 0755 -d /etc/apt/keyrings
sudo curl -fsSL https://download.docker.com/linux/ubuntu/gpg -o /etc/apt/keyrings/docker.asc
sudo chmod a+r /etc/apt/keyrings/docker.asc
```

Cadastre o repositório oficial do Docker:

```bash
sudo tee /etc/apt/sources.list.d/docker.sources >/dev/null <<EOF_DOCKER
Types: deb
URIs: https://download.docker.com/linux/ubuntu
Suites: $(. /etc/os-release && echo "${UBUNTU_CODENAME:-$VERSION_CODENAME}")
Components: stable
Architectures: $(dpkg --print-architecture)
Signed-By: /etc/apt/keyrings/docker.asc
EOF_DOCKER
sudo apt update
sudo apt install -y docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
sudo systemctl enable --now docker nginx
sudo docker run --rm hello-world
```

## 4. Subir o projeto

Os arquivos Dockerfile/compose.yaml precisam estar enviados ao GitHub antes
deste passo. Para repositório privado, configure uma deploy key de leitura
ou autenticação GitHub; não coloque tokens na URL.

```bash
git clone https://github.com/abxdigitallfounder-web/lola-cosmeticos.git
cd lola-cosmeticos
sudo docker compose up -d --build --wait
sudo docker compose ps
curl -I http://127.0.0.1:3000
```

O Dockerfile compila na arquitetura da VM, inclusive ARM64, e copia public e
.next/static, necessários para servir os assets locais. A imagem executa como
usuário node e reinicia com a VM. Sem PM2 adicional.

## 5. Nginx e domínio

Crie registro DNS A do seu domínio apontando ao IP público. Se usar Cloudflare,
comece com DNS only até verificar HTTPS; depois use SSL/TLS Full (strict).

Copie o exemplo e troque DOMINIO_AQUI pelo domínio próprio. Se ainda não tiver
domínio, use o IP público para testar HTTP e deixe HTTPS para depois.

```bash
sudo cp deploy/nginx.conf.example /etc/nginx/sites-available/lola
sudo nano /etc/nginx/sites-available/lola
sudo ln -s /etc/nginx/sites-available/lola /etc/nginx/sites-enabled/lola
sudo nginx -t
sudo systemctl reload nginx
```

Abra http://SEU_DOMINIO e teste uma página de produto. Para usar www também,
adicione o nome ao server_name e configure o DNS correspondente.

## 6. HTTPS após DNS e HTTP funcionarem

Use somente nomes DNS que você configurou:

```bash
sudo certbot --nginx -d SEU_DOMINIO
sudo certbot renew --dry-run
```

Para www, acrescente -d www.SEU_DOMINIO. Não execute esses comandos com os
placeholders literais. Certificados ficam no host em /etc/letsencrypt.

## Atualização e diagnóstico

```bash
git pull --ff-only
sudo docker compose up -d --build --wait
sudo docker compose logs --tail=100 app
sudo nginx -t
```

Não execute compose down antes de construir: o container anterior continua
servindo enquanto a nova imagem é compilada. A troca de um único container pode
causar uma breve interrupção. Registre o commit anterior para reverter por git
e reconstrução, se necessário.

Se funcionar em127.0.0.1 mas não publicamente, verifique Nginx, DNS, regras da
Oracle e firewall do Ubuntu. Faça backup de /etc/nginx e /etc/letsencrypt;
o código/arquivos públicos estão no Git. Não há volume de banco nesta versão.

## Referências

- [SSH na Oracle](https://docs.oracle.com/en-us/iaas/Content/Compute/Tasks/accessinginstance.htm)
- [Rede e firewall Ubuntu na Oracle](https://blogs.oracle.com/developers/enabling-network-traffic-to-ubuntu-images-in-oracle-cloud-infrastructure)
- [Instalação oficial do Docker no Ubuntu](https://docs.docker.com/engine/install/ubuntu/)
- Next.js: guias locais self-hosting e output standalone em node_modules/next/dist/docs.
