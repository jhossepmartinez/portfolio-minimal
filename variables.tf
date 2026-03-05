variable "cloudflare_api_token" {
  description = "Cloudflare account api token"
  sensitive   = true
  type        = string
}

variable "cloudflare_account_id" {
  description = "Cloudflare account id"
  type        = string
}

variable "cloudflare_zone_id" {
  description = "Cloudflare specific domain identifier"
  type        = string
}

variable "cloudflare_domain_name" {
  description = "Custom domain name for the portfolio"
  type        = string
}
