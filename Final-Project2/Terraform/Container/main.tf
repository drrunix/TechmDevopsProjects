resource "azurerm_resource_group" "rg" {
  name     = "finalcon1"
  location = "eastus2"
}

resource "azurerm_container_registry" "acr" {
  name                     = "Finalconrg"
  resource_group_name      = azurerm_resource_group.rg.name
  location                 = azurerm_resource_group.rg.location
  sku                      = "Standard"
  admin_enabled            = false
}