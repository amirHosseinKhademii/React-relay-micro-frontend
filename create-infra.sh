  RG_NAME=AKH_auto_cd
  ACCOUNT_NAME=akhstorageauto
  
  az group create --location westeurope --name $RG_NAME
  az storage account create --name $ACCOUNT_NAME --resource-group $RG_NAME --sku Standard_LRS
  az storage blob service-properties update --account-name $ACCOUNT_NAME --static-website true
