SOURCE_DIR=$1
RG_NAME=AKH_auto_cd
ACCOUNT_NAME=akhstorageauto
ACCOUNT_KEY=$(az storage account keys list --account-name $ACCOUNT_NAME --resource-group $RG_NAME --query "[?keyName=='key1'].value" --output tsv)

az storage blob upload-batch \
    --destination '$web' \
    --source $SOURCE_DIR/WebApp \
    --account-name $ACCOUNT_NAME \
    --account-key $ACCOUNT_KEY \
    --overwrite