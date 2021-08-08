resource "azurerm_resource_group" "kifty" {
  name     = "FinalRG-blob"
      location = var.region
}