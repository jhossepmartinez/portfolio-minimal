variable "cloudflare_api_token" {
  description = "Cloudflare account api token"
  sensitive   = true
  type        = string
}

variable "cloudflare_account_id" {
  description = "Cloudflare account id"
  type        = string
}

