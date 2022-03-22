terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = ">= 3.67.0"
    }

    random = {
      source  = "hashicorp/random"
      version = "3.1.0"
    }

    local = {
      source  = "hashicorp/local"
      version = "2.1.0"
    }

    null = {
      source  = "hashicorp/null"
      version = "3.1.0"
    }

    kubernetes = {
      source  = "hashicorp/kubernetes"
      version = "2.7.0"
    }
  }
  
  required_version = ">= 0.14"
}
