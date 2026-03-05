resource "cloudflare_pages_project" "this" {
  account_id        = var.cloudflare_account_id
  name              = "portfolio-minimal"
  production_branch = "main"

  build_config = {
    build_caching   = true
    build_command   = "npm run build"
    destination_dir = "out"
  }


  deployment_configs = {
    production = {
      env_vars = {
        NODE_VERSION = {
          type  = "plain_text"
          value = "22"
        }
      }
    }
    preview = {
      env_vars = {
        NODE_VERSION = {
          type  = "plain_text"
          value = "22"
        }
      }
    }
  }
}

resource "cloudflare_dns_record" "this" {
  zone_id = var.cloudflare_zone_id
  name    = "www"
  type    = "CNAME"
  content = cloudflare_pages_project.this.subdomain
  proxied = true
  ttl     = 1
}

resource "cloudflare_pages_domain" "this" {
  account_id   = var.cloudflare_account_id
  project_name = cloudflare_pages_project.this.name
  name         = var.cloudflare_domain_name
  depends_on   = [cloudflare_dns_record.this]
}
