RG_NAME=AKH_auto_cd
ACCOUNT_NAME=akhstorageauto

ls
ACCOUNT_KEY=$(az storage account keys list --account-name $ACCOUNT_NAME --resource-group $RG_NAME --query "[?keyName=='key1'].value" --output tsv)

az storage blob upload-batch \
    --destination '$web' \
    --source ./WebApp \
    --account-name $ACCOUNT_NAME \
    --account-key $ACCOUNT_KEY \
    --overwrite