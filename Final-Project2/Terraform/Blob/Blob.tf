resource "azurerm_storage_account" "tilly" {
  name                     = "finalsa"
  location                 = var.region
  resource_group_name      = azurerm_resource_group.kifty.name
  account_tier             = "Standard"
  account_replication_type = "LRS"
}

resource "azurerm_storage_container" "tillycon" {
  name                  = "finalsc"
  storage_account_name  = azurerm_storage_account.tilly.name
 #container_access_type = "private"
}

resource "azurerm_storage_blob" "blobdemo-file" {
  name                   = "blobdemofile.txt"
  storage_account_name   = azurerm_storage_account.tilly.name
  storage_container_name = azurerm_storage_container.tillycon.name
  type                   = "Block"
  source                 = "blobdemofile.txt"
}