resource "azurerm_app_service_plan" "dev" {
  name                = "Fianlprojectdemo"
  location            = var.region
  resource_group_name = azurerm_resource_group.kifty.name
  kind                = "Windows"

    sku {
    
   tier = "Standard"
    size = "S1"
  }
}

resource "azurerm_app_service" "dev" {
  name                = "fitnessapptechm123"
  location            = var.region
  resource_group_name = azurerm_resource_group.kifty.name
  app_service_plan_id = "${azurerm_app_service_plan.dev.id}"

   site_config {
    dotnet_framework_version = "v4.0"
  }
  }



