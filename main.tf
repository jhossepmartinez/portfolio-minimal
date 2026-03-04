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
