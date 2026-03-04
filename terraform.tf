terraform {
  required_version = "~> 1.14.4"

  cloud {
    organization = "under-code"

    workspaces {
      name = "portfolio-minimal"
    }
  }

  required_providers {
    cloudflare = {
      source  = "cloudflare/cloudflare"
      version = "~> 5"
    }
  }
}

provider "cloudflare" {
  api_token = var.cloudflare_api_token
}
