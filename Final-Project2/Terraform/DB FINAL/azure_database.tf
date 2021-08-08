resource "azurerm_mysql_server" "demo" {
  name                = "finalazureserverdb"
  location            = var.region
  resource_group_name = azurerm_resource_group.kifty.name

  administrator_login          = "mysqladmin"
  administrator_login_password = "September@2016"

  sku_name   = "B_Gen5_2"
  storage_mb = 5120
  version    = "5.7"

  auto_grow_enabled                 = true
  backup_retention_days             = 7
  geo_redundant_backup_enabled      = false
  infrastructure_encryption_enabled = false
  public_network_access_enabled     = true
  ssl_enforcement_enabled           = true
  ssl_minimal_tls_version_enforced  = "TLS1_2"

}

resource "azurerm_mysql_database" "training" {
  name                = "finalazuredb"
  resource_group_name = azurerm_resource_group.kifty.name
  server_name         = azurerm_mysql_server.demo.name
  charset             = "utf8"
  collation           = "utf8_unicode_ci"
}

 resource "azurerm_mysql_firewall_rule" "final1azure" {
  name                = "Azureservices"
  resource_group_name = azurerm_resource_group.kifty.name
  server_name         = azurerm_mysql_server.demo.name
  start_ip_address    = "0.0.0.0"
  end_ip_address      = "0.0.0.0"
    }
  
resource "azurerm_mysql_firewall_rule" "final1local" {
  name                = "office"
  resource_group_name = azurerm_resource_group.kifty.name
  server_name         = azurerm_mysql_server.demo.name
  start_ip_address    = "40.112.0.0"
  end_ip_address      = "40.112.255.255"
}

resource "azurerm_mysql_configuration" "example" {
  name                = "interactive_timeout"
  resource_group_name = azurerm_resource_group.kifty.name
  server_name         = azurerm_mysql_server.demo.name
  value               = "600"
}
resource "azurerm_virtual_network" "demo" {
  name                = "finalnetwork"
  location            = var.region
  resource_group_name = azurerm_resource_group.kifty.name
  address_space       = ["10.0.0.0/16"]
}

resource "azurerm_subnet" "demo-database-1" {
  name                 = "databasesubnet"
  resource_group_name  = azurerm_resource_group.kifty.name
  virtual_network_name = azurerm_virtual_network.demo.name
  address_prefix       = "10.0.1.0/24"
  service_endpoints    = ["Microsoft.Sql"]
}


/*resource "azurerm_mysql_virtual_network_rule" "demo-database-subnet-vnet-rule" {
  name                = "mysql-vnet-rule"
  resource_group_name = azurerm_resource_group.kifty.name
  server_name         = azurerm_mysql_server.demo.name
  subnet_id           = azurerm_subnet.demo-database-1.id
}
*/

/*resource "azurerm_mysql_virtual_network_rule" "demo-subnet-vnet-rule" {
  name                = "mysql-demo-subnet-vnet-rule"
  resource_group_name = azurerm_resource_group.kifty.name
  server_name         = azurerm_mysql_server.demo.name
  subnet_id           = azurerm_subnet.demo-internal-1.id
}*/
/*
resource "azurerm_mysql_firewall_rule" "demo-allow-demo-instance" {
  name                = "mysql-demo-instance"
  resource_group_name = azurerm_resource_group.kifty.name
  server_name         = azurerm_mysql_server.demo.name
  start_ip_address    = azurerm_network_interface.demo-instance.private_ip_address
  end_ip_address      = azurerm_network_interface.demo-instance.private_ip_address
}*/