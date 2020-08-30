variable "aws_region" {
  description = "The AWS region things are created in"
  default     = "us-east-1"
}

variable "workspace_to_environment_map" {
  type = "map"
  default = {
    dev     = "dev"
    staging = "staging"
    prod    = "prod"
  }
}

variable "ecs_task_execution_role_name" {
  description = "ECS task execution role name"
  default = "myEcsTaskExecutionRole"
}

variable "ecs_auto_scale_role_name" {
  description = "ECS auto scale role Name"
  default = "myEcsAutoScaleRole"
}

variable "awsvpc_service_subnetids" {
  description = "List of subnet ids to which a service is deployed in fargate mode."
  default     = []
}

variable "az_count" {
  description = "Number of AZs to cover in a given region"
  default     = "2"
}

variable "app_image" {
  description = "Docker image to run in the ECS cluster"
  default     = "someurl.dkr.ecr.us-east-1.amazonaws.com/demeter-backend:latest"
}

variable "app_port" {
  description = "Port exposed by the docker image to redirect traffic to"
  default     = 3000
}

variable "app_count" {
  description = "Number of docker containers to run"
  default     = 2
}

variable "health_check_path" {
  default = "/"
}

variable "fargate_cpu" {
  description = "Fargate instance CPU units to provision (1 vCPU = 1024 CPU units)"
  default     = "1024"
}

variable "fargate_memory" {
  description = "Fargate instance memory to provision (in MiB)"
  default     = "2048"
}