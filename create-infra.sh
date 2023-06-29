  RG_NAME=AKH_auto_cd
  ACCOUNT_NAME=akhstorageauto
  ACCOUNT_KEY=$(az storage account keys list --account-name $ACCOUNT_NAME --resource-group $RG_NAME --query "[?keyName=='key1'].value" --output tsv)

  
  az group create --location westeurope --name $RG_NAME
  az storage account create --name $ACCOUNT_NAME --resource-group $RG_NAME --sku Standard_LRS
  az storage blob service-properties update --account-name $ACCOUNT_NAME --static-website true
  az storage container set-permission --name '$web' --account-name akhstorageauto --public-access container --account-key $ACCOUNT_KEY